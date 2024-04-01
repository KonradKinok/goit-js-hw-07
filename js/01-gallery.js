"use strict";
import { galleryItems } from "./gallery-items.js";
// Change code below this line

const list = document.querySelector("ul.gallery");

//HTML completion
galleryItems.forEach((element) => {
  const listItem = document.createElement("li");
  const linkItem = document.createElement("a");
  const imgItem = document.createElement("img");

  //img
  imgItem.classList = "gallery__image";
  imgItem.src = element.preview;
  imgItem.dataset.source = element.original;
  imgItem.alt = element.description;

  //a
  linkItem.classList = "gallery__link";
  linkItem.href = element.original;

  //li
  listItem.classList = "gallery__item";

  //append
  linkItem.appendChild(imgItem);
  listItem.appendChild(linkItem);
  list.appendChild(listItem);
});

//Show picture in modal on click
list.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.tagName === "IMG") {
    const src = event.target.dataset.source;
    const imgHtml = `<img src="${src}">`;

    //create instance basicLightbox
    basicLightbox
      .create(imgHtml, {
        //close modal after press key Esc
        onShow: (instance) => {
          document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
              instance.close();
            }
          });
        },
      })
      .show();
  }
});
