// CONTACT FORM

var contactUsLink = document.querySelector(".modal-button");
var contactPopup = document.querySelector(".contact-form-article");
var closeForm = contactPopup.querySelector(".close-cross");
var contactForm = contactPopup.querySelector(".contact-form");
var contactName = contactPopup.querySelector(".contact-user-name");
var contactEmail = contactPopup.querySelector(".contact-user-email");
var contactMessage = contactPopup.querySelector(".contact-user-message");

var isStorageSupport = true;
var nameStorage = "";
var emailStorage = "";

try {
  nameStorage = localStorage.getItem("name");
  emailStorage = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

contactUsLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactPopup.classList.add("form-show");
  if (nameStorage) {
    contactName.value = nameStorage;
  }
  if (emailStorage) {
    сontactEmail.value = emailStorage;
  }
  if (nameStorage && emailStorage) {
    contactMessage.focus();
  } else {
    contactName.focus();
  }
});

closeForm.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactPopup.classList.remove("form-show");
  contactPopup.classList.remove("form-error");
});

contactForm.addEventListener("submit", function (evt) {
  if (!contactName.value || !contactEmail.value || !contactMessage.value) {
    evt.preventDefault();
    contactPopup.classList.remove("form-error");
    contactPopup.offsetWidth = contactPopup.offsetWidth;
    contactPopup.classList.add("form-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", contactName.value);
      localStorage.setItem("email", contactEmail.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (contactPopup.classList.contains("form-show")) {
      evt.preventDefault();
      contactPopup.classList.remove("form-show");
      contactPopup.classList.remove("form-error");
    }
  }
});

