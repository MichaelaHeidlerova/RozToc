import React, { useState, useEffect, useRef } from 'react';
import './Timer.css';

export const Timer = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const [inputHours, setInputHours] = useState('');
  const [inputMinutes, setInputMinutes] = useState('');
  const [inputSeconds, setInputSeconds] = useState('');

  const [isRunning, setIsRunning] = useState(false);
  const [initialTimeSet, setInitialTimeSet] = useState(false);

  const intervalRef = useRef(null);

  const handleInputChange = (e, unit) => {
    const value = e.target.value;
    if (value === '' || /^\d+$/.test(value)) {
      switch (unit) {
        case 'hours':
          setInputHours(value);
          break;
        case 'minutes':
          setInputMinutes(value);
          break;
        case 'seconds':
          setInputSeconds(value);
          break;
        default:
          break;
      }
    }
  };

  const handleSetTime = () => {
    const parsedHours = parseInt(inputHours || '0', 10);
    const parsedMinutes = parseInt(inputMinutes || '0', 10);
    const parsedSeconds = parseInt(inputSeconds || '0', 10);

    if (parsedHours < 0 || parsedMinutes < 0 || parsedSeconds < 0) {
      alert('Čas nemůže být záporný!');
      return;
    }
    if (parsedMinutes > 59 || parsedSeconds > 59) {
      alert('Minuty a sekundy nesmí být větší než 59!');
      return;
    }

    setHours(parsedHours);
    setMinutes(parsedMinutes);
    setSeconds(parsedSeconds);
    setInitialTimeSet(true);
    setIsRunning(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const startTimer = () => {
    if (!initialTimeSet) {
      alert('Nejprve nastavte čas!');
      return;
    }
    if (hours === 0 && minutes === 0 && seconds === 0) {
      alert('Časovač je na nule. Nastavte čas pro spuštění.');
      return;
    }
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const resetTimer = () => {
    setIsRunning(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setInputHours('');
    setInputMinutes('');
    setInputSeconds('');
    setInitialTimeSet(false);
  };

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds > 0) {
            return prevSeconds - 1;
          } else {
            if (minutes > 0) {
              setMinutes((prevMinutes) => prevMinutes - 1);
              return 59;
            } else {
              if (hours > 0) {
                setHours((prevHours) => prevHours - 1);
                setMinutes(59);
                return 59;
              } else {
                clearInterval(intervalRef.current);
                setIsRunning(false);
                alert('Čas vypršel!');
                return 0;
              }
            }
          }
        });
      }, 1000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, hours, minutes, seconds]); 

  const formatTime = (value) => String(value).padStart(2, '0');

  return (
    <div>
      <div className="pageTitle">
        <h2>ODPOČET ČASU</h2>
      </div>
      <div className="setTime">
        <input 
          type="number"
          placeholder="Hodiny"
          min="0"
          max="99"
          value={inputHours}
          onChange={(e) => handleInputChange(e, 'hours')}
        />
        <input
          type="number"
          placeholder="Minuty"
          min="0"
          max="59"
          value={inputMinutes}
          onChange={(e) => handleInputChange(e, 'minutes')} 
        />
        <input
          type="number"
          placeholder="Sekundy"
          min="0"
          max="59"
          value={inputSeconds}
          onChange={(e) => handleInputChange(e, 'seconds')}
        />
        <button
          onClick={handleSetTime}>
          Nastavit čas
        </button>
      </div>

      <div className="timerDisplay">
        {formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}
      </div>

      <div className='timerControls'>
        <button className='startBtn'
          onClick={startTimer}
          disabled={
            isRunning ||
            !initialTimeSet ||
            (hours === 0 && minutes === 0 && seconds === 0)
          }>
          Start
        </button>
        <button className='pausaBtn'
          onClick={pauseTimer}
        >
          Pauza
        </button>
        <button className='resetBtn'
          onClick={resetTimer}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
