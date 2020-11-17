import React, { Suspense, useRef, useState } from 'react';
import './Welcome.css';
import { Canvas } from 'react-three-fiber';
import { FontLoader } from 'three';
import Modak from '../../fonts/Modak.json';
// import Scene from '../../Scene/Scene';

function TextMesh({ args, position }) {
  const font = new FontLoader().parse(Modak);

  const textOptions = {
    font,
    size: 20,
    height: 2,
    curveSegments: 15,
    bevelEnabled: true,
    bevelThickness: 2,
    bevelSize: 0.9,
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
        // color="#61e8e1"
        color="cyan"
        attach="material"
      />
    </mesh>
  );
}

// function Box({ args, position, map, color, ...props }) {
//   const ref = useRef();

//   return (
//     <mesh position={position} {...props} ref={ref}>
//       <boxBufferGeometry attach="geometry" args={args} />
//       {/* <meshStandardMaterial color={color} map={map} /> */}
//       <MeshWobbleMaterial
//         attach="material"
//         color={color}
//         // map={map}
//         speed={2}
//         factor={0.7}
//       />
//     </mesh>
//   );
// }

function Plane({ position }) {
  const ref = useRef(null);

  return (
    <mesh ref={ref} position={position} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
      <meshPhongMaterial
        attach="material"
        color="#0e1119"
        speed={2}
        factor={0.7}
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
        <spotLight
          intensity={0.3}
          position={[-150, 100, 180]}
          penumbra={1}
          castShadow
        />
        <spotLight
          intensity={0.1}
          position={[-10, 20, 150]}
          penumbra={0.5}
          castShadow
        />
        <spotLight
          intensity={0.3}
          position={[150, -70, 190]}
          penumbra={1}
          castShadow
        />
        <group>
          <Plane position={[0, 0, -5]} />
          <TextMesh args="Good" position={[-55, 40, 0]} />
          <Suspense fallback={null}>
            {time < 12 ? (
              <TextMesh args="Morning," position={[-55, 15, 0]} />
            ) : time < 18 ? (
              <TextMesh args="Afternoon," position={[-55, 15, 0]} />
            ) : (
              <TextMesh args="Evening," position={[-55, 15, 0]} />
            )}
          </Suspense>
          <TextMesh args="my name" position={[-55, -10, 0]} />
          <TextMesh args="is Vlad." position={[-55, -35, 0]} />
        </group>
      </Canvas>
    </div>
  );
}
