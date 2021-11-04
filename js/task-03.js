const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryListEl = document.querySelector(".gallery");
const galleryItemEl = document.querySelector("li");
galleryListEl.style.display = "flex";
galleryListEl.style.justifyContent = "space-between";

const TotalGalleryListEl = [];

images.forEach((item) => {
  const itemEl = `<li><img class='gallery__img' src='${item.url}' alt='${item.alt}' width='300'/></li>`;
  TotalGalleryListEl.push(itemEl);
});

galleryListEl.insertAdjacentHTML("afterbegin", TotalGalleryListEl);
