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

//CreateModalWithPicture on click
list.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.tagName === "IMG") {
    const img = event.target;
    const src = img.dataset.source;
    basicLightbox.create(`<img src="${src}">`).show();
  }
});

//<li class="gallery__item">
// <a class="gallery__link" href="large-image.jpg">
//    <img
//     class="gallery__image"
//      src="small-image.jpg"
//      data-source="large-image.jpg"
//      alt="Image description"
//    />
//  </a>
//</li>;
// const instance = basicLightbox.create(`
//     <div class="modal">
//         <p>
//             Your first lightbox with just a few lines of code.
//             Yes, it's really that simple.
//         </p>
//     </div>
// `);

// instance.show();
// const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `);
