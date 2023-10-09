"use client";

import { useEffect, useState } from "react";
import { Body, Timer, Button, Sw } from "./stopwatch.style";
import { PiPlayBold, PiStopBold, PiArrowClockwiseBold, PiSkipForward } from "react-icons/pi";

function Stopwatch() {
    const [time, setTime] = useState(0);
    const [timerOn ,setTimerOn]: any = useState(false);

    useEffect(() => {
        let interval: any = null;

        if (timerOn) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 10)
            }, 10)
        } else {
            clearInterval(interval)
        }

        return () => clearInterval(interval);
    }, [timerOn])

    return (
        <Body>
            <Sw>
                <div>
                    <Timer>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</Timer>
                    <Timer>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</Timer>
                    <Timer>{("0" + Math.floor((time / 10) % 100)).slice(-2)}</Timer>
                </div>
                <div>
                    {!timerOn && time === 0 && (
                        <Button onClick={() => setTimerOn(true)}><PiPlayBold size={30}/></Button>
                    )}
                    {timerOn && (
                        <Button onClick={() => setTimerOn(false)}><PiStopBold size={30}/></Button>
                    )}
                    {!timerOn && time != 0 && (
                        <Button onClick={() => setTimerOn(true)}><PiSkipForward size={30}/></Button>
                    )}
                    {!timerOn && time > 0 && (
                        <Button onClick={() => setTime(0)}><PiArrowClockwiseBold size={30}/></Button>
                    )}
                </div>
            </Sw>
        </Body>
    );
}

export default Stopwatch;
