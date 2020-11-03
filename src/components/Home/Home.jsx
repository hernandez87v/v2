import React, { Suspense, lazy } from 'react';
import './Home.css';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
const Welcome = lazy(() => import('./Welcome/Welcome'));

export default function Home() {
  // let parallax;
  // const ref = useRef(null);

  return (
    <div className="Home">
      <Parallax pages={2} ref={(ref) => ref}>
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
        {/* <ParallaxLayer
        offset={0}
        speed={0}
        factor={3}
        style={{ backgroundImage: url('stars', true), backgroundSize: 'cover' }}
      /> */}
        <ParallaxLayer>
          <Suspense fallback={<div>Loading...</div>}>
            <Welcome />
          </Suspense>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5}>
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
