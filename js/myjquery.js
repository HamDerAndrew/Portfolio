// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
    $(".introload").delay(2500).fadeOut(400);
    $(".hideit").show(); 
    $(".iconscontainer").hide();

var svgAttributes = anime({
    targets: '#frontspin .fload-2',
    rotate: -360,
    easing: 'linear',
    duration: 20000,
    loop: true
});

var svgAttributes = anime({
    targets: '#frontspin .fload-3',
    rotate: 360,
    easing: 'linear',
    duration: 20000,
    loop: true
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

var lineDrawing = anime({
    targets: '#arrowDownId path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1000,
    delay: 3000,
    direction: 'alternate',
    loop: false
});

// Soical icon animations start --------
var cIcons = document.getElementById("github");
    
cIcons.addEventListener('mouseenter', function() {
    var unitlessValue = anime({
        targets: '#socialIcon .cIconCircle',
        duration: 3000,
        rotate: '90',
    });
});


cIcons.addEventListener('mouseleave', function() {
    var unitlessValue = anime({
        targets: '#socialIcon .cIconCircle',
        duration: 3000,
        rotate: '-90',
    });
});

var cIcons2 = document.getElementById("linked");
    
cIcons2.addEventListener('mouseenter', function() {
    var unitlessValue = anime({
        targets: '#socialIcon2 .cIconCircle2',
        duration: 3000,
        rotate: '90'
    });
});

cIcons2.addEventListener('mouseleave', function() {
    var unitlessValue = anime({
        targets: '#socialIcon2 .cIconCircle2',
        duration: 3000,
        rotate: '-90'
    });
});
// Social ocon animations end -----------

var clickLayer;


var theInfo = document.getElementById('toggleInfo');
theInfo.addEventListener("click", function() {
    $(".iconscontainer").fadeIn();

    var svgAttributes = anime({
        targets: '#uispinning .cls-2',
        rotate: 360,
        easing: 'easeInOutCubic',
        duration: 1000,
        loop: 8
    });
    
    var svgAttributes = anime({
        targets: '#uispinning .cls-3',
        rotate: -360,
        easing: 'linear',
        duration: 2000,
        loop: 4
    });

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

});