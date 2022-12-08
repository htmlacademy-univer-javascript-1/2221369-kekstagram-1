import {getRandomPositiveInteger} from'./utils.js';
import {NAMES, MESSAGES, DESCRIPTIONS, CountPhotos, CountComments, AvatarNumber, CountLike} from'./consts.js';

const createComment = (id) => ({
  id,
  avatar: `img/avatar-${getRandomPositiveInteger(AvatarNumber.MIN, AvatarNumber.MAX)}.svg`,
  message: MESSAGES[getRandomPositiveInteger(0, MESSAGES.length - 1)],
  name: NAMES[getRandomPositiveInteger(0, NAMES.length - 1)],
});

const createPhoto = (id) => ({
  id,
  url: `photos/${id}.jpg`,
  description: DESCRIPTIONS[getRandomPositiveInteger(0, DESCRIPTIONS.length - 1)],
  likes: getRandomPositiveInteger(CountLike.MIN, CountLike.MAX),
  comments: Array.from({length: getRandomPositiveInteger(CountComments.MIN, CountComments.MAX)}, createComment),
});

export const createPhotos = () => Array.from({length: CountPhotos.MAX}).map((_, index) => createPhoto(index + 1));
