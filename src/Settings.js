import ReactSlider from 'react-slider';
import './slider.css'

function Settings (){
    return(
        <div style={{textAlign:'left'}}>
            <label>WORK MINS:</label>
            <ReactSlider
             className={'slider'}
             thumbClassName = {'thumb'}
             trackClassName ={'track'}
             value={15}
             min={1}
             max={120}            
            />
            <label>BREAK MINS:</label>
             
        </div>
    )
}
export default Settings