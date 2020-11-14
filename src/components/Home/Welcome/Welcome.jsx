import React, { Suspense, useRef, useState } from 'react';
import './Welcome.css';
import { Canvas } from 'react-three-fiber';
import { FontLoader } from 'three';
import Modak from '../../fonts/Modak.json';
// import Scene from '../../Scene/Scene';

// import { DeviceOrientationControls } from 'drei';
// import { OrbitControls } from 'drei';

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
    bevelSegments: 5,
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
        // color="teal"
        color="#ffe66d"
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
// console.log(<DeviceOrientationControls />);

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
        // roughness={1}
        attach="material"
        // color="#61e8e1"
        color="#ffe66d"
      />
    </mesh>
  );
}

export default function Welcome() {
  const date = new Date();
  const [hour] = useState(date);
  const time = hour.getHours();

  return (
    <div className="Welcome">
      <Canvas
        shadowMap
        colorManagement
        camera={{ position: [0, 0, 100], fov: 100 }}
        gl={{
          powerPreference: 'high-performance',
        }}
      >
        <ambientLight intensity={0.1} />
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
          <Plane position={[0, 0, -5]} />
          {/* <OrbitControls /> */}
          <TextMesh args="Good" position={[-85, 32, 0]} />

          <Suspense fallback={null}>
            {time < 12 ? (
              <TextMesh args="Morning," position={[-85, 0, 0]} />
            ) : time < 18 ? (
              <TextMesh args="Afternoon," position={[-90, 0, 0]} />
            ) : (
              <TextMesh args="Evening," position={[-85, 0, 0]} />
            )}
          </Suspense>
          <TextMesh args="my name" position={[-85, -28, 0]} />
          <TextMesh args="is Vlad," position={[-85, -60, 0]} />
        </group>
      </Canvas>
    </div>
  );
}
