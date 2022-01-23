const localListingsGrid = document.querySelector('.local-listings-grid');

fetch('houseInfo.json')
    .then(res => res.json())
    .then(data => {
        const houses = data;
        let housesContent = houses.map(house => `    
        <a href="index4.html" class="l-card">
        <div class="l-card-img">
            <img src="${house.img}">
            <h3>${house.price}</h3>
            <i class="fas fa-heart"></i>
        </div>
    
        <div class="l-card-content">
    
            <div class="l-card-adress">
                <p>${house.address}</p>
            </div>
    
            <p class="mobile-price">${house.price}</p>
    
    
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
    
    </a>`).join('');
    
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
        selectHouse(houseCards);
    
})



function selectHouse(houseCards){
    houseCards.forEach(function(houseCard){
        houseCard.addEventListener('click', function(){
            //link to other page, set houseAddress to LS for next page to receive
            const houseAddress = houseCard.children[1].children[0].children[0].textContent;
            localStorage.setItem('houseAddress', houseAddress);

        })
    });
}






//make nav fixed
window.addEventListener('scroll', function(){
    
    const nav =  document.querySelector('.nav');
    const navHeight = nav.getBoundingClientRect().height;
    
    if(pageYOffset > navHeight){
        nav.classList.add('nav-fixed');
    } else {
        nav.classList.remove('nav-fixed');
    }

});



//view menu on mobile
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









