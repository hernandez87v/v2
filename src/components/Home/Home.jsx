import React, { useRef, useState } from 'react';
import './Home.css';

import { Canvas, useFrame } from 'react-three-fiber';
import * as THREE from 'three';
import Modak from './Modak.json';
import { OrbitControls } from 'drei';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';

function TextMesh({ props, args, position }) {
  const mesh = useRef(null);

  const font = new THREE.FontLoader().parse(Modak);

  const textOptions = {
    font,
    size: 15,
    height: 2,
    curveSegments: 32,
    bevelEnabled: true,
    bevelThickness: 1.2,
    bevelSize: 1,
    bevelOffset: -0.1,
    bevelSegments: 5,
  };
  // useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame(() => {
    if (hovered && !active) {
      mesh.current.rotation.y = 0.5;
    }
    if (hovered && active) {
      mesh.current.rotation.y = 0.02;
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
      <meshPhongMaterial
        color={hovered ? 'cyan' : 'tomato'}
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
      rotation={[-Math.PI / 30, 0, 0]}
      position={[-20, -1.5, 0]}
      receiveShadow
    >
      <planeBufferGeometry attach="geometry" args={[300, 300]} />
      <shadowMaterial attach="material" color="white" opacity={0.3} />
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
            camera={{ position: [0, -20, 100], fov: 85 }}
          >
            <ambientLight intensity={0.3} />
            <spotLight
              intensity={0.3}
              position={[150, 200, 50]}
              angle={0.3}
              penumbra={1}
              castShadow
            />
            <spotLight
              intensity={0.4}
              position={[80, 20, 40]}
              angle={0.3}
              penumbra={1}
              castShadow
            />
            <group>
              <Plane />
              <TextMesh args="W" position={[-35, 0, 1.2]} />
              <TextMesh args="e" position={[-18, 0, 0.2]} />
              <TextMesh args="l" position={[-6, 0, 1.2]} />
              <TextMesh args="c" position={[0, 0, 0.2]} />
              <TextMesh args="o" position={[12, 0, 1.2]} />
              <TextMesh args="m" position={[23, 0, 0.2]} />
              <TextMesh args="e" position={[40, 0, 1.2]} />
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
