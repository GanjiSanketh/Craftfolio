"use client";
import { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Stars, Environment, PerspectiveCamera } from "@react-three/drei";
import { ParticleField } from "./ParticleField";
import { FloatingGeometry } from "./FloatingGeometry";
import { useMousePosition } from "@/hooks/useMousePosition";
import * as THREE from "three";

function CameraRig() {
  const { camera } = useThree();
  const { normalized } = useMousePosition();
  const target = useRef(new THREE.Vector3());

  useFrame(() => {
    target.current.set(normalized.x * 0.5, normalized.y * 0.3, 0);
    camera.position.x += (target.current.x - camera.position.x) * 0.05;
    camera.position.y += (target.current.y - camera.position.y) * 0.05;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

function SceneSetup() {
  return (
    <>
      <ambientLight intensity={0.05} />
      <directionalLight
        color="#ffffff"
        intensity={0.3}
        position={[5, 5, 5]}
      />
      <pointLight color="#c9a84c" intensity={1.5} position={[-5, 3, 2]} />
      <pointLight color="#6c63ff" intensity={0.8} position={[5, -3, -2]} />
    </>
  );
}

export function HeroCanvas() {
  return (
    <div className="absolute inset-0 -z-0">
      <Canvas
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 0.8,
        }}
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 7], fov: 55 }}
      >
        <Suspense fallback={null}>
          <SceneSetup />
          <CameraRig />
          <ParticleField count={2500} />
          <FloatingGeometry />
          <Stars
            radius={80}
            depth={40}
            count={1500}
            factor={3}
            saturation={0}
            fade
            speed={0.3}
          />
          <Environment preset="night" />
        </Suspense>
      </Canvas>
    </div>
  );
}
