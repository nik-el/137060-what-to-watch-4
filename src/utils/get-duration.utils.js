const HOUR_MIN = 60;
const HOUR_SEC = 3600;

export const geFormatDuration = (time) => {
  const hours = Math.floor(time / HOUR_MIN);
  const min = time % HOUR_MIN;

  return `${hours}h ${min}m`;
};

export const geVideoDuration = (time) => {
  const secNum = parseInt(time, 10);
  let hours = Math.floor(secNum / HOUR_SEC);
  let minutes = Math.floor((secNum - (hours * HOUR_SEC)) / HOUR_MIN);
  let seconds = secNum - (hours * HOUR_SEC) - (minutes * HOUR_MIN);

  if (hours < 10) {
    hours = `0` + hours;
  }
  if (minutes < 10) {
    minutes = `0` + minutes;
  }
  if (seconds < 10) {
    seconds = `0` + seconds;
  }
  return hours + `:` + minutes + `:` + seconds;
};
