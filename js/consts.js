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

const ALERT_SHOW_TIME = 5000;

const TIMEOUT_THUBNAILS_FILTERS = 500;


export { DEFAULT_RENDERED_COMMENTS, MAX_COMMENT_LENGTH, MAX_HASHTAG_COUNT, MAX_HASHTAG_LENGTH, ErrorMessage, ALERT_SHOW_TIME, TIMEOUT_THUBNAILS_FILTERS};
