const NAMES = ['Эмилия','Леля','Валентина','Александра','Анна'];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTIONS = ['Да, еще одно фото', 'Отличный день для торта', 'Вторник – день вкусняшек', 'Я делаю себяшку', 'Соскучились?'];

const CountPhotos = {
  MIN: 1,
  MAX: 25
};

const CountComments = {
  MIN: 1,
  MAX: 8
};

const AvatarNumber = {
  MIN: 1,
  MAX: 6
};

const CountLike = {
  MIN: 15,
  MAX: 200,
};

const DEFAULT_RENDERED_COMMENTS = 5;
const MAX_COMMENT_LENGTH = 140;
const MAX_HASHTAG_COUNT = 5;
const MAX_HASHTAG_LENGTH = 20;

const ErrorMessage = {
  SEPARATED_BY_SPACES: 'Хэш-теги должны разделяться пробелами',
  START_WITH: 'Хэш-тег должен начинаться с символа #',
  NO_REPEAT: 'Хэш-теги не должны повторяться',
  HASHTAG_MAX_LENTH: `Максимальная длина одного хэш-тега ${MAX_HASHTAG_LENGTH} символов, включая #`,
  MAX_COUNT_HASHTAG: `Нельзя указать больше ${MAX_HASHTAG_COUNT} хэш-тегов`,
  UNACCEPTABLE_SYMBOLS: 'Хэш-тег содержит недопустимые символы',
  COMMENT_MAX_LENGTH: `Длина комментария не может составлять больше ${MAX_COMMENT_LENGTH} символов`
};


export {NAMES, MESSAGES, DESCRIPTIONS, CountPhotos, CountComments, AvatarNumber, CountLike, DEFAULT_RENDERED_COMMENTS, MAX_COMMENT_LENGTH, MAX_HASHTAG_COUNT, MAX_HASHTAG_LENGTH, ErrorMessage};
