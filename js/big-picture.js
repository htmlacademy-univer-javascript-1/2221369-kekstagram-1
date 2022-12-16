import { isEscapeKey } from './utils.js';
import { DEFAULT_RENDERED_COMMENTS } from './consts.js';

const bigPicture = document.querySelector('.big-picture');
const commentsList = bigPicture.querySelector('.social__comments');
const counterComments = bigPicture.querySelector('.social__comment-count');
const closeButton = bigPicture.querySelector('.big-picture__cancel');
const commentsLoaderButton = bigPicture.querySelector('.comments-loader');

let actualComments = [];
let countRenderedComments = DEFAULT_RENDERED_COMMENTS;

const getCommentTemplate = ({avatar, message, name}) => `<li class="social__comment">
  <img class="social__picture" src="${avatar}" alt="${name}" width="35" height="35">
  <p class="social__text">${message}</p>
</li>`;

const getCounterCommentsTemplate = (commentsCount) => `${Math.min(countRenderedComments, commentsCount)} из <span class="comments-count">${commentsCount}</span> комментариев`;

const getCounterComments = () => {
  counterComments.innerHTML = '';
  counterComments.insertAdjacentHTML('afterbegin', getCounterCommentsTemplate(actualComments.length));
};

const renderComments = () => {
  getCounterComments();

  commentsList.innerHTML = '';
  const commentsTemplate = actualComments.slice(0, countRenderedComments).map((comment) => getCommentTemplate(comment)).join('');
  commentsList.insertAdjacentHTML('afterbegin', commentsTemplate);

  if (countRenderedComments >= actualComments.length) {
    commentsLoaderButton.removeEventListener('click', onCommentsLoaderButtonClick);
    commentsLoaderButton.classList.add('hidden');
  }
};

const initComments = (comments) => {
  actualComments = comments.slice();
  commentsList.innerHTML = '';

  if (comments.length === 0) {
    commentsLoaderButton.classList.add('hidden');
    counterComments.textContent = 'Нет комментариев';
    return;
  }

  renderComments();
  commentsLoaderButton.addEventListener('click', onCommentsLoaderButtonClick);
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
  commentsLoaderButton.classList.remove('hidden');
  commentsLoaderButton.removeEventListener('click', onCommentsLoaderButtonClick);
  countRenderedComments = DEFAULT_RENDERED_COMMENTS;
};

function onCloseButtonClick() {
  closeBigPicture();
}

function onWindowEscKeyDown(evt) {
  if (isEscapeKey(evt)) {
    closeBigPicture();
  }
}

function onCommentsLoaderButtonClick() {
  countRenderedComments += DEFAULT_RENDERED_COMMENTS;
  renderComments();
}

const openBigPicture = (photo) => {
  document.body.classList.add('modal-open');
  bigPicture.classList.remove('hidden');

  renderBigPicture(photo);

  closeButton.addEventListener('click', onCloseButtonClick);
  document.addEventListener('keydown', onWindowEscKeyDown);
};

export { openBigPicture };
