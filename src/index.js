import './style.css';

    const img = document.getElementById("bigBut"); //Function for changing the img when the button is clicked
    function toggleImage() {
        console.log("Clicked");
    
        if (img.src.includes("/assets/menu.png")) {
            img.src = "/assets/testingIMG.png";
        } else {
            img.src = "/assets/menu.png";
        }
    }
    img.addEventListener("click", toggleImage);

document.addEventListener('DOMContentLoaded', function() {

        //assigning values
        const menuToggleDesserts = document.getElementById('menuToggleDesserts')
        const menuToggleDrinks = document.getElementById('menuToggleDrinks')
        const contentTab = document.querySelector('.content')
        const mainContainer = document.getElementById('mainContainer');
        const menuButton = document.getElementById('bigBut');
        const aboutButton = document.getElementById('aboutButton');

    //Menu content management
 
    menuButton.addEventListener('click', function(){
        contentTab.style.backgroundColor = 'rgba(128, 128, 128, 0.2)';
        contentTab.style.backdropFilter = 'blur(5px)';
        contentTab.innerHTML = `
        <div id="menuTogglediv"><img class="menuToggle" id="menuToggleDrinks" src="/assets/DRINKS.png">  <img class="menuToggle" id="menuToggleDesserts" src="/assets/DESSERT.png"> </div>
        <div id="innerContent">
            <img class="food" src="/assets/Desserts/кошачья мята (1).png">
            <img class="food" src="/assets/Desserts/MILK.png">
            <img class="food" src="/assets/Desserts/KITTENS.png">
            <img class="food" src="/assets/Desserts/клубок.png">
            <img class="food" src="/assets/Desserts/ТОЛСТЫЙ КОТИК.png">
            <img class="food" src="/assets/Desserts/JELLY RUSH.png">
        </div>
        `;
        console.log('Menu content was added');
    });
    
    // About content management 
    aboutButton.addEventListener('click', function(){
        contentTab.style.backgroundColor = 'rgba(128, 128, 128, 0.2)';
        contentTab.style.backdropFilter = 'blur(5px)';
        contentTab.innerHTML = `
        <div id="aboutContainer">

                    <h1>ABOUT US:</h1>
                    <p>Welcome to the world of soft paws and delicious Desserts! <br> Here you can enjoy delicious food and play with our fluffy friends. <br> We are waiting for you! </p>

                    <p>Our location: Italy, Rome, <br> Via Del Corso St, 13</p>
                    <div id="contactUs">
                        <div id="contactInfo">
                        <h2>CONTACT US:</h2>
                            <ul>
                             <li> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADK0lEQVR4nO2ZO09UQRTHfwUqRB67lksrgrEQBTsfsZOYqHwCQlS+gApS+2iNhFKDX0AxsZLFZ6f2Itio2AoKCBWuOcn/JhMDu3Mfu3NN9p9McrP3nHPn7Jz3QBNN5AK9wAQwDywAG0Alo2WyTGYZGAcO1UOBQeBFhpv2XfPAQBYK7AGmgT8S/AN4AFzQ6ewnO5gsk3kReKhvVfTtKaAlqeAi8FLCfgO3gE4ah07gNrDpnE4hyUlEpvRdphUKR4Ev2ssbYG8c5mkxfgNKhEcJWNae7vsyDcouzZyOkR8cl5lt67kmIpMyn8gb7mhvFqKroteJTo107Ajn5ZNmRkM7vO8CVrTHnmqCJkRk4S8Elp0cYv65E2b0/kY1QWURWSzPqyLDej9XTdCiiNKUB5Z/RoGnwCeVHht6ntU7o9kJQ1LGlDhXw/xN3q5YE1FHAgXagEngp0fpsQrcBFoTfKdDMmyvuyL6UJI4/8Hhfw5cccoYW336bc6he58wT1Vq7TOJIiWZQnTcJz14TjlmnCTpVrJWpM05iVcxayHzk9fifRfTzCpZKzIp+oUkBZ2UiU7GQn8QRYqOY/uY02444wSAYghFRh3HTosof42EUGRWtJdJj6uS9TiEIpFtW4hNiz6fJFcvRdZF2056tEvW+v+uSKdk/fKkb5pWNWe3siMtxkI6+6hPOe2J+ZDht6gkZvSnSY6zTkIshC5RFmNkZRfGs+TT8dVbkVaV4hUVgHGUOQC8zUvR+G8Zv6TaycecPuepjI9Q0r8a8ZcViQ4rz7Trecxx7Ogk6tJYraVodVtViq96trp2dbCvXq3uYgbDh4LC6BP1KetaC/ptJGHvEmv4EHoc5INhn/ZhPPCAzgePtMdreR6Z1oL3yBQnqtglS95wN05XOqBrhU3f8X2DMAhs6Vqh35dpSprb+LKb8Oh25sL34jC2OCZmY/4ThEM/8NVJtLEvRQuOMpu6ZDFnaxS65BNbTruQOP+06M5uW8JWdD9xSQODLNrcCCarT3lixolO2zKnxNfTLo4AzzxKj6xXuV4Bp0d9w5xTfmS1aZP1UaH1OnCwHgo00QTx8Bf0wax6bwlEYQAAAABJRU5ErkJggg=="> Instagram</li>
                             <li> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADZ0lEQVR4nO2ZCYhNYRTHf4YxM5axxxjL2BITyVYjIlmyK00aWcpSEiZSIqQpKWRLZAmRElmSdZItCQ0hg4ihGWMn21jH6KszdXrN/ea+efe+9+j96tV77/7v+c537/ede865ECNGjBj/A9WAk0CZy88fYLjHPkxT9i8CCVU1lAq8D2Iyz4GGHk1iKPBL7N4HGoRqcJIY+wi0dtDEARdEty/UAYF04IPYewO0xyMOiNFL4nRFtAE+iW58CGOlAM/ETgmQgYc0Bl6I8WyLbqZozNVsUYVxagHX1J7LwgdGyQDf5NY7BYgTojsjv91SHTiq9tsCfGSnDHIDiHfQNAfeiW5GELY3qklsx2eSgacy2DKLLks0X1xu1HlqEqeAGoSBvkCphMZeFt1+ceyyLBsnRgC/RXsXqEcYWScD3wOSHDT1gcJK1nsPuWtGUwy0IswkyNUzDqyx6IZI9PkOdAk4lqYi4VegNxGiO/BTltkAi26bOHsTqKn22h353yyrMUSY5eJMAVDXQVMbeCS6HIl2uWpzzyYKiAfyXITMfipAnFaTWEsU0UlSCePYSItudUCCebySaBYR5qvI08hBk6gCRIGkI1FHHHBenDxs0XUDfkgkM2l6VJImqX5ZJcneUtEUelFj+MV0lf22dNCY9OOq6HYRxRwSJ3Mt2W874LPoxhGlNAFeiZOmPnFirmheA02JUvao7Ndc/Yowd+usiwARMaYGPC+uWJ4XurkxmShisORfxrEHQJF8X2g5Z4qLABFWOqvOx1ugAzBIZb9dLecelPPMUgumPPacFFU5mpq+jzq2Wf6/pbLfipobL0U3hwiRpJ4L5upPCDhuUpGHcnyFxc5oVZt0JAKpyRG1sZ32QobUHaWSCTuxW+zkWZobvrBBTWJHJdqVonsM1HHQmHq9fIkuIUxkq0mcs6z/cszx26LfZNENlCVqapee+IzufORLo8EN6RIMjKPDXNzpfEn/favVQ+l8LJJziyyd+0RVu6zCB1JVi6ekip2POGmGGxt7XTY3+uMhyWqNG+NjQ7DVVmW/mRZdjmieWJobQRHY+TCZa6jMUu8/mllql+ui2+rBmGxRk1jvw6u9Yy6bGyNCGXCxj50P3bl38ym2NDesZMp+KH+VYJptXjMxiImUSQUaI0aMGPz7/AX/sjP1YPg5SgAAAABJRU5ErkJggg=="> Twitter / X </li>
                             <li> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEJ0lEQVR4nO2ZW4hVVRzGf95GULN0VFAnrcYgTGUgfOlF0TRHMZ3JlHySvKD44Is6+pAk3kYQDDQiesrwjoaOUTBQiaSYaIqIir6Ygngb71fGmfjDt2GxOfu+55zzMB8sOJz9X9/a31lr/W8HOtGJskcfoBZoBJqAS0AL8ErDPl8EDgObgCmaUxboopffB7wA2hOO58AeiTKukmAWcM55qVbgb2A9UA+MBPoBPTTs84d6tgE4rjne/LNAXTEFjACanRe4BqwAhqTgGgqsBP5z+H4H3qODMRd4pAVvAQv0a2dFBbAIuCPuh8AcOgBddGS8X22Hjkre6A/sdNZZm7eI70T8EviKjscieTpbc1tepN5OPAE+pXioBZ7mtTNznZ3IQ0S1XK3xfgl8AUwGPgIGBojxdmZ2Fu/kXewsx8nu0hqfZwoaNQHHzJ49SOvNmp2LnRZjgRvOi94EftOF3qlA+qdzhGoCeDwHYHMTBzvPxab1Th8Aj8VzFPg4xPbfCCGVjmuekcRLeRHb4kQaGMdpcewCukfYRwkxLJbNmbjpTK0TsdMGu8kOR+8CzwcA44FPNK7GEFIBXJddLMezT8aWOqTFTyEcq0MSzJoI3lWy2x31Am8oI21NmTt5uKIFx/i+n6PvXynBbPaN6gjet4HXwDOgV5xjZYukRYUTe7r5np3Ss6UZ+E+Kw45vIBplZNE8LQY5Hs8v8LV2I0tBtUn8G8OMmmRkNUNaVIvDLrCLKn1vcSULZonnUJjRZRlZAZQlI2jXPfHHlXaVu1kwKg7PPRlZOl2uQgaIxwJkIF7KyM5zHMxUU8EdDyKEtBaY442xMdbsKR5z4YHwMs24gXB2SAIYJCRsVCb0ioFokdFbCYX8opzMHW/6bLsVsOmnJoVx3I65Zn/Z3w0zuiSjUQmF7CU9JojjWEz70bK/EGZ0REZ1RRSyRBw/xrSvl701+gKxIU6wKSDEsuUG37CCyEVlAZsG1SPGsTzmmptlvy7MaJqMTpTgsk9PmKKEZsC9Va21qXkWhTFKa9zxQ4SQuwXm2BgcY70qvduTqKTRsD9jvtWRAXF9kjs5ySn2/S60lEL6AvfFYZ4uElZGnk94AYshpEHzrSyOjc+cXRleBkKqnGBtNVOqdtAfQNcSCukK/OV06hPjHadBZ9taKiGrndNhpW4qzJS7a1MELraQ+aoq27K0TD2s1QsY4bwiClkoATbnG3LCt46Yxog0P6uQHqrLPRFbyBnLHPJTeuG8hbyrDk671sptJ/z43AlKz7RTg3MQYj20rU4zuyVjAyQWhjvdFk/QdmCciqckQqy0/d7XeWwChlFETAX+8WWw1rz4NULIbbVUr/nmGpdxlgy2Ez87MSdJGv9Y/79YQ7tsYE2BicDXwMECf8q8r2N1QP9gTUjQrelEJygR/gf1aciEOXd4dAAAAABJRU5ErkJggg=="> Facebook</li>
                            </ul>
                        </div>
                    </div>
                    <footer>Icons by: <a style="text-decoration: none; color: rgba(0, 0, 0, 0.623); " href="https://icons8.com/">icons8.com</a></footer>
            </div>
        `;
        console.log('About content was added');
    });


contentTab.addEventListener('click', function(event) {
    if (event.target.id === 'menuToggleDrinks') { 
        console.log('Drinks are toggled');
        const menuToggleDrinks = document.getElementById('menuToggleDrinks');
        menuToggleDrinks.addEventListener('click', function() {
            console.log('Drinks are toggled');
            contentTab.innerHTML = `
            <div id="menuTogglediv"><img class="menuToggle" id="menuToggleDrinks" src="/assets/DRINKS.png">  <img class="menuToggle" id="menuToggleDesserts" src="/assets/DESSERT.png"> </div>
            <div id="innerContent">
                <img class="food" src="/assets/Drinks/bitteresso.png">
                <img class="food" src="/assets/Drinks/candy.png">
                <img class="food" src="/assets/Drinks/frozen cat.png">
                <img class="food" src="/assets/Drinks/shake.png">
                <img class="food" src="/assets/Drinks/царапки.png">
                <img class="food" src="/assets/Drinks/oreo.png">
            </div>
            `;
            img.removeEventListener("click", toggleImage); // Remove the event listener
            img.addEventListener("click", toggleImage); // Reattach the event listener
        });
    }
});

contentTab.addEventListener('click', function(event) {
    if (event.target.id === 'menuToggleDesserts') { 
        const menuToggleDrinks = document.getElementById('menuToggleDesserts');
        menuToggleDrinks.addEventListener('click', function() {
            console.log('Desserts are toggled');
            contentTab.innerHTML = `
            <div id="menuTogglediv"><img class="menuToggle" id="menuToggleDrinks" src="/assets/DRINKS.png">  <img class="menuToggle" id="menuToggleDesserts" src="/assets/DESSERT.png"> </div>
            <div id="innerContent">
                <img class="food" src="/assets/Desserts/кошачья мята (1).png">
                <img class="food" src="/assets/Desserts/MILK.png">
                <img class="food" src="/assets/Desserts/KITTENS.png">
                <img class="food" src="/assets/Desserts/клубок.png">
                <img class="food" src="/assets/Desserts/ТОЛСТЫЙ КОТИК.png">
                <img class="food" src="/assets/Desserts/JELLY RUSH.png">
            </div>
            `;
            img.removeEventListener("click", toggleImage); // Remove the event listener
            img.addEventListener("click", toggleImage); // Reattach the event listener
        });
    }
});

});
