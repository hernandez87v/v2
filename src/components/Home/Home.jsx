import React, { Suspense, lazy } from 'react';
import './Home.css';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { Stars } from 'drei';
import { Canvas } from 'react-three-fiber';

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
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={4}
          style={{ backgroundSize: 'cover' }}
        >
          <Suspense fallback={<div>Loading...</div>}>
            <Canvas
              colorManagement
              camera={{ position: [0, 30, 100], fov: 85 }}
            >
              <ambientLight intensity={0.3} />
              <spotLight intensity={0.3} position={[0, 0, 0]} penumbra={1} />
              <spotLight />
              <Stars />
            </Canvas>
          </Suspense>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.1}>
          <Suspense fallback={<div>Loading...</div>}>
            <Welcome />
          </Suspense>
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={0.5}>
          <article>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
            impedit ut accusamus maiores, ipsum dolore, culpa et nemo quas
            itaque est ducimus quos cupiditate doloremque optio incidunt
            voluptas. Enim, obcaecati!
          </article>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
