import Timer from './Timer';
import './App.css';
import Settings from './Settings';
import { useState } from 'react';

function App() {

  const [showSettings, setShowSettings] = useState(true);

  return (
   <main>
    {showSettings ? <Settings /> : <Timer />}
    {/* <Settings />
    <Timer /> */}


   </main>
  );
}

export default App;
