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
    <mesh position={position} ref={ref} castShadow receiveShadow>
      <textBufferGeometry
        attach="geometry"
        args={[args, textOptions]}
        factor={0.7}
      />
      <meshPhysicalMaterial
        clearcoat={1}
        reflectivity={1}
        roughness={0.3}
        color="teal"
        attach="material"
      />
    </mesh>
  );
}

// function Planet({ args, position, map, ...props }) {
//   const ref = useRef();

//   return (
//     <mesh position={position} {...props} ref={ref}>
//       <boxBufferGeometry attach="geometry" args={args} />
//       <meshStandardMaterial map={map} />
//     </mesh>
//   );
// }

function Plane({ position }) {
  const ref = useRef(null);

  return (
    <mesh
      ref={ref}
      position={position}
      // rotation={[-Math.PI / 2, 0, 0]}
      receiveShadow
    >
      <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
      <meshPhongMaterial
        // clearcoat={0.5}
        // reflectivity={1}
        // roughness={0.6}
        attach="material"
        color="#61e8e1"
      />
    </mesh>
  );
}

export default function Welcome() {
  const date = new Date();
  const [hour] = useState(date);

  return (
    <div className="Welcome">
      <Canvas
        shadowMap
        colorManagement
        camera={{ position: [0, 5, 100], fov: 100 }}
        gl={{
          powerPreference: 'high-performance',
        }}
      >
        <ambientLight intensity={0.1} castShadow />
        <spotLight
          intensity={0.25}
          position={[50, 80, 190]}
          penumbra={1}
          castShadow
        />
        <spotLight
          intensity={0.3}
          position={[-200, 80, 110]}
          penumbra={1}
          castShadow
        />
        <group>
          {/* <Suspense fallback={null}>
            {hour.getHours() < 16 ? (
              <Planet args={[50, 32, 32]} position={[-500, 400, -800]} />
            ) : (
              <Planet args={[10, 32, 32]} position={[150, 50, 50]} />
            )}
          </Suspense> */}
          <Plane position={[0, 0, -20]} />
          <TextMesh args="Good" position={[-75, 32, 0]} />

          <Suspense fallback={null}>
            {hour.getHours() < 12 ? (
              <TextMesh args="Morning," position={[-75, 0, 0]} />
            ) : (
              <TextMesh args="Afternoon," position={[-75, 0, 0]} />
            )}
          </Suspense>
          <TextMesh args="my name" position={[-75, -28, 0]} />
          <TextMesh args="is Vlad," position={[-75, -60, 0]} />
          {/* <TextMesh args=">Web" position={[-35, -20, -10]} />
          <TextMesh args="Developer." position={[-35, -30, 0]} /> */}
        </group>
      </Canvas>
    </div>
  );
}
