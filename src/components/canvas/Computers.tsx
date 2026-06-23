import { Suspense, useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Preload } from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../layout/Loader";

/* ─── Camera responds to R3F mouse state ──────────────────── */
function CameraRig() {
  const { camera } = useThree();
  const target = useRef(new THREE.Vector3());

  useFrame((state) => {
    target.current.set(state.mouse.x * 0.4, state.mouse.y * 0.25, 0);
    camera.position.x += (target.current.x - camera.position.x) * 0.06;
    camera.position.y += (target.current.y - camera.position.y) * 0.06;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

/* ─── Ambient particle field ──────────────────────────────── */
function ParticleField({ count = 2400 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 18 + Math.random() * 50;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.55;
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.018;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.009) * 0.04;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.07}
        color="#c9a84c"
        transparent
        opacity={0.55}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

/* ─── Floating distorted gold sphere ─────────────────────── */
function GoldSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  const ring1 = useRef<THREE.Mesh>(null);
  const ring2 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.12;
      meshRef.current.rotation.x = Math.sin(t * 0.28) * 0.18;
    }
    if (ring1.current) ring1.current.rotation.x = t * 0.22;
    if (ring2.current) ring2.current.rotation.z = -t * 0.08;
  });

  return (
    <group position={[2.8, 0, 0]}>
      <Float speed={1.4} rotationIntensity={0.3} floatIntensity={0.7}>
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[1.35, 4]} />
          <MeshDistortMaterial
            color="#c9a84c"
            roughness={0.12}
            metalness={0.9}
            distort={0.32}
            speed={1.4}
          />
        </mesh>
      </Float>

      <mesh ref={ring1}>
        <torusGeometry args={[2.1, 0.014, 8, 100]} />
        <meshBasicMaterial color="#c9a84c" opacity={0.25} transparent />
      </mesh>

      <mesh ref={ring2}>
        <torusGeometry args={[2.7, 0.007, 8, 100]} />
        <meshBasicMaterial color="#888888" opacity={0.12} transparent />
      </mesh>

      <pointLight color="#c9a84c" intensity={2.0} distance={8} position={[3, 3, 3]} />
      <pointLight color="#6c63ff" intensity={0.8} distance={6} position={[-3, -2, 2]} />
    </group>
  );
}

/* ─── Exported Canvas ─────────────────────────────────────── */
const ComputersCanvas = () => {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 7], fov: 55 }}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 0.85,
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <ambientLight intensity={0.06} />
        <directionalLight color="#ffffff" intensity={0.25} position={[5, 5, 5]} />
        <CameraRig />
        <ParticleField count={2400} />
        <GoldSphere />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
