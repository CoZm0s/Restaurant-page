import './style.css';


const img = document.getElementById("bigBut"); //Function for changing the img when the button is clicked
img.addEventListener("click", function() {
    console.log("Clicked");

    if (img.src.includes("/assets/menu.png")) {
        img.src = "/assets/testingIMG.png";
    } else {
        img.src = "/assets/menu.png";
    }
});

document.addEventListener('DOMContentLoaded', function() {

    //assigning values

    const contentTab = document.querySelector('.content')
    const mainContainer = document.getElementById('mainContainer');
    const homeButton = document.getElementById('homeButton');
    const menuButton = document.getElementById('menuButton');
    const aboutButton = document.getElementById('aboutButton');
    
    
    //Menu content management
 
    menuButton.addEventListener('click', function(){
        contentTab.innerHTML = `
        <div id="menuTogglediv"><img class="menuToggle" src="/assets/DRINKS.png">  <img class="menuToggle" src="/assets/DESSERT.png"> </div>
        <div id="innerContent">
            <img class="food" src="/assets/кошачья мята (1).png">
            <img class="food" src="/assets/MILK.png">
            <img class="food" src="/assets/KITTENS.png">
            <img class="food" src="/assets/клубок.png">
            <img class="food" src="/assets/ТОЛСТЫЙ КОТИК.png">
        </div>
        `;
        console.log('Menu content was added');
    });

    
    
    // About content management 
    aboutButton.addEventListener('click', function(){
        contentTab.innerHTML = 'About';
        console.log('About content was added');
    });
    
});