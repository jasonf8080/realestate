
const singleHouses = document.querySelectorAll('.clickable-card');
const houseImgContainer = document.querySelector('.house-img-container');
const houseAddressContainer = document.querySelector('.house-address');


singleHouses.forEach(function(house){
    house.addEventListener('click', function(e){
        window.location.href = "index2.html";
        singleHouseImg = e.target.parentElement.children[0].children[0].src;
        singleHouseAddress = e.target.parentElement.children[1].children[0].children[0].textContent;

        houseImgContainer.innerHTML = `<img src="${singleHouseImg}">
        <i class="fas fa-chevron-left"></i>
        <i class="fas fa-chevron-right"></i>`;

        houseAddressContainer.innerHTML = `<h2>${singleHouseAddress}</h2>
        <div class="address-info">
            <div class="house-info">
                <i class="fas fa-bed"></i>
                <p>2 bed</p>
            </div>

            <div class="house-info">
                <i class="fas fa-shower"></i>
                <p>3 baths</p>
            </div>
            
            <div class="house-info">
                <i class="fas fa-ruler-combined"></i>
                <p>1280 sq ft</p>
            </div>
        </div>
        <h4 class="house-price">Price:<span>$508,000</span></h4>`
    })
})


window.addEventListener('scroll', function(){
    
    const nav =  document.querySelector('.nav');
    const navHeight = nav.getBoundingClientRect().height;
    
    if(pageYOffset > navHeight){
        nav.classList.add('nav-fixed');
    } else {
        nav.classList.remove('nav-fixed');
    }

})

var menuIcon = document.querySelector('.drop-menu');
var menu = document.querySelector('.menu');
const houses = document.querySelectorAll('.l-card');
const housePic = document.querySelector('#house-pic');
const price = document.querySelector('.price');

const housePictures = [

    {
        img: 'tour.jpg',
    }, 

    {
        img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/white-kitchen-1-1537194316.jpg',
    }, 

    {
        img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/edc020121toolbox-001-1607447196.jpg',
    }, 

    {
        img: 'https://www.ikea.com/images/a-vadheim-upholstered-bed-with-vitkloever-bed-linen-stands-i-18d599765b42ee3396abb67b8a245606.jpg?f=xxxl',
    },
];



menuIcon.addEventListener('click', displayMenu);

function displayMenu(e){
    menu.classList.toggle('showMenu');
    
    if(menu.classList.contains('showMenu')){
        menuIcon.innerHTML = '<i class="fas fa-times"></i>';

    } else {
        menuIcon.innerHTML = '<i class="fas fa-bars"></i>';
    }
}

let currentHouse = 0;


/*const communityContainer = document.querySelector('.community-container');
const community = document.querySelector('.community');
const communityListItems = document.querySelectorAll('.community-list li');
const communitySections = document.querySelectorAll('.community-container > *')





community.addEventListener('click', function(e){
    const id = e.target.dataset.id;
    
   
    if(id){
       communityListItems.forEach(function(listItem){
           listItem.classList.remove('active');
           e.target.classList.add('active');
       })

       communitySections.forEach(function(section){
           section.classList.remove('active');

       })

       const element = document.getElementById(id);//so think of dataset as input and id is output
       console.log(element);
       element.classList.add('active');
    }
})*/



/*const rightArrow = document.querySelector('.fa-chevron-right');
const leftArrow = document.querySelector('.fa-chevron-left');
const imgArray = ['https://static01.nyt.com/images/2020/10/04/realestate/04selling-LI/oakImage-1600449152054-superJumbo.jpg', 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 'https://images.pexels.com/photos/4682110/pexels-photo-4682110.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 'https://images.pexels.com/photos/2631746/pexels-photo-2631746.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'];


const houseImg = document.querySelector('.house-img-container img');
let currentImg = 0;

window.addEventListener('DOMContentLoaded', function(){
    setupImg(currentImg);
})


function setupImg(currentImg){
    houseImg.src = imgArray[currentImg];
}



rightArrow.addEventListener('click', function(e){
  
        currentImg++;

        if(currentImg > imgArray.length -1){
            currentImg = 0;
        }

        setupImg(currentImg)
       
})

leftArrow.addEventListener('click', function(e){
  
    currentImg--;

    if(currentImg < 0){
        currentImg = imgArray.length -1;
    }

    setupImg(currentImg)
   
})*/


const searchFilter = document.querySelector('#search-filter');

searchFilter.addEventListener('keyup', function(){
    const searchFilterInput = searchFilter.value.toUpperCase();
    const towns = document.querySelectorAll('.towns-list li');
   
   
   
    for(let i = 0; i < towns.length; i++){
       
        let eachTown = towns[i].children[0].textContent;
        //console.log(eachTown);
       
        if(eachTown.toUpperCase().indexOf(searchFilterInput) > -1){
            towns[i].style.display = 'block';
        } else {
            towns[i].style.display = 'none';
        }
    }

    if(searchFilterInput === ''){
        towns.forEach(function(town){
            town.style.display = 'none';
        })
    }



})
