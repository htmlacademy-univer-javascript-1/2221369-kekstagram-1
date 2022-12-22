import { hashtagsField, commentsField } from './form.js';
import { MAX_COMMENT_LENGTH, MAX_HASHTAG_COUNT, MAX_HASHTAG_LENGTH, ErrorMessage } from './consts.js';
import { checkMaxLenghtString } from './utils.js';

const form = document.querySelector('.img-upload__form');
const submitButton = document.querySelector('.img-upload__submit');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__error-text'
});

const showSubmitButton = () => {
  submitButton.disabled = !pristine.validate();
};

const getUniqueHashtags = (hashtags) => {
  const uniqueSet = new Set(hashtags);
  return hashtags.length === uniqueSet.size;
};

let errorMessage = '';

const error = () => errorMessage;

const hashtagsHandler = (string) => {
  errorMessage = '';
  const inputText = string.toLowerCase().trim();
  if(!inputText) {
    return true;
  }
  const inputHashtags = inputText.split(/\s+/);
  if(inputHashtags.length === 0) {
    return true;
  }
  const rules = [
    {
      check: inputHashtags.some((text) => text.indexOf('#', 1) >= 1),
      error: ErrorMessage.SEPARATED_BY_SPACES,
    },
    {
      check: inputHashtags.length > MAX_HASHTAG_COUNT,
      error: ErrorMessage.MAX_COUNT_HASHTAG,
    },
    {
      check: inputHashtags.some((text) => text[0] !== '#'),
      error: ErrorMessage.START_WITH,
    },
    {
      check: inputHashtags.some((text) => text.length > MAX_HASHTAG_LENGTH),
      error: ErrorMessage.HASHTAG_MAX_LENTH,
    },
    {
      check: inputHashtags.some((text) => !/^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/.test(text)),
      error: ErrorMessage.UNACCEPTABLE_SYMBOLS,
    },
    {
      check: !getUniqueHashtags(inputHashtags),
      error: ErrorMessage.NO_REPEAT,
    },
  ];

  return rules.every((rule) => {
    const isInvalid = rule.check;
    if(isInvalid) {
      errorMessage = rule.error;
    }
    return !isInvalid;
  });
};

const commentHandler = (text) => {
  errorMessage = '';
  const inputText = text.trim();
  if(!inputText) {
    return true;
  }

  const rule = {
    check: !(checkMaxLenghtString(inputText, MAX_COMMENT_LENGTH)),
    error: ErrorMessage.COMMENT_MAX_LENGTH,
  };
  const isInvalid = rule.check;
  if(isInvalid) {
    errorMessage = rule.error;
  }
  return !isInvalid;
};


const validateForm = () => {
  pristine.addValidator(hashtagsField, hashtagsHandler, error);
  pristine.addValidator(commentsField, commentHandler, error);
  showSubmitButton();
};

export { form, showSubmitButton, validateForm, submitButton };
