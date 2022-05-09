let images = [
    "https://www.evermore.ca/hubfs/Stand%20With%20Ukraine%20Digital.jpeg",
    "https://standwithukraine.live/wp-content/uploads/2022/02/cropped-IMG_1928.png",
    "https://www.president.gov.ua/storage/j-image-storage/14/89/73/5a855047042111f63fd222a15953569f_1579673033_extra_large.jpeg",
];

const pageImages = document.getElementsByTagName("img");
for (let i = 0; i < pageImages.length; i++) {
    const randomImg = Math.floor(Math.random() * images.length);
    pageImages[i].src = images[randomImg];
}

const pageHeaders = document.getElementsByTagName("h2");
for (let i = 0; i < pageHeaders.length; i++) {
    pageHeaders[i].innerText = "Stand With Ukraine";
}

const pageContents = document.getElementsByTagName("p");
for (let i = 0; i < pageContents.length; i++) {
    pageHeaders[i].innerText = "Ще не вмерла України і слава, і воля,\n Ще нам, браття молодії, усміхнеться доля.";
}