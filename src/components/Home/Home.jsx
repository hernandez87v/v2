import React from 'react';
import './Home.css';

import { Canvas } from 'react-three-fiber';
import * as THREE from 'three';
import Oswald from './Oswald.json';

export default function Home() {
  // parse JSON file with Three
  const font = new THREE.FontLoader().parse(Oswald);

  // configure font geometry
  const textOptions = {
    font,
    size: 2,
    height: 1,
  };
  return (
    <div className="Home">
      <Canvas
        style={{ height: '100vh', width: '100vw' }} // stretch the canvas to the full viewport size
      >
        <mesh>
          <textGeometry attach="geometry" args={['Welcome', textOptions]} />
          <meshStandardMaterial attach="material" />
        </mesh>
      </Canvas>
    </div>
  );
}
