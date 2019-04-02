// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
    $(".introload").delay(2500).fadeOut(400);
    $(".hideit").show(); 
    $(".iconscontainer").hide();

$(".arrowLink").delay(2000).fadeIn(1000);

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
    strings: ['// André Larsen'],
    cursor: false,
    breakLines: false,
    speed: 70,
    startDelay: 500
    
});


// Social icon animations start --------
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
// Social icons animations end -----------


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
        easing: 'easeInOutQuad',
        direction: 'alternate',
        loop: 9
      });

      function hideSquare() {
        $(".iconscontainer").hide(300);
        $('#gui').hide(300);
        $('#gui2').hide(300);
      }
      setTimeout(hideSquare, 8900);

      loadtimes += 1;

      if(loadtimes >= 2) {
        location.reload();
      }

    var instance = new TypeIt('#myInfo', {
        cursor: false,
        speed: 15,
        autoStart: false,
        })
        .type("Jeg læser på professionsbacheloren Webudvikling på UCL Odense og søger praktikplads fra august 2019.")
        .pause(500)
        .break()
        .break()
        .type("Jeg har arbejdet bredt med webudvikling - ligefra hjemmesider og applikationer i WordPress, til native apps i Xamarin Forms.")
        .pause(500)
        .break()
        .break()
        .type("Mit ultimative mål er at kunne associere mig som en 'Full-Stack' udvikler og med det som min drivkraft er jeg klar til at tilføje værdi i din/jeres virksomhed. ");
});

});