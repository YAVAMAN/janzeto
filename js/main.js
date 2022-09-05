//LazyLoad
var img=document.getElementsByTagName('img');
for(var i=0;i<img.length;i++){
img[i].classList.add('lozad')
var imgAttr=img[i].getAttribute('src');
img[i].setAttribute('data-src',imgAttr);
img[i].setAttribute('src','')
}
const el = document.querySelectorAll('img');
const observer = lozad(el);
observer.observe();

//Intro Padding Top
let header = document.getElementById('header');
let headerHeight = window.getComputedStyle(header).getPropertyValue("height");
let intro = document.getElementById('intro');
let introPaddingTop = intro.style.paddingTop = headerHeight;

//Header scroll
var btnInner = document.querySelector('.header__btn-inner');
var navToggler = document.querySelector('.header__nav-toggler');
var headerDesc = document.querySelector('.header__desc');
const mediaQuery = window.matchMedia('(max-width: 576px)')

if (mediaQuery.matches) {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            btnInner.classList.add("hide");
            headerDesc.classList.add("hide");
        } else {
            btnInner.classList.remove("hide");
            headerDesc.classList.remove("hide");
        }
    });
}

//Scroll to top
(function scrollTo(to, duration = 700) {
    const
        element = document.scrollingElement || document.documentElement,
        start = element.scrollTop,
        change = to - start,
        startDate = +new Date(),
        // t = current time
        // b = start value
        // c = change in value
        // d = duration
        easeInOutQuad = function (t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        },
        animateScroll = function () {
            const currentDate = +new Date();
            const currentTime = currentDate - startDate;
            element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration));
            if (currentTime < duration) {
                requestAnimationFrame(animateScroll);
            }
            else {
                element.scrollTop = to;
            }
        };
    animateScroll();
},

document.addEventListener('DOMContentLoaded', function () {
    let btn = document.querySelector('#toTop');
    window.addEventListener('scroll', function () {
        // Если прокрутили дальше 599px, показываем кнопку
        if (pageYOffset > 500) {
            btn.classList.add('show');
            // Иначе прячем
        } else {
            btn.classList.remove('show');
        }
    });

    // При клике прокручиываем на самый верх
    btn.onclick = function (click) {
        click.preventDefault();
        scrollTo(0, 400);
    }
})
);


// Click watch
function clickWatch () {
    let phoneNums = document.querySelectorAll('a[href^="tel:"]');
    let waLinks = document.querySelectorAll('a[href^="https://api.whatsapp.com/send"]');
    let forms = document.querySelectorAll('form');
    
    for(let i = 0; i < phoneNums.length; i++) {
        phoneNums[i].setAttribute("onclick", "fbq('track', 'Lead'); gtag('event', 'send', {'event_category': 'phone','event_action': 'click'}); ym(57870007, 'reachGoal', 'phone-click'); return true;");
    }
    for(let i = 0; i < waLinks.length; i++) {
        waLinks[i].setAttribute("onclick", "fbq('track', 'Lead'); gtag('event', 'send', {'event_category': 'phone','event_action': 'click'}); ym(57870007, 'reachGoal', 'phone-click'); return true;");
    }
    for(let i = 0; i < forms.length; i++) {
        forms[i].setAttribute("onsubmit", "fbq('track', 'Lead'); gtag('event', 'send', {'event_category': 'form','event_action': 'send'}); ym(57870007, 'reachGoal', 'form-send'); return true;");
    }
}

clickWatch();

// Magnific pop up
$('.mag-pop-up').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
        enabled: true
    }
});

// Product menu scroll
$(".product__pill-btn").click(function() {
    $('html, body').animate({
        scrollTop: $("#product").offset().top
    }, 100);
});