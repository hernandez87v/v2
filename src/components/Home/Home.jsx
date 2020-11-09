import { Text } from 'drei';
import React, { Suspense, lazy } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { Canvas } from 'react-three-fiber';

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

        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.1}>
          <Suspense fallback={<div>Loading...</div>}>
            <Welcome />
          </Suspense>
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={0.5}>
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
