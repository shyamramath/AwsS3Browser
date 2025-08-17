import React from 'react';
import { StorageBrowser } from './StorageBrowserConfig';

export default function App() {
  const setup = "setup";
  const handleClick = () => {
    console.log("Button clicked", setpu);
  };
  return (
    <div style={{ margin: '10vh 15vw', textAlign: 'center' }}>
      <h1>S3 Storage Browser</h1>
      <button onClick={handleClick}>Click Me</button>
      <StorageBrowser />
    </div>
  );
}