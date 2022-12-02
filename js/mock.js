import {getRandomPositiveInteger} from'./utils.js';
import {NAMES, MESSAGES, DESCRIPTIONS, MAX_COUNT_PHOTOS, MAX_COUNT_COMMENTS, CountLike} from'./consts.js';

const createComment = (id) => ({
  id,
  avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
  message: MESSAGES[getRandomPositiveInteger(0, MESSAGES.length - 1)],
  name: NAMES[getRandomPositiveInteger(0, NAMES.length - 1)],
});

const createPhoto = (id) => ({
  id,
  url: `photos/${id}.jpg`,
  description: DESCRIPTIONS[getRandomPositiveInteger(0, DESCRIPTIONS.length - 1)],
  likes: getRandomPositiveInteger(CountLike.MIN, CountLike.MAX),
  comments: Array.from({length: getRandomPositiveInteger(1, MAX_COUNT_COMMENTS)}, createComment),
});

export const createPhotosArray = () => Array.from({length: MAX_COUNT_PHOTOS}, createPhoto);
