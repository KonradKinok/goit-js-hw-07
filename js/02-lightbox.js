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

//SimpleLightbox
var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
