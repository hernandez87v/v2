import React, { useRef, useState } from 'react';
import './Home.css';

import { Canvas, useFrame } from 'react-three-fiber';
import * as THREE from 'three';
import Modak from './Modak.json';
import { OrbitControls } from 'drei';
// import texture from './wavy-layers-black-paper-circles-background.jpg';

function TextMesh({ props, args, position }) {
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
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    if (hovered && !active) {
      mesh.current.rotation.y = 0.5;
      // mesh.current.rotation.x += 0.01;
    }
    if (hovered && active) {
      mesh.current.rotation.y = 0.02;
      // mesh.current.rotation.x += 0.06;
    }
  });
  return (
    <mesh
      {...props}
      scale={active ? [1.1, 1.1, 1.1] : [1, 1, 1]}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
      castShadow
      receiveShadow
      position={position}
      ref={mesh}
    >
      <textGeometry attach="geometry" args={[args, textOptions]} factor={0.3} />
      <meshBasicMaterial
        color={hovered ? 'cyan' : 'dodgerblue'}
        attach="material"
      />
      <OrbitControls />
    </mesh>
  );
}

function Plane() {
  const ref = useRef(null);

  return (
    <mesh
      ref={ref}
      rotation={[-Math.PI / 30, 0, 0]}
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
        camera={{ position: [0, 0, 28], fov: 100 }}
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
          <TextMesh args="W" position={[-13, 0, 1.2]} />
          <TextMesh args="E" position={[-7.5, 0, 0.2]} />
          <TextMesh args="L" position={[-3.5, 0, 1.2]} />
          <TextMesh args="C" position={[0, 0, 0.2]} />
          <TextMesh args="O" position={[4, 0, 1.2]} />
          <TextMesh args="M" position={[8, 0, 0.2]} />
          <TextMesh args="E" position={[12.5, 0, 1.2]} />
        </group>
      </Canvas>
    </div>
  );
}
