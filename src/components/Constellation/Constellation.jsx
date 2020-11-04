import React, { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls, Stars } from 'drei';

export default function Constellation() {
  return (
    <div className="constellation">
      <Suspense fallback={<div>Loading...</div>}>
        <Canvas colorManagement camera={{ position: [100, 30, 100], fov: 100 }}>
          <OrbitControls
            enableZoom={false}
            enabled={false}
            autoRotate
            autoRotateSpeed={0.6}
          />
          <Stars radius={75} count={5000} />
        </Canvas>
      </Suspense>
    </div>
  );
}
