import './style.css';
document.addEventListener('DOMContentLoaded', function() {
    const contentTab1 = document.createElement('div');
    const contentTab2 = document.createElement('div');
    const contentTab3 = document.createElement('div');
    const mainContainer = document.getElementById('mainContainer');
    const homeButton = document.getElementById('homeButton');
    const menuButton = document.getElementById('menuButton');
    const aboutButton = document.getElementById('aboutButton');
    
    //Home content management
    contentTab1.classList.add('content');
    contentTab1.textContent = 'Home';
    homeButton.addEventListener('click', function(){
        mainContainer.innerHTML = '';
        mainContainer.appendChild(contentTab1);
        console.log('Home content was added');
    });
    
    //Menu content management
    contentTab2.classList.add('content');
    contentTab2.textContent = 'Menu';
    menuButton.addEventListener('click', function(){
        mainContainer.innerHTML = '';
        mainContainer.appendChild(contentTab2);
        console.log('Menu content was added');
    });
    
    //About content management 
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