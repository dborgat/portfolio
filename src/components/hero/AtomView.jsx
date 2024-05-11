import * as THREE from 'three';
import { useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  Trail,
  Float,
  Line,
  Sphere,
  Stars,
  ContactShadows,
} from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

export default function AtomView() {
  return (
    <div className='md:col-start-2 -mt-9 hidden md:block size-full'>
      <Canvas camera={{ position: [0, 0, 10] }}>
        <Float speed={2} rotationIntensity={3} floatIntensity={4}>
          <Atom />
        </Float>
        <ContactShadows
          position={[0, -3.5, 0]}
          opacity={0.65}
          scale={20}
          blur={1}
          far={20}
        />
        <Stars saturation={0} count={4000} speed={0.5} fade={true} />
        <EffectComposer>
          <Bloom luminanceThreshold={1} radius={0.7} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}

function Atom(props) {
  const [visible, setVisible] = useState(false);

  const meshRef = useRef();

  const points = useMemo(
    () =>
      new THREE.EllipseCurve(0, 0, 3, 1.15, 0, 2 * Math.PI, false, 0).getPoints(
        100
      ),
    []
  );

  useGSAP(
    () => {
      setVisible(true);
      gsap.from(meshRef.current.scale, {
        x: 0,
        y: 0,
        z: 0,
        duration: 1,
        ease: 'elastic.out(1, 0.3)',
        delay: 0.3,
      });
    },
    { scope: meshRef }
  );

  return (
    <group {...props} ref={meshRef} visible={visible}>
      <Line worldUnits points={points} color='#1F1E1F' lineWidth={0.3} />
      <Line
        worldUnits
        points={points}
        color='#1F1E1F'
        lineWidth={0.3}
        rotation={[0, 0, 1]}
      />
      <Line
        worldUnits
        points={points}
        color='#1F1E1F'
        lineWidth={0.3}
        rotation={[0, 0, -1]}
      />
      <Electron position={[0, 0, 0.5]} speed={1} />
      <Electron
        position={[0, 0, 0.5]}
        rotation={[0, 0, Math.PI / 3]}
        speed={2.5}
      />
      <Electron
        position={[0, 0, 0.5]}
        rotation={[0, 0, -Math.PI / 3]}
        speed={4}
      />
      <Sphere args={[0.55, 64, 64]}>
        <meshBasicMaterial color={[10, 0.5, 20]} toneMapped={false} />
      </Sphere>
    </group>
  );
}

function Electron({ radius = 2.75, speed = 2, ...props }) {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed;
    ref.current.position.set(
      Math.sin(t) * radius,
      (Math.cos(t) * radius * Math.atan(t)) / Math.PI / 1.25,
      0
    );
  });
  return (
    <group {...props}>
      <mesh ref={ref}>
        <sphereGeometry args={[0.25]} />
        <meshBasicMaterial color={[10, 0.5, 20]} toneMapped={true} />
      </mesh>
    </group>
  );
}
