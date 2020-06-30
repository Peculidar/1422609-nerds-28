const contactUsLink = document.querySelector(".modal-button");
const contactPopup = document.querySelector(".contact-form-article");
const closeForm = contactPopup.querySelector(".close-cross");

contactUsLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    contactPopup.classList.add("form-show");
});

closeForm.addEventListener("click", function (evt) {
    evt.preventDefault();
    contactPopup.classList.remove("form-show");
});