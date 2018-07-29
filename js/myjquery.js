// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
    $(".introload").delay(2500).fadeOut(400);
    $(".hideit").show(); 
});

var instance = new TypeIt('#printName', {
    strings: ['Name // André Larsen'],
    cursor: false,
    breakLines: false,
    speed: 30,
    startDelay: 500
    
});

var instance = new TypeIt('#printFrom', {
    strings: ['From // Denmark'],
    cursor: false,
    breakLines: false,
    speed: 30,
    startDelay: 1500
});

var instance = new TypeIt('#printCity', {
    strings: ['City // Svendborg'],
    cursor: false,
    breakLines: false,
    speed: 30,
    startDelay: 2500
});

var instance = new TypeIt('#printLoves', {
    strings: ['Loves // Technology'],
    cursor: false,
    breakLines: false,
    speed: 30,
    startDelay: 3200
});

var theInfo = document.getElementById('toggleInfo');
theInfo.addEventListener("click", function() {
    var iconOne = document.getElementById('UI-one');
    var iconTwo = document.getElementById('UI-two');
    iconOne.classList.add("iconui");
    iconTwo.classList.add("iconui");

    var instance = new TypeIt('#myInfo', {
        cursor: false,
        speed: 15,
        autoStart: false,
        })
        .type("Low on workexperience, but high on the will to learn and push myself even further within webdevelopment. Forever learning and improving to be the best version of myself.")
        .pause(500)
        .break()
        .break()
        .type("I love working with Frontend technologies like <strong>React</strong>, <strong>Bootstrap</strong>, <strong>Angular</strong> and more. I do, however, find backend development a bit more exciting.")
        .pause(500)
        .break()
        .break()
        .type("I have a thing for futuristic UI design, probably because I love Sci-Fi and draw a lot of inspiration from there.");
});





