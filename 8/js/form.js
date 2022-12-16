import { isEscapeKey } from './utils.js';
import { form, showSubmitButton, validateForm } from './validation-form.js';

const body = document.querySelector('body');
const imgUploadField = document.querySelector('#upload-file');
const editImgField = document.querySelector('.img-upload__overlay');
const closeButton = form.querySelector('.img-upload__cancel');
const hashtagsField = form.querySelector('.text__hashtags');
const commentsField = form.querySelector('.text__description');

const closeUploadPopup  = () => {
  editImgField.classList.add('hidden');
  body.classList.remove('modal-open');
  form.reset();
};

const onButtonEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    closeUploadPopup();
    document.removeEventListener('keydown', onButtonEscKeydown);
  }
};

const onCloseButtonClick = () => {
  closeUploadPopup();
  document.removeEventListener('keydown', onButtonEscKeydown);
};

const setFocusListeners = (field) => {
  field.addEventListener('focus', () => {
    document.removeEventListener('keydown', onButtonEscKeydown);
  });
  field.addEventListener('blur', () => {
    document.addEventListener('keydown', onButtonEscKeydown);
  });
};

const onImgUploadFieldChange = () => {
  editImgField.classList.remove('hidden');
  body.classList.add('modal-open');
  closeButton.addEventListener('click', onCloseButtonClick);
  document.addEventListener('keydown',onButtonEscKeydown);
  setFocusListeners(commentsField);
  setFocusListeners(hashtagsField);
  showSubmitButton();
};

const onHashtagInput = () => showSubmitButton();
const onCommentInput = () => showSubmitButton();

const renderUploadForm = () => {
  imgUploadField.addEventListener('change', onImgUploadFieldChange);
  hashtagsField.addEventListener('input', onHashtagInput);
  commentsField.addEventListener('input', onCommentInput);
  validateForm();
};

export { renderUploadForm, hashtagsField, commentsField};
