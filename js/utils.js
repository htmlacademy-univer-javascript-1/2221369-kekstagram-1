const checkMaxLenghtString = (string, limit) => string.lenght <= limit;

const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const isEscapeKey = (evt) => evt.keyCode === 27;

export { checkMaxLenghtString, getRandomPositiveInteger, isEscapeKey };
