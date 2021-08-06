

var menuIcon = document.querySelector('.drop-menu');
var menu = document.querySelector('.menu');
var singlePropImg = document.querySelector('.main-card-bg');
var singlePropImgs = document.querySelectorAll('.sp-imgs img');
var singlePropImgs2 = document.querySelectorAll('.sp-imgs2 img');
var rightArrow = document.querySelector('.fa-chevron-right');
var leftArrow = document.querySelector('.fa-chevron-left');
var frame = document.querySelector('.frame');
var propDesc = document.querySelector('.prop-desc');
var headerContent =  document.querySelector('.header-content');



menuIcon.addEventListener('click', displayMenu);

function displayMenu(e){
    menu.classList.toggle('showMenu');
    
    if(menu.classList.contains('showMenu')){
        menuIcon.innerHTML = '<i class="fas fa-times"></i>';

    } else {
        menuIcon.innerHTML = '<i class="fas fa-bars"></i>';
    }
}

singlePropImgs[0].addEventListener('click', showImg1);
singlePropImgs[1].addEventListener('click', showImg2);
singlePropImgs[2].addEventListener('click', showImg3);
singlePropImgs[3].addEventListener('click', showImg4);

singlePropImgs2[0].addEventListener('click', showImg5);
singlePropImgs2[1].addEventListener('click', showImg6);
singlePropImgs2[2].addEventListener('click', showImg7);
singlePropImgs2[3].addEventListener('click', showImg8);

















function showImg1(e){
    singlePropImg.src = singlePropImgs[0].src;
    propDesc.textContent = 'Front View';
}

function showImg2(e){
    singlePropImg.src = singlePropImgs[1].src;
    propDesc.textContent = 'Backyard';
}

function showImg3(e){
    singlePropImg.src = singlePropImgs[2].src;
    propDesc.textContent = 'Kitchen';
}

function showImg4(e){
    singlePropImg.src = singlePropImgs[3].src;
    propDesc.textContent = 'Living Room';
}

function showImg5(e){
    singlePropImg.src = singlePropImgs2[0].src;
    propDesc.textContent = 'Master Bedroom';
}

function showImg6(e){
    singlePropImg.src = singlePropImgs2[1].src;
    propDesc.textContent = 'Bathroom';
}

function showImg7(e){
    singlePropImg.src = singlePropImgs2[2].src;
    propDesc.textContent = 'Bedroom';
}

function showImg8(e){
    singlePropImg.src = singlePropImgs2[3].src;
    propDesc.textContent = 'Basement';
}



rightArrow.addEventListener('click', scrollRight);
leftArrow.addEventListener('click', scrollLeft);

function scrollRight(e){
    frame.style.transform = 'translateX(-100%)';
}

function scrollLeft(e){
    frame.style.transform = 'translateX(0%)';
}

