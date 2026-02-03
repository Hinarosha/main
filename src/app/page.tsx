'use client';

import { Canvas } from "@react-three/fiber";
import Medusae from "@/components/medusae";
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('HomePage');
  return (
    <div style={{ width: "100vw", height: "100vh", background: "#ffffff", position: "relative", overflow: "hidden" }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <color attach="background" args={["#ffffff"]} />
        <Medusae />
      </Canvas>
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        pointerEvents: 'none',
        zIndex: 10
      }}>
        <h1 style={{ fontSize: '4rem', color: '#1a1a1a', margin: '0 0 1rem 0' }}>{t('title')}</h1>
        <p
          style={{ fontSize: '1.2rem', color: '#4a4a4a', maxWidth: '600px', lineHeight: '1.5' }}
          dangerouslySetInnerHTML={{ __html: t.raw('subtitle') }}
        />
      </div>
    </div>
  );
}
