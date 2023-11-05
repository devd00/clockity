import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PlayButton from './PlayButton';
import PauseButton from './PauseButton';
import SettingsButton from './SettingsButton';
import { useContext ,useState, useEffect } from 'react';
import SettingContext from './SettingsContext';

const red = '#f54e4e';
const green = '#4aec8c';

function Timer(){
    const settingsInfo = useContext(SettingContext);
    const [isPaused, setIsPaused] = useState(true)
    const [mode, setMode] = useState('work')
    const [secondsLeft, setSecondsLeft] = useState(0);

    function switchMode(){
        const nextMode = mode === 'work' ? 'break' : 'work'
        setMode(nextMode);
        setSecondsLeft(nextMode === 'work' ? settingsInfo.workMinutes * 60 : settingsInfo.breakMinutes * 60)
    }
    function initTimer(){
        setSecondsLeft(settingsInfo.workMinutes = 60)
    }
    useEffect(() => {
        initTimer()
        setInterval( () => {

            if(isPaused){
                return
            }
            if(secondsLeft === 0){
                switchMode()
            }

        })
    }, );

    return(
        <div>
            

            <CircularProgressbar value={60} text={`${60}%`} styles={buildStyles({
                textColor: '#fff',
                pathColor: red,
                trailColor: 'rgba(255,255,255,.2)'

            })} />
            <div style={{marginTop: "20px"}}>
                {isPaused ? <PlayButton />:<PauseButton />}
                {/* <PlayButton />
                <PauseButton /> */}
            </div>
            <div style={{marginTop:'20px'}}>
                <SettingsButton onClick={()=> settingsInfo.setShowSettings(true)}/>
            </div>

        </div>
    )
}

export default Timer;