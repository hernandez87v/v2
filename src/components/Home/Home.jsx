import React, { useRef } from 'react';
import './Home.css';

import { Canvas, useFrame } from 'react-three-fiber';
import * as THREE from 'three';
import Modak from './Modak.json';
// import texture from './space-texture.jpg';
import { OrbitControls } from 'drei';

const TextMesh = ({ props, args, position }) => {
  const mesh = useRef(null);

  const font = new THREE.FontLoader().parse(Modak);

  const textOptions = {
    font,
    size: 35,
    height: 10,
    curveSegments: 32,
    bevelEnabled: true,
    bevelThickness: 1,
    bevelSize: .3,
    bevelOffset: 0,
    bevelSegments: 5,
  };

  // useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
  return (
    <mesh position={position} ref={mesh}>
      <textGeometry attach="geometry" args={[args, textOptions]} factor={0.7} />
      <meshBasicMaterial attach="material" color="cyan" />
      <OrbitControls />
    </mesh>
  );
};

export default function Home() {
  return (
    <div className="Home">
      <Canvas camera={{ position: [0, 10, 75], fov: 75 }}>
        <ambientLight intensity={2} />
        <pointLight position={[40, 40, 40]} />
        <group>
          <TextMesh args="W" position={[-100, 0, -100]} />
          <TextMesh args="E" position={[-55, 0, -100]} />
          <TextMesh args="L" position={[-25, 0, -100]} />
          <TextMesh args="C" position={[0, 0, -100]} />
          <TextMesh args="O" position={[32, 0, -100]} />
          <TextMesh args="M" position={[65, 0, -100]} />
          <TextMesh args="E" position={[100, 0, -100]} />
        </group>
      </Canvas>
    </div>
  );
}
