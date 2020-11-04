import React, { Suspense, lazy } from 'react';
import './Home.css';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { OrbitControls, Stars, Text } from 'drei';
import { Canvas, useThree } from 'react-three-fiber';

const Welcome = lazy(() => import('./Welcome/Welcome'));

export default function Home() {
  return (
    <div className="Home">
      <Parallax pages={4} ref={(ref) => ref}>
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
        <ParallaxLayer offset={0.5} speed={0} factor={4}>
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

              <Stars radius={50} count={1000} />
            </Canvas>
          </Suspense>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.1}>
          <Suspense fallback={<div>Loading...</div>}>
            <Welcome />
          </Suspense>
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={0.5}>
          <Canvas>
            <Text
              color="white"
              anchorX="center"
              anchorY="middle"
              textAlign="justify"
              lineHeight="1"
              fontSize="0.2"
              maxWidth="4"
              font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
              voluptates quod est impedit id expedita asperiores, eaque eum
              voluptatibus qui voluptate a vel ea error! Earum, voluptatum
              molestias? Debitis, eligendi.
            </Text>
          </Canvas>
          {/* <article>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
            impedit ut accusamus maiores, ipsum dolore, culpa et nemo quas
            itaque est ducimus quos cupiditate doloremque optio incidunt
            voluptas. Enim, obcaecati!
          </article> */}
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
