const IMAGES = [
  "./images/a2-fitness-logo.jpg",
  "./images/alpha-logo.png",
  "./images/armstrong-original.png",
  "./images/barbell.jpg",
  "./images/bbbs-logo.jpg",
  "./images/bowling-original.jpg",
  "./images/cancun.jpg",
  "./images/digitalcrafts-logo.png",
  "./images/emory-logo.jpg",
  "./images/england.jpg",
  "./images/hiking.JPG",
  "./images/main-photo.jpg",
  "./images/minnesota.png",
  "./images/music-background.jpg",
  "./images/puerto-rico.jpg",
  "./images/san_francisco.jpg",
  "./images/senegal-picture.jpg",
  "./images/side-photo-1.jpg",
  "./images/side-photo-2.jpg",
  "./images/side-photo-3.jpg",
  "./images/side-photo-4.jpg",
  "./images/side-photo-5.jpg",
  "./images/sixteenth-note.png",
  "./images/stars-background.jpg",
  "./images/timberwolves-original.jpg",
  "./images/times_square.jpg",
  "./images/twins-original.png"
]

const container = document.querySelector(".thumbnail-container");

function makeImageTag(photo) {
  const img = document.createElement("img");
  img.setAttribute("src", photo);

  return img
}

function makeContainer() {
  const item = document.createElement("div");
  item.setAttribute("data-container", "");
  item.classList.add("thumbnail-item")

  return item;
}

function changeFrame(photo) {
  const main = document.querySelector(".picture-frame img");
  console.log(main);
  main.setAttribute("src", photo);

  // return main;
}

IMAGES.forEach(picture => {
  const item = makeContainer();
  const image = makeImageTag(picture);
  item.appendChild(image);
  container.appendChild(item);
  image.addEventListener("click", () => changeFrame(picture));
});
