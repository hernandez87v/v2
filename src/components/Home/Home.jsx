import React, { useRef } from 'react';
import './Home.css';

import { Canvas } from 'react-three-fiber';
import * as THREE from 'three';
import Modak from './Modak.json';
// import SourcesSansPro from './SourceSansPro.json';
// import { OrbitControls } from 'drei';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
// import { Physics, useBox, usePlane } from 'use-cannon';

// function TextMesh({ args = [0.5, 32, 32], ...props }) {
function TextMesh({ args, position }) {
  const font = new THREE.FontLoader().parse(Modak);
  // const font2 = new THREE.FontLoader().parse(SourcesSansPro);

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

  // const textOptions2 = {
  //   font2,
  //   size: 5,
  //   height: 1.5,
  //   curveSegments: 15,
  //   bevelEnabled: true,
  //   bevelThickness: 1.2,
  //   bevelSize: 1,
  //   bevelOffset: -0.1,
  //   bevelSegments: 4,
  // };

  const ref = useRef(null);
  // const [ref] = useBox(() => ({
  //   mass: 1,
  //   position: [0, 0, 0],
  //   angularDamping: 1,
  //   // rotation: [0.4, 0.2, 0.5],
  //   ...props,
  // }));

  return (
    <mesh position={position} ref={ref}>
      <textGeometry attach="geometry" args={[args, textOptions]} factor={0.7} />
      <textGeometry attach="geometry" args={[args, textOptions]} factor={0.7} />
      <meshPhysicalMaterial
        clearcoat={1}
        reflectivity={1}
        roughness={0.2}
        color="darkorange"
        attach="material"
        // transparent={true}
        // opacity={0.8}
      />
      {/* <OrbitControls enableZoom={false} /> */}
    </mesh>
  );
}

// function Plane() {
//   const ref = useRef(null);
//   // const [ref, api] = usePlane(() => ({
//   //   position: [0, -1, 0],
//   //   rotation: [-Math.PI / 2, 0, 0],
//   //   onCollide: () => {
//   //     api.position.set(0, 0, 0);
//   //     api.velocity.set(0, 1, 0);
//   //   },
//   // }));

//   return (
//     <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
//       <planeBufferGeometry attach="geometry" args={[300, 300]} />
//       <shadowMaterial attach="material" color="#246623" opacity={0.2} />
//     </mesh>
//   );
// }
const url = (name, wrap = false) =>
  `${
    wrap ? 'url(' : ''
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ')' : ''
  }`;

export default function Home() {
  // let parallax;
  // const ref = useRef(null);

  return (
    <Parallax pages={2} ref={(ref) => ref}>
      <ParallaxLayer
        offset={1}
        speed={1}
        style={{ backgroundColor: '#5e7f79' }}
      />
      <ParallaxLayer
        offset={2}
        speed={1}
        style={{ backgroundColor: '#87BCDE' }}
      />
      <ParallaxLayer
        offset={0}
        speed={0}
        factor={3}
        style={{ backgroundImage: url('stars', true), backgroundSize: 'cover' }}
      />

      <ParallaxLayer>
        <div className="Home">
          <Canvas colorManagement camera={{ position: [0, 30, 100], fov: 85 }}>
            <ambientLight intensity={0.3} />
            <spotLight
              intensity={0.5}
              position={[180, 25, 100]}
              angle={0.3}
              penumbra={1}
            />
            <spotLight
              intensity={0.3}
              // color="red"
              position={[0, 200, 60]}
              penumbra={1}
            />
            <spotLight
              intensity={0.5}
              position={[200, 150, 150]}
              penumbra={1}
            />
            <group>
              {/* <Physics> */}
              {/* <Plane /> */}
              <TextMesh args="Welcome" position={[-43, 20, 0]} />
              <TextMesh args={'My name'} position={[-43, 0, 0]} />
              <TextMesh args={'is Vlad.'} position={[-43, -20, 0]} />
              {/* <TextMesh args="l" position={[-13, 0, 1.2]} />
                <TextMesh args="c" position={[-7, 0, 0.2]} />
                <TextMesh args="o" position={[3, 0, 1.2]} />
                <TextMesh args="m" position={[14, 0, 0.2]} />
                <TextMesh args="e" position={[31, 0, 1.2]} /> */}
              {/* </Physics> */}
            </group>
          </Canvas>
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.5}>
        <article>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
          impedit ut accusamus maiores, ipsum dolore, culpa et nemo quas itaque
          est ducimus quos cupiditate doloremque optio incidunt voluptas. Enim,
          obcaecati!
        </article>
      </ParallaxLayer>
    </Parallax>
  );
}
