const HOUR_MIN = 60;
export const getDuration = (time) => {
  const hours = Math.floor(time / HOUR_MIN);
  const min = time % HOUR_MIN;

  return `${hours}h ${min}m`;
};
