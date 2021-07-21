import React from 'react';
import { Canvas } from 'react-three-fiber';
import { Plane, WLighting, TextMesh } from './components/Scene/Scene';
// import '../src/Welcome.css';
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
        <TextMesh args="Welcome," position={[-55, 15, 0]} />
        <TextMesh args="my name" position={[-55, -10, 0]} />
        <TextMesh args="is Vlad." position={[-55, -35, 0]} />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;
