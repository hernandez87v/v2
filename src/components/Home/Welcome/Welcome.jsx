import React, { useRef } from 'react';
import './Welcome.css';
import { Canvas } from 'react-three-fiber';
import { FontLoader } from 'three';
import Modak from './Modak.json';
// import Constellation from '../../Constellation/Constellation';
import { OrbitControls, Stars } from 'drei';
// import { useSphere } from 'use-cannon';

function Planet({ args, position, ...props }) {
  // const [ref] = useSphere(() => ({ args: 0.5 }));
  const ref = useRef();
  console.log(position, args);
  return (
    <mesh position={position} {...props} ref={ref}>
      <sphereBufferGeometry attach="geometry" args={args} />
      <meshStandardMaterial color="lemonchiffon" attach="material" />
      {/* <OrbitControls
        enableZoom={false}
        enabled={false}
        autoRotate
        autoRotateSpeed={0.8}
      /> */}
    </mesh>
  );
}

function TextMesh({ args, position }) {
  const font = new FontLoader().parse(Modak);

  const textOptions = {
    font,
    size: 15,
    height: 3,
    curveSegments: 15,
    bevelEnabled: true,
    bevelThickness: 1.2,
    bevelSize: 1,
    bevelSegments: 2,
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
        roughness={0.5}
        metalness={1}
        // color="lemonchiffon"
        color="red"
        attach="material"
      />
      <OrbitControls
        enableZoom={false}
        enabled={false}
        autoRotate
        autoRotateSpeed={0.8}
      />
    </mesh>
  );
}

export default function Welcome() {
  return (
    <div className="Welcome">
      <Canvas colorManagement camera={{ position: [0, 30, 100], fov: 85 }}>
        <ambientLight intensity={0.2} />
        <spotLight intensity={0.2} position={[30, -60, 160]} penumbra={1} />
        <spotLight intensity={0.2} position={[-30, -10, 200]} penumbra={1} />
        <spotLight intensity={0.2} position={[-200, -150, -150]} penumbra={1} />
        <group>
          <Planet args={[10, 32, 32]} position={[110, -25, 0]} color="silver" />
          <Planet
            args={[20, 32, 32]}
            position={[0, 50, -100]}
            color="lemonchiffon"
          />
          <TextMesh args="Hello," position={[-43, 20, 0]} />
          <TextMesh args="my name" position={[-43, 0, 0]} />
          <TextMesh args="is Vlad," position={[-43, -20, 0]} />
          <TextMesh args="Web Dev." position={[-43, -40, 0]} />
          <Stars radius={75} count={1000} />
        </group>
      </Canvas>
    </div>
  );
}
