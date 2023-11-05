import Timer from './Timer';
import './App.css';
import Settings from './Settings';
import { useState } from 'react';
import SettingContext from './SettingsContext';

function App() {

  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(10)
  const [breakMinutes, setBreakMinutes] = useState(10);
  return (
   <main>
    <SettingContext.Provider value ={{
      showSettings,
      setShowSettings,
      workMinutes : workMinutes,
      breakMinutes: breakMinutes,
      setWorkMinutes,
      setBreakMinutes
    }}>
        
        {showSettings ? <Settings /> : <Timer />}
    </SettingContext.Provider>
    {/* <Settings />
    <Timer /> */}


   </main>
  );
}

export default App;
