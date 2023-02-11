
let $ = (element) => {
    return document.querySelector(element);
};

const settings = {duration: 1000, random: true};
let sliderData = [
    {image: 'http://dummyimage.com/600x400/000/fff', title: '1.image başlığı'},
    {image: 'https://dummyimage.com/600x400/fff/000', title: '2.image başlığı'},
    {image: 'https://dummyimage.com/600x400/f00/0f0', title: '3.image başlığı'}
];

let image = $(".sliderimg");
let title = $(".card-title");
let left = $(".left");
let right = $(".right");
let sliderCount = sliderData.length - 1;
let index = 0;



right.addEventListener('click', function (event) {
    index < sliderCount ? index++ : index = 0;
    getSlider(index);
    event.preventDefault();
    clearInterval(slide_interval);

});

left.addEventListener('click', function (event) {
    index <= 0 ? index = sliderCount : index--;
    getSlider(index);
    event.preventDefault();
    clearInterval(slide_interval);

});

let getSlider = (index) => {
    let getSlider = sliderData[index];
    title.innerText = getSlider.title;
    image.setAttribute("src", getSlider.image);
};
function getUniqueRandomNumber(min, max) {
    const uniqueNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return uniqueNumber;
}
var eski = 0;
let slide_interval = setInterval(function () {
    if (settings.random) {
        do {
            index = getUniqueRandomNumber(0, sliderCount);
        } while (index === eski);
        eski = index;
        console.log(eski);
        getSlider(index);
    }



}, settings.duration);
getSlider(index);
