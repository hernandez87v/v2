import React, { useRef } from 'react';
import './Welcome.css';

import { Canvas } from 'react-three-fiber';
import { FontLoader } from 'three';
import Modak from './Modak.json';

function TextMesh({ args, position }) {
  const font = new FontLoader().parse(Modak);

  const textOptions = {
    font,
    size: 15,
    height: 1.5,
    curveSegments: 10,
    bevelEnabled: true,
    bevelThickness: 1.2,
    bevelSize: 1,
    bevelOffset: -0.1,
    bevelSegments: 4,
  };

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
      <meshPhysicalMaterial
        clearcoat={1}
        reflectivity={1}
        roughness={0.2}
        color="darkorange"
        attach="material"
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
// const url = (name, wrap = false) =>
//   `${
//     wrap ? 'url(' : ''
//   }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
//     wrap ? ')' : ''
//   }`;
export default function Welcome() {
  return (
    <div className="Welcome">
      <Canvas colorManagement camera={{ position: [0, 30, 100], fov: 85 }}>
        <ambientLight intensity={0.3} />
        <spotLight intensity={0.3} position={[0, 200, 60]} penumbra={1} />
        <spotLight intensity={0.5} position={[200, 150, 150]} penumbra={1} />
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
  );
}
