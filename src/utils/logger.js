const getTime = () => new Date().toISOString();

const logger = {
  info: (...args) => {
    console.log(`[${getTime()}] INFO:`, ...args);
  },

  warn: (...args) => {
    console.warn(`[${getTime()}] WARN:`, ...args);
  },

  error: (...args) => {
    console.error(`[${getTime()}] ERROR:`, ...args);
  },
};

export default logger;
