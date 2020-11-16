import { Text } from 'drei';
import React, { Suspense, lazy } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { Canvas } from 'react-three-fiber';
import codeImg from '../images/code.jpg';
// import './Home.css';

const Welcome = lazy(() => import('./Welcome/Welcome'));
const Code = lazy(() => import('../Code/Code'));
const Skills = lazy(() => import('../Skills/Skills'));

export default function Home() {
  return (
    <div className="Home">
      {/* <Parallax pages={4} horizontal ref={(ref) => ref}> */}

      <Parallax
        pages={4}
        // horizontal
        ref={(ref) => ref}
        // ref={(ref) => (this.parallax = ref)}
      >
        <ParallaxLayer
          offset={2.5}
          speed={-2}
          factor={1.5}
          style={{
            backgroundImage: `url(${codeImg})`,
            backgroundSize: '50%',
            zIndex: '2',
          }}
        />
        <ParallaxLayer offset={0} speed={0} factor={1}>
          <Suspense fallback={<div>Loading...</div>}>
            <Welcome />
          </Suspense>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0} factor={1.5}>
          <Suspense fallback={<div>Loading...</div>}>
            <Skills />
          </Suspense>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0} factor={1.5}>
          <Suspense fallback={<div>Loading...</div>}>
            <Code />
          </Suspense>
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={2}>
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
        <ParallaxLayer
          style={{ backgroundColor: 'blue' }}
          offset={4}
          speed={0}
          factor={4}
        ></ParallaxLayer>
      </Parallax>
    </div>
  );
}
