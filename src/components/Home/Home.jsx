import React, { useRef } from 'react';
import './Home.css';

import { Canvas } from 'react-three-fiber';
import * as THREE from 'three';
import Oswald from './Oswald.json';
// import texture from './space-texture.jpg';
import { OrbitControls } from 'drei';

function TextMesh(props) {
  const mesh = useRef(null);

  const font = new THREE.FontLoader().parse(Oswald);

  const textOptions = {
    font,
    size: 40,
    height: 0.5,
    // curveSegments: 15,
    bevelEnabled: true,
    // bevelThickness: 15,
    bevelSize: 5,
    bevelOffset: 0,
    bevelSegments: 5,
  };
  return (
    <group ref={mesh}>
      <mesh position={[-10, 0, -50]}>
        <textGeometry
          attach="geometry"
          args={['WELCOME', textOptions]}
          factor={0.7}
        />
        <meshBasicMaterial attach="material" color="tomato" />
        <OrbitControls />
      </mesh>
    </group>
  );
}

export default function Home() {
  return (
    <div className="Home">
      <Canvas camera={{ position: [0, 0, 35] }}>
        <ambientLight intensity={2} />
        <pointLight position={[40, 40, 40]} />
        <TextMesh />
      </Canvas>
    </div>
  );
}
