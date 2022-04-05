if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function () {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function () {
        loaded();
    });
}

function loaded() {

    setInterval(loop, 350);

}

var x = 0;

var titleText = ["m", "mo", "moo", "moon", "moonl", "moonli", "moonlig", "moonligh", "moonlight", "moonligh", "moonlig", "moonli", "moonl", "moon", "moo",  "mo", "m"];

function loop() {

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++ % titleText.length];

}