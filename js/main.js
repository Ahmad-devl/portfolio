(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });
    
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Vendor carousel
    $('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 45,
        dots: false,
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:2
            },
            576:{
                items:4
            },
            768:{
                items:6
            },
            992:{
                items:8
            }
        }
    });
    
})(jQuery);


// Initialize counter values and update them in HTML
let happyClients = 1;
let readyProjects = 1;
let winningAwards = 1;

// Specify the maximum quantity
const maxHappyClients = 300;
const maxReadyProjects = 100;
const maxWinningAwards = 10;

updateCounters();

// Function to update counters in HTML
function updateCounters() {
    document.getElementById('happy-clients').textContent = happyClients + "+";
    document.getElementById('ready-projects').textContent = readyProjects + "+";
    document.getElementById('winning-awards').textContent = winningAwards + "+";
}

// Function to increment counters every 100 milliseconds
function incrementCounters() {
    if (happyClients < maxHappyClients) {
        happyClients += Math.floor(Math.random() * 5);
        if (happyClients > maxHappyClients) {
            happyClients = maxHappyClients;
        }
    }
    if (readyProjects < maxReadyProjects) {
        readyProjects += Math.floor(Math.random() * 3);
        if (readyProjects > maxReadyProjects) {
            readyProjects = maxReadyProjects;
        }
    }
    if (winningAwards < maxWinningAwards) {
        winningAwards += Math.floor(Math.random() * 2);
        if (winningAwards > maxWinningAwards) {
            winningAwards = maxWinningAwards;
        }
    }
    updateCounters();
}

// Initial delay to ensure faster start
setTimeout(function() {
    setInterval(incrementCounters, 100); // Update counters every 100 milliseconds
}, 0);



function mapLocate() {
    location.href = "https://maps.app.goo.gl/zFL81iatxD8ZpJAz7";
  }


  document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('form').addEventListener('submit', function () {
        this.reset();
    });
});
