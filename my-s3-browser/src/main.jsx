import React from 'react';
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
import App from './App.jsx';
import { StorageBrowser } from './StorageBrowserConfig';

import '@aws-amplify/ui-react-storage/styles.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StorageBrowser.Provider>
      <App />
    </StorageBrowser.Provider>
  </React.StrictMode>
)