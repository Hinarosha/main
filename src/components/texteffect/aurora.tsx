import { useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";

// AuroraText: 3D text whose color field is driven by a shader
// similar in spirit to the Medusae fragment shader.
// Must be used INSIDE a <Canvas>.
interface AuroraProps {
    text: string;
}

export default function Aurora({ text }: AuroraProps) {
    // Single shared shader material instance for this text
    const material = useMemo(
        () =>
            new THREE.ShaderMaterial({
                uniforms: {
                    uTime: { value: 0 },
                },
                vertexShader: `
                    varying vec3 vPosition;

                    void main() {
                        vPosition = position;
                        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                    }
                `,
                fragmentShader: `
                    uniform float uTime;
                    varying vec3 vPosition;

                    // Simple hash + noise to break up patterns
                    float hash(vec2 p) {
                        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
                    }

                    float noise(vec2 p) {
                        vec2 i = floor(p);
                        vec2 f = fract(p);
                        f = f * f * (3.0 - 2.0 * f);

                        float a = hash(i);
                        float b = hash(i + vec2(1.0, 0.0));
                        float c = hash(i + vec2(0.0, 1.0));
                        float d = hash(i + vec2(1.0, 1.0));

                        return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
                    }

                    void main() {
                        // Position in "field" space, scaled so blobs are fairly big
                        vec2 p = vPosition.xy * 0.8;

                        // Time: slowed down so movement is more relaxed
                        float t = uTime * 0.4;

                        // Three moving centers for the color "blobs"
                        vec2 centerB = vec2(
                            sin(t * 0.6) * 1.8,
                            cos(t * 0.4) * 1.4
                        );
                        vec2 centerR = vec2(
                            sin(t * 0.9 + 2.1) * 1.8,
                            cos(t * 0.7 + 1.3) * 1.4
                        );
                        vec2 centerY = vec2(
                            sin(t * 0.5 + 4.2) * 1.8,
                            cos(t * 0.8 + 3.0) * 1.4
                        );

                        // Distance-based falloff so colors are in big "areas",
                        // not super fine gradients.
                        float dB = length(p - centerB);
                        float dR = length(p - centerR);
                        float dY = length(p - centerY);

                        // Turn distances into blobs (0..1, then sharpen).
                        // Wider inner radius + sharper falloff = more solid areas, thinner edges.
                        float wB = smoothstep(1.6, 0.4, dB);
                        float wR = smoothstep(1.6, 0.4, dR);
                        float wY = smoothstep(1.6, 0.4, dY);

                        // Add a bit of noise so the edges aren't perfect circles
                        float n = noise(p * 1.2 + t * 0.2) * 0.15;
                        wB = clamp(pow(wB + n, 3.0), 0.0, 1.0);
                        wR = clamp(pow(wR + n, 3.0), 0.0, 1.0);
                        wY = clamp(pow(wY + n, 3.0), 0.0, 1.0);

                        // Normalize weights so we always have a nice mix
                        float sumW = wB + wR + wY + 1e-5;
                        wB /= sumW;
                        wR /= sumW;
                        wY /= sumW;

                        // Google / Medusae palette
                        vec3 cBlue = vec3(0.26, 0.52, 0.96);
                        vec3 cRed = vec3(0.92, 0.26, 0.21);
                        vec3 cYellow = vec3(0.98, 0.73, 0.01);

                        // Final color is a mix of 3 large moving blobs
                        vec3 color = cBlue * wB + cRed * wR + cYellow * wY;

                        gl_FragColor = vec4(color, 1.0);
                    }
                `,
                transparent: true,
                depthWrite: false,
            }),
        []
    );

    // Drive time uniform so colors move like Medusae
    useFrame(({ clock }) => {
        material.uniforms.uTime.value = clock.getElapsedTime();
    });

    return (
        <Text
            // Keep your current size; you can tweak this as you like
            fontSize={0.6}
            // Use the default drei font (Google CSS fonts can't be used directly here)
            fontWeight={600}
            // Slight outline in the same color family to visually thicken strokes
            outlineWidth={0.02}
            outlineBlur={0.001}
            outlineColor="#111111"
            anchorX="center"
            anchorY="middle"
            position={[0, 0, 1]}
            // Ensure the text always renders on top of the Medusae particles
            renderOrder={10}
            material={material}
        >
            {text}
        </Text>
    );
}