import {createPhotos} from './mock.js';
import {createThumbnails} from './thumbnails.js';

const photos = createPhotos();
createThumbnails(photos);
