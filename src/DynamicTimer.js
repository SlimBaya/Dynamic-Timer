
import React from 'react'
import './DynamicTimer.css'

const msecondsToTime = ms => {
    const msPerSecond = 1000
    const msPerMinute = msPerSecond * 60
    const msPerHour = msPerMinute * 60

    const hours = Math.floor(ms / msPerHour)
    const hoursRest = ms % msPerHour
    const minutes = Math.floor(hoursRest / msPerMinute)
    const minutesRest = hoursRest % msPerMinute
    const seconds = Math.floor(minutesRest / msPerSecond)
    return String(hours).padStart(2, '0') +
        ':' + String(minutes).padStart(2, '0') +
        ':' + String(seconds).padStart(2, '0')
}

const DynamicTimer = ({ms}) => {
    return <div className="timeContainer">
        <div className="timeInnerContainer">
            <div className="timeDigits">
                {msecondsToTime(ms)}
            </div>
            <div className="timeText">
                <div>Hour</div>
                <div>Minute</div>
                <div>Second</div>
            </div>
        </div>
    </div>
}
    
export default DynamicTimer