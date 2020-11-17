import { Text } from 'drei';
import React, { Suspense, lazy, useState, useRef } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { Canvas } from 'react-three-fiber';
// import './Home.css';
// import { Lighting, SmallTextMesh } from './../Scene/Scene';

const Welcome = lazy(() => import('./Welcome/Welcome'));
const Code = lazy(() => import('../Code/Code'));
const Skills = lazy(() => import('../Skills/Skills'));

// const url = (topic) =>
//   `https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/${topic}/${topic}.png`;

export default function Home() {
  const [current, setCurrent] = useState(0);
  const parallax = useRef(current);
  const pageCount = 4;

  // function handleScrollTo(item) {
  //   setCurrent(item);
  //   parallax.current.scrollTo(item);
  // }

  function backSlide() {
    const next = (current - (1 % pageCount) + pageCount) % pageCount;
    setCurrent(next);
    parallax.current.scrollTo(next);
  }

  function forwardSlide() {
    const next = (current + 1) % pageCount;
    setCurrent(next);
    parallax.current.scrollTo(next);
  }
  return (
    <div className="Home">
      <Parallax ref={(ref) => (parallax.current = ref)} pages={pageCount}>
        {/* <ParallaxLayer
          onClick={() => handleScrollTo(0)}
          // onClick={() => backSlide()}
          offset={2}
          speed={-2}
          factor={1}
          style={{
            zIndex: '1',
          }}
        >
          {' '}
          <Canvas>
            <Lighting />
            <SmallTextMesh args={'up'} position={[-5, -20, -30]} />
          </Canvas>
        </ParallaxLayer> */}
        {/* <ParallaxLayer
          className="gh-images"
          onClick={() => handleScrollTo(1)}
          offset={1.5}
          speed={-2}
          factor={1}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: '1',
            height: '0',
          }}
        > */}
        {/* <img
            src={url('html')}
            alt={'code'}
            width="32"
            height="32"
            style={{ width: '32', height: '32' }}
          />{' '} */}{' '}
        {/* <img src={url('html')} alt={'html'} width="32" height="32" />{' '}
          <img src={url('css')} alt={'css'} width="32" height="32" />{' '}
          <img src={url('javascript')} alt={'code'} width="32" height="32" />{' '}
          <img src={url('react')} alt={'code'} width="32" height="32" />{' '}
          <img src={url('firebase')} alt={'code'} width="32" height="32" />{' '}
          <img src={url('pwa')} alt={'code'} width="32" height="32" />{' '}
          <img src={url('figma')} alt={'code'} width="32" height="32" />
          <img src={url('gatsby')} alt={'code'} width="32" height="32" />
          <img src={url('sass')} alt={'code'} width="32" height="32" />
          <img src={url('ruby')} alt={'code'} width="32" height="32" />
          <img src={url('rails')} alt={'code'} width="32" height="32" />
          <img src={url('nodejs')} alt={'code'} width="32" height="32" />
          <img src={url('npm')} alt={'code'} width="32" height="32" />
          <img src={url('postgresql')} alt={'code'} width="32" height="32" />
          <img src={url('docker')} alt={'code'} width="32" height="32" />
          <img
            src={url('visual-studio-code')}
            alt={'code'}
            width="32"
            height="32"
          />
          <img src={url('terminal')} alt={'code'} width="32" height="32" />
        </ParallaxLayer> */}
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
      </Parallax>
      <div style={{ position: 'absolute', zIndex: 2 }}>
        <button onClick={() => backSlide()}>Back</button>
        <button onClick={() => forwardSlide()}>Forward</button>
      </div>
    </div>
  );
}
