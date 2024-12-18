import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
let lightboxbox;
export function changeGallery(images) {
  const element = images.map(({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) => 
      `<a href="${largeImageURL}" class="gallery-item">
        <img src="${webformatURL}" alt="${tags}" />
        <div class="info">
          <p>Likes: ${likes}</p>
          <p>Views: ${views}</p>
          <p>Comments: ${comments}</p>
          <p>Downloads: ${downloads}</p>
        </div>
      </a>`
    ).join('');
  gallery.innerHTML = element;
  if (!lightboxbox) {
    lightboxbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
    });
  } else {
    lightboxbox.refresh();
  }
}

export function clear(){
  gallery.innerHTML = ' ';
}