

const icon = document.querySelector(".icon");
const ul = document.querySelector('ul');


icon.addEventListener('click', () => {
    ul.classList.toggle('showData');
    
    if (ul.classList.contains('showData')) {
        document.getElementById('bar').className = "fa-solid fa-xmark";
    } else {
        document.getElementById('bar').className = "fa-solid fa-bars";
    }
});


var i = 0;
var images = [];
var time =10000; // Time in milliseconds (3 seconds)

images[0] = "./website banner/01.jpg";
images[1] = "./website banner/02.png";
images[2] = "./website banner/03.jpg";

function changeImg() {
    document.querySelector('.images-1').src = images[i];

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout(changeImg, time);
}

window.onload = function() {
    changeImg();
};
