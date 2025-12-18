const shareWrapper = document.querySelector(".share-wrapper");
const shareBtn = document.querySelector(".share-btn");

shareBtn.addEventListener("click", () => {
  shareWrapper.classList.toggle("is-open");
});
