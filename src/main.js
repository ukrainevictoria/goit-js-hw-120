import { getImagesByQuery, PER_PAGE } from "./js/pixabay-api.js";
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from "./js/render-functions.js";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector("#search-form");
const loadMoreBtn = document.querySelector(".load-more");

let currentQuery = "";
let currentPage = 1;
let totalHits = 0;

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  currentQuery = event.target.search.value.trim();
  if (!currentQuery) {
    iziToast.error({ message: "Please enter a search term!" });
    return;
  }

  currentPage = 1;
  totalHits = 0;
  clearGallery();
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, currentPage);
    totalHits = data.totalHits;

    if (data.hits.length === 0) {
      iziToast.info({
        message: "Sorry, there are no images matching your search query.",
      });
      hideLoader();
      return;
    }

    createGallery(data.hits);
    hideLoader();

    if (currentPage * PER_PAGE < totalHits) {
      showLoadMoreButton();
    }
  } catch (error) {
    console.error(error);
    iziToast.error({ message: "Something went wrong. Please try again." });
    hideLoader();
  }
});

loadMoreBtn.addEventListener("click", async () => {
  currentPage += 1;
  showLoader();
  hideLoadMoreButton();

  try {
    const data = await getImagesByQuery(currentQuery, currentPage);
    createGallery(data.hits);
    hideLoader();

    const cardHeight = document
      .querySelector(".gallery li")
      .getBoundingClientRect().height;
    window.scrollBy({ top: cardHeight * 2, behavior: "smooth" });

    if (currentPage * PER_PAGE >= totalHits) {
      hideLoadMoreButton();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
      });
    } else {
      showLoadMoreButton();
    }
  } catch (error) {
    console.error(error);
    iziToast.error({ message: "Something went wrong. Please try again." });
    hideLoader();
  }
});