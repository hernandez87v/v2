import React from 'react';
import { Canvas } from 'react-three-fiber';
import { Plane, WLighting, TextMesh } from './components/Scene/Scene';
import './App.css';
import { OrbitControls } from 'drei';

function App() {
  return (
    <div className="Welcome">
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
      <a
        href="https://github.com/hernandez87v"
        className="top-left"
        children="Github"
      />
      <a
        href="https://www.linkedin.com/in/vlad-hernandez/"
        className="top-middle"
        children="LinkedIn"
      />
      <a
        href="https://twitter.com/vancity_exe"
        className="top-right"
        children="Twitter"
      />
    </div>
  );
}

export default App;
