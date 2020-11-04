import { OrbitControls, Stars, Text } from 'drei';
import React, { Suspense, lazy } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { Canvas } from 'react-three-fiber';
// import Constellation from '../Constellation/Constellation';

const Welcome = lazy(() => import('./Welcome/Welcome'));

export default function Home() {
  return (
    <div className="Home">
      <Parallax pages={4} ref={(ref) => ref}>
        <ParallaxLayer
          offset={1}
          speed={1}
          style={{ backgroundColor: 'gray' }}
        />
        <ParallaxLayer
          offset={2}
          speed={1}
          style={{ backgroundColor: 'tomato' }}
        />
        <ParallaxLayer offset={0} speed={0} factor={4}>
          <Suspense fallback={<div>Loading...</div>}>
            <Canvas
              colorManagement
              camera={{ position: [100, 30, 100], fov: 100 }}
            >
              <OrbitControls
                enableZoom={false}
                enabled={false}
                autoRotate
                autoRotateSpeed={0.6}
              />
              <Stars radius={75} count={5000} />
            </Canvas>
          </Suspense>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.1}>
          <Suspense fallback={<div>Loading...</div>}>
            <Welcome />
          </Suspense>
        </ParallaxLayer>
        <ParallaxLayer
          offset={3}
          speed={0.5}
          // style={{
          //   display: 'flex',
          //   alignItems: 'center',
          //   justifyContent: 'center',
          // }}
        >
          <Canvas>
            <Text
              color="gray"
              anchorX="center"
              anchorY="middle"
              textAlign="justify"
              lineHeight="1"
              fontSize="0.4"
              maxWidth="4"
              font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
              voluptates quod est impedit id expedita asperiores, eaque eum
              voluptatibus qui voluptate a vel ea error! Earum, voluptatum
              molestias? Debitis, eligendi.
            </Text>
          </Canvas>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
