import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more');
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});

export function createGallery(images) {
  const markup = images
    .map(
      ({
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `
      <li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
         <img class="gallery-img" src="${webformatURL}" alt="${tags}"loading="lazy" />
        </a>
    
        <ul class="info">
          <li>Likes:${likes}</li>
          <li>Views:${views}</li>
          <li>Comments:${comments}</li>
          <li>Downloads:${downloads}</li>
        </ul>
      </li>`;
      }
    )
    .join('');
  galleryContainer.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}
//clear the gallery//
export function clearGallery() {
  galleryContainer.innerHTML = '';
}
//show loader//
export function showLoader() {
  loader.classList.remove('hidden');
}
//hide loader//
export function hideLoader() {
  loader.classList.add('hidden');
}
//show btn-load-more//
export function showLoadMoreButton() {
  loadMoreBtn.classList.remove('is-hidden');
}
//hide btn-load-more//
export function hideLoadMoreButton() {
  loadMoreBtn.classList.add('is-hidden');
}
