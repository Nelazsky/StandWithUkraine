let images = [
    "https://picjumbo.com/wp-content/uploads/i-stand-with-ukraine-profile-picture-free-photo-2210x2210.jpg",
    "https://standwithukraine.live/wp-content/uploads/2022/02/cropped-IMG_1928.png",
    "https://www.president.gov.ua/storage/j-image-storage/14/89/73/5a855047042111f63fd222a15953569f_1579673033_extra_large.jpeg",
];

const pageImages = document.getElementsByTagName("img");
for (let i = 0; i < pageImages.length; i++) {
    const randomImg = Math.floor(Math.random() * images.length);
    pageImages[i].src = images[randomImg];
}