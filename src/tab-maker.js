export const maker = document.addEventListener('DOMContentLoaded', function() {

const contentTab1 = document.createElement('div');
const contentTab2 = document.createElement('div');
const contentTab3 = document.createElement('div');
const mainContainer = document.getElementById('mainContainer');

contentTab1.classList.add('content');
contentTab2.classList.add('content');
contentTab3.classList.add('content');

mainContainer.appendChild(contentTab1);
console.log('content was added');
});