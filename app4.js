

const selectedHouse = document.querySelector('.selected-house');
const address = document.querySelector('.address');
const price = document.querySelector('.price');

const houseImg = localStorage.getItem('houseImg');
const houseAddress = localStorage.getItem('houseAddress');
const housePrice = localStorage.getItem('housePrice');

selectedHouse.src = houseImg;
address.textContent = houseAddress;
price.textContent = housePrice;


const houseCards = document.querySelectorAll('.l-card');
console.log(houseCards);

houseCards.forEach(function(houseCard){
    houseCard.addEventListener('click', function(){
        const houseImg = houseCard.children[0].children[0].src;
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
    console.log(index);

})

