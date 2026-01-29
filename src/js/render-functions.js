import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");
const loadMoreBtn = document.querySelector(".load-more");

export const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
      <li class="gallery-item">
        <a href="${largeImageURL}">
          <img src="${webformatURL}" alt="${tags}" loading="lazy" />
        </a>
        <div class="info">
          <div class="info-item">
            <span class="metric-label">Likes</span>
            <span class="metric-value">${likes}</span>
          </div>
          <div class="info-item">
            <span class="metric-label">Views</span>
            <span class="metric-value">${views}</span>
          </div>
          <div class="info-item">
            <span class="metric-label">Comments</span>
            <span class="metric-value">${comments}</span>
          </div>
          <div class="info-item">
            <span class="metric-label">Downloads</span>
            <span class="metric-value">${downloads}</span>
          </div>
        </div>
      </li>
    `
    )
    .join("");

  gallery.insertAdjacentHTML("beforeend", markup);
  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = "";
}

export function showLoader() {
  loader.classList.add("visible");
}

export function hideLoader() {
  loader.classList.remove("visible");
}

export function showLoadMoreButton() {
  loadMoreBtn.classList.add("visible");
}

export function hideLoadMoreButton() {
  loadMoreBtn.classList.remove("visible");
}
