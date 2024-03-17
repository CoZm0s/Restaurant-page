const img = document.getElementById("bigBut");
img.addEventListener("click", function() {
    console.log("Clicked");

    if (img.src.includes("/assets/menu.png")) {
        img.src = "/assets/testingIMG.png";
    } else {
        img.src = "/assets/menu.png";
    }
});