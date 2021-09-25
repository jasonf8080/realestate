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


const communityContainer = document.querySelector('.community-container');
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
})


