
"use client"
import { TimerSettings, useTimer } from "react-timer-hook"

import { ActionIcon, Button } from '@mantine/core';

interface Props {
  settings: TimerSettings
}

const Countdown = ({ settings }: Props) => {
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer(settings)


  const addPad = (number: number) => {
    const MIN = 10
    return number < MIN ? `0${number}` : number
  }

  const handleToggle = isRunning ? pause : start
  const text = isRunning ? "Pause" : "Start"
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: '100px' }}>
        <span>{addPad(minutes)}</span>:<span>{addPad(seconds)}</span>
      </div>
      <p>{isRunning ? 'Running' : 'Not running'}</p>
      <Button variant="outline" color="white" onClick={handleToggle}>{text}</Button>
      <Button variant="outline" color="white" style={{ marginLeft: '10px' }} onClick={() => {
        const time = new Date();
        time.setSeconds(time.getSeconds() + 90);
        restart(time)
      }}>Restart</Button>
    </div>
  );
}



export default Countdown