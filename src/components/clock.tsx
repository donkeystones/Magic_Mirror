import { useState } from "react";
import "./clock.css"

const Clock = () => {
    let time = new Date().toLocaleTimeString();
    const [currentTime, setCurrentTime] = useState(time);

    const updateTime = () => {
        let time = new Date().toLocaleTimeString();
        setCurrentTime(time);
    }

    setInterval(updateTime, 1000);

    return (
        <div className="clockBox">
            <h1 className="timeText">{currentTime}</h1>
        </div>
    )
}

export default Clock;