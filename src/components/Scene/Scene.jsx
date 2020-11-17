import React, { useRef } from 'react';
import { FontLoader } from 'three';
import Modak from '../fonts/Modak.json';

export function Plane() {
  const ref = useRef(null);
  return (
    <mesh ref={ref} position={[0, 0, -5]} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
      <meshPhongMaterial attach="material" color="#0e1119" />
    </mesh>
  );
}

export function TextMesh({ args, position }) {
  const font = new FontLoader().parse(Modak);

  const textOptions = {
    font,
    size: 25,
    height: 3,
    curveSegments: 15,
    bevelEnabled: true,
    bevelThickness: 2,
    bevelSize: 1,
    bevelSegments: 5,
  };
  const ref = useRef(null);

  // const [hovered, setHover] = useState(false);
  // const [active, setActive] = useState(false);

  return (
    <mesh
      // {...props}
      // scale={active ? [1.1, 1.1, 1.1] : [1, 1, 1]}
      // onClick={(e) => setActive(!active)}
      // onPointerOver={(e) => setHover(true)}
      // onPointerOut={(e) => setHover(false)}
      position={position}
      ref={ref}
      castShadow
      receiveShadow
    >
      <textBufferGeometry
        attach="geometry"
        args={[args, textOptions]}
        factor={0.7}
      />
      <meshPhysicalMaterial
        clearcoat={1}
        reflectivity={1}
        roughness={0.3}
        // color="#7bdff2"
        color="cyan"
        // color={hovered ? '#7bdff2' : '#7bdfe5'}
        attach="material"
      />
    </mesh>
  );
}

export default function Scene() {
  return (
    <div className="Scene">
      <ambientLight intensity={0.1} />
      <spotLight
        intensity={0.25}
        position={[50, 80, 190]}
        penumbra={1}
        castShadow
      />
      <spotLight
        intensity={0.3}
        position={[-200, 80, 110]}
        penumbra={1}
        castShadow
      />
      <Plane position={[0, 0, -20]} />
    </div>
  );
}
