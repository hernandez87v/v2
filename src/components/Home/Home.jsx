import React, { useRef } from 'react';
import './Home.css';

import { Canvas, useFrame } from 'react-three-fiber';
import * as THREE from 'three';
import Modak from './Modak.json';
// import texture from './space-texture.jpg';
import { OrbitControls } from 'drei';

const TextMesh = ({ args, position }) => {
  const mesh = useRef(null);

  const font = new THREE.FontLoader().parse(Modak);

  const textOptions = {
    font,
    size: 4,
    height: 1,
    curveSegments: 32,
    bevelEnabled: true,
    bevelThickness: 0.1,
    bevelSize: 0.1,
    bevelOffset: 0,
    bevelSegments: 1.5,
  };

  // useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
  return (
    <mesh castShadow position={position} ref={mesh}>
      <textGeometry attach="geometry" args={[args, textOptions]} factor={0.7} />
      <meshBasicMaterial attach="material" color="cyan" />
      <OrbitControls />
    </mesh>
  );
};

export default function Home() {
  function Plane(props) {
    const ref = useRef(null);

    return (
      <mesh ref={ref} receiveShadow>
        <planeBufferGeometry attach="geometry" args={[20, 20]} />
        <shadowMaterial attach="material" color="#171717" opacity={0.3} />
      </mesh>
    );
  }

  return (
    <div className="Home">
      <Canvas
        colorManagement
        shadowMap
        camera={{ position: [0, 10, 75], fov: 75 }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight
          position={[0, 10, 0]}
          intensity={1.5}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <pointLight position={[-10, 0, -20]} intensity={0.5} />
        <pointLight position={[0, -10, 0]} intensity={1.5} />
        <group>
          <Plane rotation={[-Math.PI / 2, 0, 0]} />
          <TextMesh args="W" position={[-16, 0, 0]} />
          <TextMesh args="E" position={[-10, 0, 0]} />
          <TextMesh args="L" position={[-5, 0, 0]} />
          <TextMesh args="C" position={[0, 0, 0]} />
          <TextMesh args="O" position={[5, 0, 0]} />
          <TextMesh args="M" position={[10, 0, 0]} />
          <TextMesh args="E" position={[15, 0, 0]} />
        </group>
        <gridHelper />
      </Canvas>
    </div>
  );
}
