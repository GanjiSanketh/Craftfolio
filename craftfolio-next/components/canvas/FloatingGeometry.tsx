"use client";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float, Torus } from "@react-three/drei";
import * as THREE from "three";

export function FloatingGeometry() {
  const meshRef = useRef<THREE.Mesh>(null);
  const torusRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(t * 0.3) * 0.2;
      meshRef.current.rotation.y = t * 0.15;
    }
    if (torusRef.current) {
      torusRef.current.rotation.x = t * 0.25;
      torusRef.current.rotation.z = Math.sin(t * 0.2) * 0.3;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = -t * 0.08;
    }
  });

  return (
    <group position={[2.5, 0, 0]}>
      {/* Main distorted sphere */}
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
        <mesh ref={meshRef} castShadow>
          <icosahedronGeometry args={[1.4, 4]} />
          <MeshDistortMaterial
            color="#c9a84c"
            roughness={0.15}
            metalness={0.85}
            distort={0.35}
            speed={1.5}
            envMapIntensity={2}
          />
        </mesh>
      </Float>

      {/* Orbiting torus */}
      <mesh ref={torusRef} position={[0, 0, 0]}>
        <torusGeometry args={[2.2, 0.015, 8, 100]} />
        <meshBasicMaterial color="#c9a84c" opacity={0.3} transparent />
      </mesh>

      {/* Outer ring */}
      <mesh ref={ringRef} position={[0, 0, 0]}>
        <torusGeometry args={[2.8, 0.008, 8, 100]} />
        <meshBasicMaterial color="#888888" opacity={0.15} transparent />
      </mesh>

      {/* Point lights */}
      <pointLight color="#c9a84c" intensity={2} distance={8} position={[3, 3, 3]} />
      <pointLight color="#6c63ff" intensity={1} distance={6} position={[-3, -2, 2]} />
    </group>
  );
}
