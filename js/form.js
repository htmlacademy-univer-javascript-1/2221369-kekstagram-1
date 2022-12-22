import { isEscapeKey } from './utils.js';
import { form, showSubmitButton, validateForm, submitButton } from './validation-form.js';
import { onScaleButtonClick, scaleContainer } from './picture-scale.js';
import { effectList, addEffect, hideUiSlider } from './effects.js';
import { sendData } from './api.js';
import { renderMessage } from './messages.js';

const body = document.querySelector('body');
const imgUploadField = document.querySelector('#upload-file');
const editImgField = document.querySelector('.img-upload__overlay');
const closeButton = form.querySelector('.img-upload__cancel');
const hashtagsField = form.querySelector('.text__hashtags');
const commentsField = form.querySelector('.text__description');
const imgUploadPreview = document.querySelector('.img-upload__preview img');

const closeUploadPopup  = () => {
  editImgField.classList.add('hidden');
  body.classList.remove('modal-open');
  scaleContainer.removeEventListener('click', onScaleButtonClick);
  effectList.removeEventListener('click', addEffect);
  document.removeEventListener('keydown', onButtonEscKeydown);
  closeButton.removeEventListener('click', onCloseButtonClick);
};

const closeForm = () => {
  closeUploadPopup();
  imgUploadPreview.removeAttribute('class');
  imgUploadPreview.removeAttribute('style');
  form.reset();

};

function onButtonEscKeydown(evt) {
  if (isEscapeKey(evt)) {
    closeForm();
  }
}

function onCloseButtonClick() {
  closeForm();
}

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
  scaleContainer.addEventListener('click', onScaleButtonClick);
  hideUiSlider();
  effectList.addEventListener('click', addEffect);
  setFocusListeners(commentsField);
  setFocusListeners(hashtagsField);
  showSubmitButton();
};

const onHashtagInput = () => showSubmitButton();
const onCommentInput = () => showSubmitButton();

const setUserFormSubmit = (onSuccess, onError) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    submitButton.disabled = true;
    sendData(
      () => {
        onSuccess();
        renderMessage(true);
      },
      () => {
        onError();
        renderMessage();
      },
      new FormData(evt.target),
    );
  });
};


const renderUploadForm = () => {
  imgUploadField.addEventListener('change', onImgUploadFieldChange);
  hashtagsField.addEventListener('input', onHashtagInput);
  commentsField.addEventListener('input', onCommentInput);
  validateForm();
  setUserFormSubmit(closeForm, closeUploadPopup);
};

export { renderUploadForm, hashtagsField, commentsField, imgUploadPreview };
