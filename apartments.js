//setup local listings innerHTML using js
const houses = [
    {
        img: 'images/house1.png',
        address: '18 Chestnut St, Yorktown Heights, NY, 12483',
        price: '$508,000',
    },

    {
        img: 'images/house2.png',
        address: '453 Morningside Ave, New Rochelle, NY, 12483',
        price: '$508,000',
    },

    {
        img: 'images/house3.png',
        address: '32 Soundview St, Dobbs Ferry, NY, 12483',
        price: '$508,000',
    },

    {
        img: 'images/house4.png',
        address: '672 Clinton St, Mt. Kisco, NY, 12483',
        price: '$508,000',
    },

    {
        img: 'images/house5.png',
        address: '843 Clearview St, Yonkers, NY, 12483',
        price: '$508,000',
    },

    {
        img: 'images/house6.png',
        address: '57 Jackson St, Elmsford, NY, 12483',
        price: '$508,000',
    },

    {
        img: 'images/house7.png',
        address: '981 Maple Ave, Hawthorne, NY, 12483',
        price: '$508,000',
    },

    {
        img: 'images/house8.png',
        address: '47 Sterling St, Somers, NY 12483',
        price: '$508,000',
    },

    {
        img: 'images/house9.png',
        address: '64 Madison Rd, Peekskill, NY, 12093',
        price: '$508,000',
    },

    {
        img: 'images/house10.png',
        address: '843 Columbus Ave, Tarrytown, NY, 12483',
        price: '$508,000',
    },

    {
        img: 'images/house11.png',
        address: '12 Lincoln St, Briarcliff, NY, 12483',
        price: '$508,000',
    },

    {
        img: 'images/house12.png',
        address: '129 Ardsley Rd, Ardsley, NY, 12483',
        price: '$508,000',
    },
]

const localListingsGrid = document.querySelector('.local-listings-grid');

let housesHTML = houses.map(function(house){
    return `    <a href="index4.html" class="l-card">
    <div class="l-card-img">
        <img src="${house.img}">
        <h3>${house.price}</h3>
        <i class="fas fa-heart"></i>
    </div>

    <div class="l-card-content">

        <div class="l-card-adress">
            <p>${house.address}</p>
        </div>



    <div class="l-card-info">
        <div class="info">
            <i class="fas fa-bed"></i>
            <p>2 bed</p>
        </div>

        <div class="info">
            <i class="fas fa-shower"></i>
            <p>3 baths</p>
        </div>
        
        <div class="info"> 
            <i class="fas fa-ruler-combined"></i>
            <p>1280 sq ft</p>
        </div>
    </div>

    
    
</div>

</a>`;

    
});


const housesContent = housesHTML.join("");
localListingsGrid.innerHTML = housesContent;



//lazy load of houseCards
const houseCards = document.querySelectorAll('.l-card');
console.log(houseCards);

let options = {
    threshold: 0.4,
};

let houseCardObserver = new IntersectionObserver(function(entries, houseCardObserver){
    entries.forEach(function(entry){
        if(entry.isIntersecting){
            entry.target.style.opacity = '1';
        } else {
            entry.target.style.opacity = '0';
        }
    })
}, options)


houseCards.forEach(function(houseCard){
    houseCardObserver.observe(houseCard);
});


//select a house
houseCards.forEach(function(houseCard){
    houseCard.addEventListener('click', function(){
        //img
        //address
        //price
        const houseImg = houseCard.children[0].children[0].src;
        const houseAddress = houseCard.children[1].children[0].children[0].textContent;
        const housePrice = houseCard.children[0].children[1].textContent;
    
        localStorage.setItem('houseImg', houseImg);
        localStorage.setItem('houseAddress', houseAddress);
        localStorage.setItem('housePrice', housePrice);

        let similarHomesArray = [];

        for(let i = 0; i < 4; i++){
            const randomNumber = Math.floor(Math.random() * houseCards.length);
            console.log(randomNumber);//generate random number

            similarHomesArray.push(randomNumber);//add random numbers to array
            
        }

    
    
        localStorage.setItem("similarHomes",  JSON.stringify(similarHomesArray));//store array into localStorage as a string
        

        
    })
});



window.addEventListener('scroll', function(){
    
    const nav =  document.querySelector('.nav');
    const navHeight = nav.getBoundingClientRect().height;
    
    if(pageYOffset > navHeight){
        nav.classList.add('nav-fixed');
    } else {
        nav.classList.remove('nav-fixed');
    }

})


const menuIcon = document.querySelector('.drop-menu');


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




const searchFilter = document.querySelector('#search-filter');

searchFilter.addEventListener('keyup', function(){
    const searchFilterInput = searchFilter.value.toUpperCase();
    const towns = document.querySelectorAll('.towns-list li');
    
   
   
   
    for(let i = 0; i < towns.length; i++){
       
        let eachTown = towns[i].children[0].textContent;
        //console.log(eachTown);
       
        if(eachTown.toUpperCase().indexOf(searchFilterInput) > -1){
            towns[i].style.display = 'block';
            console.log(eachTown.toUpperCase().indexOf(searchFilterInput));//if there is a match.. what index it occurs at

        } else {
            towns[i].style.display = 'none';
        }
    }


    //make sure no results show if nothing is typed in
    if(searchFilterInput === ''){
        towns.forEach(function(town){
            town.style.display = 'none';
        })
    }


    const townLinks = document.querySelectorAll('.towns-list li a');
    townLinks.forEach(function(link){
        link.addEventListener('click', function(){
            const selectedTown = link.textContent;
            localStorage.setItem('selectedTown', selectedTown);

            
        })
    })

})


