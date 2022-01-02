const houses = [
    {
        address: '18 Chestnut St, Yorktown Heights, NY, 12483',
        imgArray: ['images/house1.png', 'https://kitchensunlimited.net/wp-content/uploads/2019/02/KitchenUnlimited-GlendaRoad-2-SelaviePhoto-A-2.jpg', 'https://www.thespruce.com/thmb/c4b01hm8XRTMPYdQi1lu8Nd-8s0=/2500x1667/filters:fill(auto,1)/brophyinteriorsbedroom4-b262a7064d0c4c14b8ae8f2ae55df805.jpeg', 'https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2020/3/31/0/HUHH2020-Kitchens_Arroyo-Grande-CA_9.jpg.rend.hgtvcom.966.644.suffix/1585683238993.jpeg']
    },

    {
        address: '453 Morningside Ave, New Rochelle, NY, 12483',
        imgArray: ['images/house2.png', 'https://st.hzcdn.com/simgs/pictures/kitchens/small-and-efficient-kitchen-remodel-mosaic-design-build-img~29a1f83a0017f20e_9-0725-1-11fd626.jpg', 'https://furnitureurban.com/wp-content/uploads/2020/04/CMEB6918-scaled.jpg', 'https://kitchenandbathshop.com/wp-content/uploads/2021/02/bathroom-remodel-5000-1024x682.jpg']
    },
];


const houseImgContainer = document.querySelector('.selected-house');
const address = document.querySelector('.address');
const price = document.querySelector('.price');

const houseImg = localStorage.getItem('houseImg');
const houseAddress = localStorage.getItem('houseAddress');
const housePrice = localStorage.getItem('housePrice');


address.textContent = houseAddress;
price.textContent = housePrice;

let imgCounter = 0;



for(let i = 0; i < houses.length; i++){
    if(houseAddress === houses[i].address){
        var selectedHouse = houses[i];
        //console.log(selectedHouse);
        houseImgContainer.src = selectedHouse.imgArray[imgCounter];
        
    }
}

const rightArrow = document.querySelector('.selected-house-container i');

rightArrow.addEventListener('click', function(e){
    imgCounter++;
    
    if(imgCounter > selectedHouse.imgArray.length - 1){
       imgCounter = 0;
    }
    
    houseImgContainer.src = selectedHouse.imgArray[imgCounter];
   
})



const houseCards = document.querySelectorAll('.l-card');


houseCards.forEach(function(houseCard){
    houseCard.addEventListener('click', function(){
        //const houseImg = houseCard.children[0].children[0].src;
        const houseAddress = houseCard.children[1].children[0].children[0].textContent;
        const housePrice = houseCard.children[0].children[1].textContent;
    
        localStorage.setItem('houseImg', houseImg);
        localStorage.setItem('houseAddress', houseAddress);
        localStorage.setItem('housePrice', housePrice);
    })
})

let similarHomesString = localStorage.getItem('similarHomes');//retrieve similar homes as a string
let similarHomesArray = JSON.parse(similarHomesString);// turn similarHomesString into an array

similarHomesArray.forEach(function(index){
    //console.log(index);

})

