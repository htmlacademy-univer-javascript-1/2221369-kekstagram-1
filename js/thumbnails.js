const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content;
const newPictureTemplate = pictureTemplate.querySelector('.picture');

const createThumbnails = (photos) => photos.map((photo) => {
  const newPhoto = newPictureTemplate.cloneNode(true);
  const urlNewPhoto = newPhoto.querySelector('img');
  urlNewPhoto.setAttribute('src', photo.url);
  const countLikeNewPhoto = newPhoto.querySelector('.picture__likes');
  countLikeNewPhoto.textContent = photo.likes;
  const commentsNewPhoto = newPhoto.querySelector('.picture__comments');
  commentsNewPhoto.textContent = photo.comments.length;

  picturesContainer.appendChild(newPhoto);
});

export {createThumbnails};
