import React, { Suspense, useRef, useState } from 'react';
import './SunMoon.css';
import { Canvas } from 'react-three-fiber';
import { useTextureLoader } from 'drei';
import sun_texture from './2kSun.jpg';
import moon_texture from './2kMoon.jpg';

function Planet({ args, position, map, ...props }) {
  const ref = useRef();

  return (
    <mesh position={position} {...props} ref={ref}>
      <sphereBufferGeometry attach="geometry" args={args} />
      <meshStandardMaterial map={map} />
    </mesh>
  );
}

export default function SunMoon() {
  const date = new Date();
  const [hour] = useState(date);
  const [sun, moon] = useTextureLoader([sun_texture, moon_texture]);
  // var c = <Canvas></Canvas>;
  // console.log(c);
  // console.log(hour.getHours());
  return (
    <div className="SunMoon">
      <Canvas
        colorManagement
        camera={{ position: [0, 30, 100], fov: 85 }}
        gl={{
          powerPreference: 'high-performance',
        }}
      >
        {/* <ambientLight intensity={0.2} />
        <spotLight intensity={0.2} position={[200, 150, 150]} penumbra={1} />
        <spotLight intensity={0.2} position={[70, 30, 30]} penumbra={1} />
        <spotLight intensity={0.2} position={[-200, -150, -150]} penumbra={1} /> */}
        <Suspense fallback={null}>
          {hour.getHours() < 16 ? (
            <Planet args={[50, 32, 32]} position={[-250, 90, -310]} map={sun} />
          ) : (
            <Planet args={[10, 32, 32]} position={[150, 50, 50]} map={moon} />
          )}
        </Suspense>
      </Canvas>
    </div>
  );
}
