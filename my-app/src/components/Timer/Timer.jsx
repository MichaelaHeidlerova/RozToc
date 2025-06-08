import React, { useState, useEffect, useRef } from 'react';

export const Timer = () => {
  // === STAV KOMPONENTY ===
  // Stavy pro odpočítávaný čas (ty se mění při START/PAUZA)
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  // NOVÉ STAVY pro hodnoty, které jsou aktuálně zapsané v input polích
  const [inputHours, setInputHours] = useState('');
  const [inputMinutes, setInputMinutes] = useState('');
  const [inputSeconds, setInputSeconds] = useState('');

  const [isRunning, setIsRunning] = useState(false);
  const [initialTimeSet, setInitialTimeSet] = useState(false); // Byl čas nastaven tlačítkem "Nastavit čas"?

  const intervalRef = useRef(null);

  // === FUNKCE PRO ZMĚNY V INPUT POLÍCH (řízené komponenty) ===
  const handleInputChange = (e, unit) => {
    const value = e.target.value;
    // Povolíme pouze čísla a prázdný řetězec
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

  // === FUNKCE PRO NASTAVENÍ ČASU (po stisknutí tlačítka) ===
  const handleSetTime = () => {
    // Převedeme hodnoty z input stavů na čísla
    const parsedHours = parseInt(inputHours || '0', 10);
    const parsedMinutes = parseInt(inputMinutes || '0', 10);
    const parsedSeconds = parseInt(inputSeconds || '0', 10);

    // Validace
    if (parsedHours < 0 || parsedMinutes < 0 || parsedSeconds < 0) {
      alert('Čas nemůže být záporný!');
      return;
    }
    if (parsedMinutes > 59 || parsedSeconds > 59) {
      alert('Minuty a sekundy nesmí být větší než 59!');
      return;
    }

    // Nastavíme odpočítávací stavy
    setHours(parsedHours);
    setMinutes(parsedMinutes);
    setSeconds(parsedSeconds);
    setInitialTimeSet(true); // Označíme, že čas byl nastaven
    setIsRunning(false); // Zajistíme, že časovač není spuštěn hned po nastavení
    if (intervalRef.current) {
      clearInterval(intervalRef.current); // Pokud náhodou běžel, zastavíme ho
    }
  };

  // === FUNKCE PRO OVLÁDÁNÍ ČASOVAČE (START, PAUZA, RESET) ===
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
    // Resetujeme všechny stavy na výchozí hodnoty
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setInputHours(''); // Vyčistíme input pole
    setInputMinutes(''); // Vyčistíme input pole
    setInputSeconds(''); // Vyčistíme input pole
    setInitialTimeSet(false);
  };

  // === useEffect HOOK (Logika odpočítávání) ===
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
  }, [isRunning, hours, minutes, seconds]); // Závislosti zůstávají stejné

  // === POMOCNÁ FUNKCE PRO FORMÁTOVÁNÍ ZOBRAZENÍ ČASU ===
  const formatTime = (value) => String(value).padStart(2, '0');

  // === JSX (Co se renderuje na obrazovce) ===
  return (
    <div
      style={{
        textAlign: 'center',
        padding: '20px',
        backgroundColor: '#f9f9f9',
        borderRadius: '10px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        fontFamily: 'Roboto, sans-serif',
      }}
    >
      <div className="pageTitle">
        <h2>ODPOČET ČASU</h2>
      </div>
      {/* Sekce pro zadávání času */}
      <div style={{ marginBottom: '30px' }}>
        <input
          type="number"
          placeholder="Hodin"
          min="0"
          max="99"
          value={inputHours} // Hodnota inputu je řízena stavem `inputHours`
          onChange={(e) => handleInputChange(e, 'hours')} // Při změně inputu aktualizujeme stav `inputHours`
          style={{
            width: '80px',
            margin: '0 8px',
            padding: '10px',
            border: '1px solid #ddd',
            borderRadius: '5px',
            fontSize: '1em',
          }}
        />
        <input
          type="number"
          placeholder="Minut"
          min="0"
          max="59"
          value={inputMinutes} // Hodnota inputu je řízena stavem `inputMinutes`
          onChange={(e) => handleInputChange(e, 'minutes')} // Při změně inputu aktualizujeme stav `inputMinutes`
          style={{
            width: '80px',
            margin: '0 8px',
            padding: '10px',
            border: '1px solid #ddd',
            borderRadius: '5px',
            fontSize: '1em',
          }}
        />
        <input
          type="number"
          placeholder="Sekund"
          min="0"
          max="59"
          value={inputSeconds} // Hodnota inputu je řízena stavem `inputSeconds`
          onChange={(e) => handleInputChange(e, 'seconds')} // Při změně inputu aktualizujeme stav `inputSeconds`
          style={{
            width: '80px',
            margin: '0 8px',
            padding: '10px',
            border: '1px solid #ddd',
            borderRadius: '5px',
            fontSize: '1em',
          }}
        />
        <button
          onClick={handleSetTime}
          style={{
            marginLeft: '15px',
            padding: '10px 20px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '1em',
            transition: 'background-color 0.3s ease',
          }}
        >
          Nastavit čas
        </button>
      </div>

      {/* Zobrazení odpočítávaného času */}
      <div
        style={{
          fontSize: '5em',
          fontWeight: 'bold',
          color: '#007bff',
          marginBottom: '30px',
          textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
        }}
      >
        {formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}
      </div>

      {/* Tlačítka pro ovládání časovače */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <button
          onClick={startTimer}
          disabled={
            isRunning ||
            !initialTimeSet ||
            (hours === 0 && minutes === 0 && seconds === 0)
          }
          style={{
            padding: '12px 25px',
            fontSize: '1.3em',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
            opacity:
              isRunning ||
              !initialTimeSet ||
              (hours === 0 && minutes === 0 && seconds === 0)
                ? 0.6
                : 1,
          }}
        >
          Start
        </button>
        <button
          onClick={pauseTimer}
          disabled={!isRunning}
          style={{
            padding: '12px 25px',
            fontSize: '1.3em',
            backgroundColor: '#ffc107',
            color: '#333',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
            opacity: !isRunning ? 0.6 : 1,
          }}
        >
          Pauza
        </button>
        <button
          onClick={resetTimer}
          style={{
            padding: '12px 25px',
            fontSize: '1.3em',
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
