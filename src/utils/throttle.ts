// eslint-disable-next-line @typescript-eslint/ban-types
const throttle = (func: Function, limit: number) => {
  let lastFunc: number | undefined;
  let lastRan: number;
  return function (...args: unknown[]) {
    if (!lastRan) {
      func(...args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if (Date.now() - lastRan >= limit) {
          func(...args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
};

export default throttle;
