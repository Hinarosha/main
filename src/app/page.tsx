'use client';

import { Canvas } from "@react-three/fiber";
import Medusae from "@/components/medusae";

export default function Home() {
  return (
    <div style={{ width: "100vw", height: "100vh", background: "#ffffff" }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <color attach="background" args={["#ffffff"]} />
        <Medusae />
      </Canvas>
    </div>
  );
}
