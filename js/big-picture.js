import { isEscapeKey } from './utils.js';

const bigPicture = document.querySelector('.big-picture');
const commentsList = bigPicture.querySelector('.social__comments');
const counterComments = bigPicture.querySelector('.social__comment-count');
const closeButton = bigPicture.querySelector('.big-picture__cancel');
const commentsLoaderButton = bigPicture.querySelector('.comments-loader');
const commentsCount = bigPicture.querySelector('.comments-count');

let actualComments = [];

const getCommentTemplate = ({avatar, message, name}) => `<li class="social__comment">
  <img class="social__picture" src="${avatar}" alt="${name}" width="35" height="35">
  <p class="social__text">${message}</p>
</li>`;

const renderComments = (commentsLength) => {
  commentsCount.textContent = commentsLength;
  commentsList.innerHTML = '';
  const commentsTemplate = actualComments.slice().map((comment) => getCommentTemplate(comment)).join('');
  commentsList.insertAdjacentHTML('afterbegin', commentsTemplate);
};

const initComments = (comments) => {
  actualComments = comments.slice();
  commentsList.innerHTML = '';
  counterComments.classList.add('hidden');
  commentsLoaderButton.classList.add('hidden');
  renderComments(comments.length);
};

const renderBigPicture = (picture) => {
  bigPicture.querySelector('.big-picture__img img').setAttribute('src', picture.url);
  bigPicture.querySelector('.likes-count').textContent = picture.likes;
  bigPicture.querySelector('.social__caption').textContent = picture.description;
  initComments(picture.comments);
};

const closeBigPicture = () => {
  document.body.classList.remove('modal-open');
  bigPicture.classList.add('hidden');
  closeButton.removeEventListener('click', onCloseButtonClick);
  document.removeEventListener('keydown', onWindowEscKeyDown);
};

function onCloseButtonClick() {
  closeBigPicture();
}

function onWindowEscKeyDown(evt) {
  if (isEscapeKey(evt)) {
    closeBigPicture();
  }
}

const openBigPicture = (photo) => {
  document.body.classList.add('modal-open');
  bigPicture.classList.remove('hidden');

  renderBigPicture(photo);

  closeButton.addEventListener('click', onCloseButtonClick);
  document.addEventListener('keydown', onWindowEscKeyDown);
};

export { openBigPicture };
