function changeImage() {
    var img = document.getElementById('myImage');
    if (img.src.match("image1.jpg")) {
        img.src = "image2.jpg";
    } else {
        img.src = "image1.jpg";
    }
}