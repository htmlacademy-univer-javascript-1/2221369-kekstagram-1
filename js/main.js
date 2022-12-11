import { createPhotos } from './mock.js';
import { initThumbnails } from './thumbnails.js';

const data = createPhotos();
initThumbnails(data);
