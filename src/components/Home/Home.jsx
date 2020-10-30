import React, { useRef } from 'react';
import './Home.css';

import { Canvas } from 'react-three-fiber';
import * as THREE from 'three';
import Modak from './Modak.json';
import { OrbitControls } from 'drei';
// import texture from './wavy-layers-black-paper-circles-background.jpg';

function TextMesh({ args, position }) {
  const mesh = useRef(null);

  const font = new THREE.FontLoader().parse(Modak);
  // const moon = new THREE.TextureLoader().load(texture);
  // moon.wrapS = THREE.RepeatWrapping;
  // moon.wrapT = THREE.RepeatWrapping;
  // moon.repeat.set(0.1, 0.1);
  const textOptions = {
    font,
    size: 5,
    height: 1,
    // curveSegments: 10,
    // bevelEnabled: true,
    // bevelThickness: 0.1,
    // bevelSize: 0.1,
    // bevelOffset: 0.1,
    // bevelSegments: 0.5,
  };
  // useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
  return (
    <mesh castShadow receiveShadow position={position} ref={mesh}>
      <textGeometry attach="geometry" args={[args, textOptions]} factor={0.3} />
      <meshBasicMaterial color="cyan" attach="material" />
      {/* <OrbitControls /> */}
    </mesh>
  );
}

function Plane() {
  const ref = useRef(null);

  return (
    <mesh
      ref={ref}
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -1.5, 0]}
      receiveShadow
    >
      <planeBufferGeometry attach="geometry" args={[300, 300]} />
      <shadowMaterial attach="material" color="#324c4a" opacity={0.3} />
    </mesh>
  );
}

export default function Home() {
  return (
    <div className="Home">
      <Canvas
        colorManagement
        shadowMap
        camera={{ position: [0, 0, 25], fov: 100 }}
      >
        <ambientLight intensity={0.5} />
        <spotLight
          intensity={0.2}
          position={[30, 30, 30]}
          angle={0.3}
          penumbra={1}
          castShadow
        />
        <group>
          <Plane />
          <TextMesh args="W" position={[-13, 0, 0.2]} />
          <TextMesh args="E" position={[-7.5, 0, 0.2]} />
          <TextMesh args="L" position={[-3.5, 0, 0.2]} />
          <TextMesh args="C" position={[0, 0, 0.2]} />
          <TextMesh args="O" position={[4, 0, 0.2]} />
          <TextMesh args="M" position={[8, 0, 0.2]} />
          <TextMesh args="E" position={[12.5, 0, 0.2]} />
        </group>
      </Canvas>
    </div>
  );
}
