import './style.css';

document.addEventListener('DOMContentLoaded', function() {
    const contentTab1 = document.createElement('div');
    const contentTab2 = document.createElement('div');
    const contentTab3 = document.createElement('div');
    const mainContainer = document.getElementById('mainContainer');
    const homeButton = document.getElementById('homeButton');
    const menuButton = document.getElementById('menuButton');
    const aboutButton = document.getElementById('aboutButton');
    
    // Home content management
    contentTab1.classList.add('content');
    contentTab1.innerHTML = ``;
    homeButton.addEventListener('click', function(){
        mainContainer.innerHTML = '';
        mainContainer.appendChild(contentTab1);
        console.log('Home content was added');
    });
    
    //Menu content management
    contentTab2.classList.add('content');
    contentTab2.innerHTML = `
    <h1>TODAY'S MENU</h1>
    <div id="menuContainer">
        <div class="menuItem">
            <h2>Gelatos and Sorbets</h2>
            <img class="menuItemImg" id="img1" src="/assets/Desserts/Gelato.jpg">
        </div>
        <div class="menuItem">
            <h2>Cheesecake</h2>
            <img class="menuItemImg" src="/assets/Desserts/Cheesecake.jpg">
        </div>
        <div class="menuItem">
            <h2>"Oh so French!"</h2>
            <img class="menuItemImg" src="/assets/Desserts/Oh-So-French.jpg">
        </div>
        <div class="menuItem">
            <h2>Pastries</h2>
            <img class="menuItemImg" src="/assets/Desserts/Pastries.jpg">
        </div>
        <div class="menuItem">
            <h2>Tiramisu</h2>
            <img class="menuItemImg" src="/assets/Desserts/Tiramisu.jpg">
        </div>
        <div class="menuItem">
            <h2>Dessert1</h2>
            <img class="menuItemImg" src="/assets/testingIMG.png">
        </div>
        <div class="menuItem">
            <h2>Dessert1</h2>
            <img class="menuItemImg" src="/assets/testingIMG.png">
        </div>
        <div class="menuItem">
            <h2>Dessert1</h2>
            <img class="menuItemImg" src="/assets/testingIMG.png">
        </div>
        <div class="menuItem">
            <h2>Dessert1</h2>
            <img class="menuItemImg" src="/assets/testingIMG.png">
         </div>
        <div class="menuItem">
            <h2>Dessert1</h2>
            <img class="menuItemImg" src="/assets/testingIMG.png">
        </div>
    `;

    menuButton.addEventListener('click', function(){
        mainContainer.innerHTML = '';
        mainContainer.appendChild(contentTab2);
        console.log('Menu content was added');
    });
    
    // About content management 
    contentTab3.classList.add('content');
    contentTab3.textContent = 'About';
    aboutButton.addEventListener('click', function(){
        mainContainer.innerHTML = '';
        mainContainer.appendChild(contentTab3);
        console.log('About content was added');
    });
    
    mainContainer.appendChild(contentTab1);
    console.log('Content was added initially');
});