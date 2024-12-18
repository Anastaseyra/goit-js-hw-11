import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { searchImage } from './js/pixabay-api';
import { gallery, clear } from './js/render-functions';
import errorIcon from './img/error.png';

const form = document.querySelector('.form');
const loader = document.querySelector('.loader');

form.addEventListener('submit', event => {
  event.preventDefault();

  const search = event.target.elements.search.value.trim();
  if (!search) {
    iziToast.error({
      iconUrl: `${errorIcon}`,
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
    });
    return;
  }

  clear();
  loader.style.display = 'block';
   //   loader.classList.remove('hidden');

  searchImage(search).then(data => {
      if (data.hits.length === 0) {
        iziToast.info({ message: 'No images found' });
        return;
    };
      gallery(data.hits);
    }).catch(error => {
      iziToast.error({ message: 'Error fetching images. Please try again.' });
    })
    .finally(() => {
      loader.style.display = 'none';
    });
});