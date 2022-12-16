import { createPhotos } from './mock.js';
import { initThumbnails } from './thumbnails.js';
import { renderUploadForm } from './form.js';

const data = createPhotos();
initThumbnails(data);
renderUploadForm();
