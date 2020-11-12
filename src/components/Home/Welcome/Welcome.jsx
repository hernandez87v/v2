import React, { Suspense, useRef, useState } from 'react';
import './Welcome.css';
import { Canvas } from 'react-three-fiber';
import { FontLoader } from 'three';
import Modak from './Modak.json';

function TextMesh({ args, position }) {
  const font = new FontLoader().parse(Modak);

  const textOptions = {
    font,
    size: 25,
    height: 3,
    curveSegments: 15,
    bevelEnabled: true,
    bevelThickness: 2,
    bevelSize: 1,
    bevelSegments: 8,
  };
  const ref = useRef(null);

  return (
    <mesh position={position} ref={ref}>
      <textBufferGeometry
        attach="geometry"
        args={[args, textOptions]}
        factor={0.7}
      />
      <meshPhysicalMaterial
        clearcoat={1}
        reflectivity={1}
        roughness={0.3}
        color="tomato"
        attach="material"
      />
    </mesh>
  );
}

function Planet({ args, position, map, ...props }) {
  const ref = useRef();

  return (
    <mesh position={position} {...props} ref={ref}>
      <boxBufferGeometry attach="geometry" args={args} />
      <meshStandardMaterial map={map} />
    </mesh>
  );
}

export default function Welcome() {
  const date = new Date();
  const [hour] = useState(date);

  return (
    <div className="Welcome">
      <Canvas
        colorManagement
        camera={{ position: [0, 0, 100], fov: 100 }}
        gl={{
          powerPreference: 'high-performance',
        }}
      >
        <ambientLight intensity={0.2} />
        <spotLight intensity={0.2} position={[0, 20, 200]} penumbra={1} />
        <spotLight intensity={0.2} position={[0, 0, 0]} penumbra={1} />
        <group>
          {/* <Suspense fallback={null}>
            {hour.getHours() < 16 ? (
              <Planet args={[50, 32, 32]} position={[-500, 400, -800]} />
            ) : (
              <Planet args={[10, 32, 32]} position={[150, 50, 50]} />
            )}
          </Suspense> */}
          <TextMesh args="Good" position={[-75, 60, 0]} />

          <Suspense fallback={null}>
            {hour.getHours() < 12 ? (
              <TextMesh args="Morning," position={[-75, 30, 0]} />
            ) : (
              <TextMesh args="Afternoon," position={[-75, 30, 0]} />
            )}
          </Suspense>
          <TextMesh args="my name" position={[-75, 0, 0]} />
          <TextMesh args="is Vlad," position={[-75, -35, 0]} />
          {/* <TextMesh args=">Web" position={[-35, -20, -10]} />
          <TextMesh args="Developer." position={[-35, -30, 0]} /> */}
        </group>
      </Canvas>
    </div>
  );
}
