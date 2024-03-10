export const maker = document.addEventListener('DOMContentLoaded', function() {

const contentTab1 = document.createElement('div');
const contentTab2 = document.createElement('div');
const contentTab3 = document.createElement('div');
const mainContainer = document.getElementById('mainContainer');
const homeButton = document.getElementById('homeButton');
const menuButton = document.getElementById('menuButton');
const aboutButton = document.getElementById('aboutButton');


contentTab1.classList.add('content');
contentTab1.textContent = 'Home'
homeButton.addEventListener('onclick', function(){
    mainContainer.appendChild(contentTab1);
    console.log('Home content was added');
});

contentTab2.classList.add('content');
contentTab2.textContent = 'Menu'
menuButton.addEventListener('onclick', function(){
    mainContainer.appendChild(contentTab2);
    console.log('Menu content was added');
});

contentTab3.classList.add('content');
contentTab3.textContent = 'About'


mainContainer.appendChild(contentTab1);
console.log('content was added');
});