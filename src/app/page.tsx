'use client';

import { Canvas } from "@react-three/fiber";
import Medusae from "@/components/medusae";
import { useTranslations } from 'next-intl';
import Aurora from "@/components/texteffect/aurora";
import Typewriter from "@/components/texteffect/typewritter";

export default function Home() {
  const t = useTranslations('HomePage');
  const rawSubtitle = t.raw('subtitle');

  return (
    <div style={{ width: "100vw", height: "100vh", background: "#ffffff", position: "relative", overflow: "hidden" }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <color attach="background" args={["#ffffff"]} />
        <Medusae />
        {/* Aurora text rendered directly in the 3D scene,
            sharing a similar animated color field to Medusae */}
        <Aurora text={t('title')} />
      </Canvas>
      <div
        style={{
          position: 'absolute',
          bottom: '22%',
          left: '50%',
          transform: 'translateX(-50%)',
          textAlign: 'center',
          // Allow pointer interaction so links remain clickable
          pointerEvents: 'auto',
          zIndex: 10,
        }}
      >
        {/* Animate the raw HTML subtitle so <br/> and <a> are preserved */}
        <Typewriter html={rawSubtitle} />
      </div>
    </div>
  );
}
