import React, { Suspense, lazy, useState, useRef } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
// import './Home.css';
import CubeText from '../Skills/CubeText';

const Welcome = lazy(() => import('./Welcome/Welcome'));
const Code = lazy(() => import('../Code/Code'));
const Skills = lazy(() => import('../Skills/Skills'));

export default function Home() {
  const [current] = useState(0);
  const parallax = useRef(current);
  const pageCount = 4;
  return (
    <div className="Home">
      <Parallax ref={(ref) => (parallax.current = ref)} pages={pageCount}>
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
          <CubeText />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
