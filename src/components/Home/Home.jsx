import React, { useRef, useState } from 'react';
import './Home.css';

import { Canvas, useFrame } from 'react-three-fiber';
import * as THREE from 'three';
import Modak from './Modak.json';
import { OrbitControls } from 'drei';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';

function TextMesh({ args, position }) {
  const mesh = useRef(null);

  const font = new THREE.FontLoader().parse(Modak);

  const textOptions = {
    font,
    size: 15,
    height: 1.5,
    curveSegments: 15,
    bevelEnabled: true,
    bevelThickness: 1.2,
    bevelSize: 1,
    bevelOffset: -0.1,
    bevelSegments: 4,
  };
  // useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
  return (
    <mesh castShadow receiveShadow position={position} ref={mesh}>
      <textGeometry attach="geometry" args={[args, textOptions]} factor={0.3} />
      <meshPhysicalMaterial
        clearcoat={1}
        roughness={0.2}
        color={'tomato'}
        attach="material"
      />
      <OrbitControls enableZoom={false} />
    </mesh>
  );
}

function Plane() {
  const ref = useRef(null);

  return (
    <mesh
      ref={ref}
      rotation={[-Math.PI / 2, 0, 0]}
      position={[-20, -10, 0]}
      receiveShadow
    >
      <planeBufferGeometry attach="geometry" args={[300, 300]} />
      <shadowMaterial attach="material" color="#383737" opacity={0.2} />
    </mesh>
  );
}
export default function Home() {
  let parallax;
  // const ref = useRef(null);

  return (
    <Parallax pages={2} ref={(ref) => (parallax = ref)}>
      <ParallaxLayer
        offset={1}
        speed={1}
        style={{ backgroundColor: '#805E73' }}
      />
      <ParallaxLayer
        offset={2}
        speed={1}
        style={{ backgroundColor: '#87BCDE' }}
      />
      <ParallaxLayer>
        <div className="Home">
          <Canvas
            className="Home"
            colorManagement
            shadowMap
            camera={{ position: [0, 30, 100], fov: 85 }}
          >
            <ambientLight intensity={0.3} />
            <spotLight
              intensity={0.5}
              position={[120, 130, 80]}
              angle={0.3}
              penumbra={1}
              castShadow
            />
            <spotLight
              intensity={0.2}
              position={[-100, -50, -50]}
              angle={0.2}
              penumbra={1}
            />
            <group>
              <Physics
                gravity={[0, -20, 0]}
                defaultContactMaterial={{ restitution: 1.1 }}
              >
                <Plane />
                <TextMesh args="W" position={[-42, 0, 1.2]} />
                <TextMesh args="e" position={[-25, 0, 0.2]} />
                <TextMesh args="l" position={[-13, 0, 1.2]} />
                <TextMesh args="c" position={[-7, 0, 0.2]} />
                <TextMesh args="o" position={[3, 0, 1.2]} />
                <TextMesh args="m" position={[14, 0, 0.2]} />
                <TextMesh args="e" position={[31, 0, 1.2]} />
              </Physics>
            </group>
          </Canvas>
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.5}>
        <span>Layers can contain anything</span>
      </ParallaxLayer>
    </Parallax>
  );
}
