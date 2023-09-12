import { useEffect, useState } from 'react';

export const useTimer = (
  initTimerValueInSeconds: number,
  onStopTimer?: () => void,
) => {
  const [seconds, setSeconds] = useState(initTimerValueInSeconds);
  const [timer, setTimer] = useState<NodeJS.Timer | undefined>(undefined);

  const restartTimer = () => {
    setSeconds(initTimerValueInSeconds);
    const interval = setInterval(
      () => setSeconds((prevState) => prevState - 1),
      1000,
    );
    setTimer(interval);
  };
  const stopTimer = () => {
    clearInterval(timer);
    setTimer(undefined);
  };

  useEffect(() => {
    const interval = setInterval(
      () => setSeconds((prevState) => prevState - 1),
      1000,
    );
    setTimer(interval);

    return () => {
      clearInterval(interval);
      setTimer(undefined);
    };
  }, []);

  useEffect(() => {
    if (seconds < 1) {
      stopTimer();
      if (onStopTimer) onStopTimer();
    }
  }, [seconds]);

  return { seconds, timer, restartTimer };
};
