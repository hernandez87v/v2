import React from 'react';
import { Canvas } from 'react-three-fiber';
import { Plane, WLighting, TextMesh } from './components/Scene/Scene';
import './App.css';
import { OrbitControls } from 'drei';

function App() {
  return (
    <div className="Welcome">
      <nav className="nav-bar">
        <a
          href="https://github.com/hernandez87v"
          className="socials"
          children=".github()"
          target="_blank"
          rel="noopener noreferrer"
        />
        <a
          href="https://www.linkedin.com/in/vlad-hernandez/"
          className="socials"
          children=".linkedIn()"
          target="_blank"
          rel="noopener noreferrer"
        />
        <a
          href="https://twitter.com/vancity_exe"
          className="socials"
          children=".twitter()"
          target="_blank"
          rel="noopener noreferrer"
        />
        <a
          href="https://www.instagram.com/vancity.exe"
          className="socials"
          children=".instagram()"
          target="_blank"
          rel="noopener noreferrer"
        />
      </nav>
      <Canvas
        shadowMap
        colorManagement
        camera={{ position: [0, 0, 100], fov: 100 }}
        gl={{
          powerPreference: 'high-performance',
        }}
      >
        <WLighting />
        <Plane />
        <TextMesh args="Welcome," position={[-65, 15, 0]} />
        <TextMesh args="my name" position={[-55, -10, 0]} />
        <TextMesh args="is Vlad." position={[-45, -35, 0]} />
        <OrbitControls
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
          minAzimuthAngle={-Math.PI / 2}
          maxAzimuthAngle={Math.PI / 2}
          enableZoom={false}
        />
      </Canvas>
      <div className="construction">
        <h2>🚧work in progress🚧</h2>
      </div>
      <footer>
        <p>© 2021 Vlad Hernandez</p>
      </footer>
    </div>
  );
}

export default App;
