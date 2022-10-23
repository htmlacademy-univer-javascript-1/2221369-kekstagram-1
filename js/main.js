const getRandomPositiveInteger = (to, from = 0) => {
  from = Math.ceil(from);
  to = Math.floor(to);
  return Math.floor(Math.random() * (to - from + 1)) + from;
};
getRandomPositiveInteger(1, 5);


const checkMaxLenghtString = (string, limit) => string.lenght < limit;
checkMaxLenghtString('устав', 7);
