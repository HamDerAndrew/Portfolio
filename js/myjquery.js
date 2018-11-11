// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
    $(".introload").delay(2500).fadeOut(400);
    $(".hideit").show(); 
    $(".iconscontainer").hide();

$(".arrowLink").delay(4000).fadeIn(1000);

  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds 
      // it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

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

var cIcons3 = document.getElementById("myCv");
    
cIcons3.addEventListener('mouseenter', function() {
    var unitlessValue = anime({
        targets: '#socialIcon3 .cIconCircle3',
        duration: 3000,
        rotate: '90'
    });
});

cIcons3.addEventListener('mouseleave', function() {
    var unitlessValue = anime({
        targets: '#socialIcon3 .cIconCircle3',
        duration: 3000,
        rotate: '-90'
    });
});
// Social ocon animations end -----------


var loadtimes = 0;
var theInfo = document.getElementById('toggleInfo');
theInfo.addEventListener("click", function() {
    $(".iconscontainer").fadeIn();

    var svgAttributes = anime({
        targets: '#uispinning .cls-2',
        rotate: 360,
        easing: 'easeInOutCubic',
        duration: 1100,
        loop: 8
    });
    
    var svgAttributes = anime({
        targets: '#uispinning .cls-3',
        rotate: -360,
        easing: 'linear',
        duration: 2100,
        loop: 4
    });

    var alternate = anime({
        targets: '#gui, #gui2',
        translateY: 530,
        duration: 1000,
        easing: 'linear',
        direction: 'alternate',
        loop: 9
      });

      function hideSquare() {
        document.getElementById('gui').style.opacity="0";
        document.getElementById('gui2').style.opacity="0";
      }
      setTimeout(hideSquare, 9500);
      
      loadtimes += 1;

      if(loadtimes >= 2) {
        location.reload();
      }

    var instance = new TypeIt('#myInfo', {
        cursor: false,
        speed: 15,
        autoStart: false,
        })
        .type("Low on workexperience, but high on the will to learn and push myself even further within web- and softwaredevelopment.")
        .pause(500)
        .break()
        .break()
        .type("I love working with Frontend technologies like <strong>React</strong>, <strong>Bootstrap</strong>, and more. I do, however, find backend development with <strong>PHP</strong> or <strong>Python</strong> very interesting aswell.")
        .pause(500)
        .break()
        .break()
        .type("I have a thing for futuristic UI design, probably because I love Sci-Fi and draw a lot of inspiration from there.");
});

});