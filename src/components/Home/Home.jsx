import { Text } from 'drei';
import React, { Suspense, lazy } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { Canvas } from 'react-three-fiber';
import Code from '../Code/Code';
import Skills from '../Skills/Skills';
// import './Home.css';
// import ScrollingColorBackground from 'react-scrolling-color-background';

const Welcome = lazy(() => import('./Welcome/Welcome'));

export default function Home() {
  // const [home, setHome] = useState('home');

  // const listenScrollEvent = (event) => {
  //   if (window.scrollY > window.innerHeight / 2) {
  //     console.log('home', window.scrollY);
  //     return setHome('home');
  //   } else {
  //     console.log('home', window.scrollY);

  //     return setHome('home2');
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', listenScrollEvent);

  //   return () => window.removeEventListener('scroll', listenScrollEvent);
  // }, []);
  // function bgChanger() {
  //   console.log('working');
  //   if (window.scrollY > window.innerHeight / 2) {
  //     document.body.className.add('bg-Active');
  //   }
  // }

  // window.addEventListener('scroll', bgChanger);

  // window.addEventListener(
  //   'scroll',
  //   function (event) {
  //     console.log('scroll');
  //   },
  //   true
  // );

  window.addEventListener(
    'scroll',
    function bgChanger(event) {
      console.log(document.body.classList, 'scroll');
      if (window.scrollY > window.innerHeight / 2) {
        document.body.classList.add('bg-Active');
      } else {
        document.body.classList.remove('bg-Active');
      }
    },
    true
  );
  return (
    <div className="Home">
      <Parallax pages={4} ref={(ref) => ref}>
        <ParallaxLayer offset={0} speed={0.1}>
          <Suspense fallback={<div>Loading...</div>}>
            <Welcome />
            <Skills />
          </Suspense>
        </ParallaxLayer>
        {/* <ParallaxLayer offset={1} speed={1} factor={1.5}>
          <Skills />
        </ParallaxLayer> */}
        <ParallaxLayer offset={2} speed={0.5}>
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
        <ParallaxLayer offset={3} speed={1}>
          <Code />
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
