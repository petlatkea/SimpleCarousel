const container = document.querySelector("#container");

document.querySelector("#prev").addEventListener("click", scrollLeft);
document.querySelector("#next").addEventListener("click", scrollRight);

function scrollLeft() {
    container.scrollBy(300,0);
}

function scrollRight() {
    container.scrollBy(-300,0);
}