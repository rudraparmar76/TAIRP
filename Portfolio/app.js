const header = document.querySelector(".navbar");

window.onscroll = function () {
    var top = window.scrollY;
    if (top >= 100) {
        header.classList.add("navbarDark");
    }
    else {
        header.classList.remove("navbarDark");
    }
}
function thankYou(){
    window.open("getform.io/thank-you");
}