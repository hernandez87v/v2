import React from 'react';
import './Home.css';

import { Canvas } from 'react-three-fiber';
import * as THREE from 'three';
import Oswald from './Oswald.json';

function TextMesh(props) {
  // parse JSON file with Three
  const font = new THREE.FontLoader().parse(Oswald);

  // configure font geometry
  const textOptions = {
    font,
    size: 3,
    height: 0.5,
  };
  return (
    <mesh position={[-5, 0, 0]}>
      <textGeometry attach="geometry" args={['Welcome', textOptions]} />
      <meshStandardMaterial attach="material" />
    </mesh>
  );
}

export default function Home() {
  return (
    <div className="Home">
      <Canvas
        // style={{ height: '100vh', width: '100vw' }}
        camera={{ position: [-10, 0, 30] }}
      >
        <TextMesh />
      </Canvas>
    </div>
  );
}
