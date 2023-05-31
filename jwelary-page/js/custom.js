//header-sticky-js     
$(window).scroll(function(){
    if ($(window).scrollTop() >= 200) {
        $('header').addClass('sticky');
    }
    else {
        $('header').removeClass('sticky');
    } 
    $(window).scrollTop() >= 200 ? ($(".scroll-to-target").fadeIn(500)) : ($(".scroll-to-target").fadeOut(500))
}); 

//header-nav-js
$(document).ready(function (o) {
    $(".trigger").click(function () {
        $("body").addClass("show-menu")
    }), 
    $(".popup-menu .close-btn").click(function () {
        $("body").removeClass("show-menu")
    }), $(".navbar-fostrap").click(function () {
        $(".header_navigation").addClass("visible");
    }),
    $(".close").click(function () {
        $(".header_navigation").removeClass("visible")
    })
    });

    $(document).ready(function(o) {
        jQuery,

        $("li.menu-item-has-children").on("click", "span.arrow", function(e) {
            e.preventDefault();
            e.stopPropagation();
            $(this).toggleClass("open")
            $(this).next("ul").slideToggle()
        }),
        $(".menu-item-has-children > a:first-child").after('<span class="arrow"><i class="fas fa-caret-down"></i></span>')
    });

// banner js
    $('.banner-sld-in').slick({
      infinite: true,
      autoplay: true,
      // fade: true,
      // cssEase: 'linear'
    });

// banner js
    $('.testominial-sld').slick({
      infinite: false,
      // autoplay: true,
      arrows: false,
      dots: true
    });



// animation
AOS.init({
  duration: 900,
});


// cursor js
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})
// cursor js end


// back to top button
var btn = $('.back-to-top-btn');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});



//  product detail slider
$('.prod-img-sld').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.prod-thumb-sld'
});
$('.prod-thumb-sld').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.prod-img-sld',
  dots: false,
  centerMode: true,
  focusOnSelect: true
});

// quantity
$('.add').click(function () {
    $(this).prev().val(+$(this).prev().val() + 1);
});
$('.sub').click(function () {
    if ($(this).next().val() > 1) {
    if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
    }
});