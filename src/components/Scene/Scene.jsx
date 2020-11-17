import React, { useRef } from 'react';
// import { Canvas } from 'react-three-fiber';

function Plane() {
  const ref = useRef(null);
  return (
    <mesh ref={ref} position={[0, 0, -5]} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
      <meshPhongMaterial attach="material" color="#0e1119" />
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
