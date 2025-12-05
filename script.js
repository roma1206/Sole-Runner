let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick =() =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let slides = document.querySelectorAll('.slide-container');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

document.querySelectorAll('.featured-image-1').forEach(image_1 =>{
    image_1.addEventListener('click', () =>{
        var src = image_1.getAttribute('src');
        document.querySelector('.big-image-1').src = src;
    });
});

document.querySelectorAll('.featured-image-2').forEach(image_2 =>{
    image_2.addEventListener('click', () =>{
        var src = image_2.getAttribute('src');
        document.querySelector('.big-image-2').src = src;
    });
});

document.querySelectorAll('.featured-image-3').forEach(image_3 =>{
    image_3.addEventListener('click', () =>{
        var src = image_3.getAttribute('src');
        document.querySelector('.big-image-3').src = src;
    });
});
document.querySelectorAll('.featured-image-4').forEach(image_4 =>{
    image_4.addEventListener('click', () =>{
        var src = image_4.getAttribute('src');
        document.querySelector('.big-image-4').src = src;
    });
});
document.querySelectorAll('.featured-image-5').forEach(image_5 =>{
    image_5.addEventListener('click', () =>{
        var src = image_5.getAttribute('src');
        document.querySelector('.big-image-5').src = src;
    });
});
document.querySelectorAll('.featured-image-6').forEach(image_6 =>{
    image_6.addEventListener('click', () =>{
        var src = image_6.getAttribute('src');
        document.querySelector('.big-image-6').src = src;
    });
});

document.querySelectorAll('.featured-image-7').forEach(image_7 =>{
    image_7.addEventListener('click', () =>{
        var src = image_7.getAttribute('src');
        document.querySelector('.big-image-7').src = src;
    });
});

document.querySelectorAll('.featured-image-8').forEach(image_8 =>{
    image_8.addEventListener('click', () =>{
        var src = image_8.getAttribute('src');
        document.querySelector('.big-image-8').src = src;
    });
});
document.querySelectorAll('.featured-image-9').forEach(image_9 =>{
    image_9.addEventListener('click', () =>{
        var src = image_9.getAttribute('src');
        document.querySelector('.big-image-9').src = src;
    });
});
document.querySelectorAll('.featured-image-10').forEach(image_10 =>{
    image_10.addEventListener('click', () =>{
        var src = image_10.getAttribute('src');
        document.querySelector('.big-image-10').src = src;
    });
});
document.querySelectorAll('.featured-image-11').forEach(image_11 =>{
    image_11.addEventListener('click', () =>{
        var src = image_11.getAttribute('src');
        document.querySelector('.big-image-11').src = src;
    });
});
document.querySelectorAll('.featured-image-12').forEach(image_12 =>{
    image_12.addEventListener('click', () =>{
        var src = image_12.getAttribute('src');
        document.querySelector('.big-image-12').src = src;
    });
});
document.querySelectorAll('.featured-image-13').forEach(image_13 =>{
    image_13.addEventListener('click', () =>{
        var src = image_13.getAttribute('src');
        document.querySelector('.big-image-13').src = src;
    });
});
document.querySelectorAll('.featured-image-14').forEach(image_14 =>{
    image_14.addEventListener('click', () =>{
        var src = image_14.getAttribute('src');
        document.querySelector('.big-image-14').src = src;
    });
});
document.querySelectorAll('.featured-image-15').forEach(image_15 =>{
    image_15.addEventListener('click', () =>{
        var src = image_15.getAttribute('src');
        document.querySelector('.big-image-15').src = src;
    });
});
document.querySelectorAll('.featured-image-16').forEach(image_16 =>{
    image_16.addEventListener('click', () =>{
        var src = image_16.getAttribute('src');
        document.querySelector('.big-image-16').src = src;
    });
});

document.querySelectorAll('.featured-image-17').forEach(image_17 =>{
    image_17.addEventListener('click', () =>{
        var src = image_17.getAttribute('src');
        document.querySelector('.big-image-17').src = src;
    });
});

document.querySelectorAll('.featured-image-18').forEach(image_18 =>{
    image_18.addEventListener('click', () =>{
        var src = image_18.getAttribute('src');
        document.querySelector('.big-image-18').src = src;
    });
});
document.querySelectorAll('.featured-image-19').forEach(image_19 =>{
    image_19.addEventListener('click', () =>{
        var src = image_19.getAttribute('src');
        document.querySelector('.big-image-19').src = src;
    });
});
document.querySelectorAll('.featured-image-20').forEach(image_20 =>{
    image_20.addEventListener('click', () =>{
        var src = image_20.getAttribute('src');
        document.querySelector('.big-image-20').src = src;
    });
});
document.querySelectorAll('.featured-image-21').forEach(image_21 =>{
    image_21.addEventListener('click', () =>{
        var src = image_21.getAttribute('src');
        document.querySelector('.big-image-21').src = src;
    });
});
document.querySelectorAll('.featured-image-22').forEach(image_22 =>{
    image_22.addEventListener('click', () =>{
        var src = image_22.getAttribute('src');
        document.querySelector('.big-image-22').src = src;
    });
});
document.querySelectorAll('.featured-image-23').forEach(image_23 =>{
    image_23.addEventListener('click', () =>{
        var src = image_23.getAttribute('src');
        document.querySelector('.big-image-23').src = src;
    });
});
document.querySelectorAll('.featured-image-24').forEach(image_24 =>{
    image_24.addEventListener('click', () =>{
        var src = image_24.getAttribute('src');
        document.querySelector('.big-image-24').src = src;
    });
});
document.querySelectorAll('.featured-image-25').forEach(image_25 =>{
    image_25.addEventListener('click', () =>{
        var src = image_25.getAttribute('src');
        document.querySelector('.big-image-25').src = src;
    });
});
document.querySelectorAll('.featured-image-26').forEach(image_26 =>{
    image_26.addEventListener('click', () =>{
        var src = image_26.getAttribute('src');
        document.querySelector('.big-image-26').src = src;
    });
});

document.querySelectorAll('.featured-image-27').forEach(image_27 =>{
    image_27.addEventListener('click', () =>{
        var src = image_27.getAttribute('src');
        document.querySelector('.big-image-27').src = src;
    });
});

document.querySelectorAll('.featured-image-28').forEach(image_28 =>{
    image_28.addEventListener('click', () =>{
        var src = image_28.getAttribute('src');
        document.querySelector('.big-image-28').src = src;
    });
});
document.querySelectorAll('.featured-image-29').forEach(image_29 =>{
    image_29.addEventListener('click', () =>{
        var src = image_29.getAttribute('src');
        document.querySelector('.big-image-29').src = src;
    });
});
document.querySelectorAll('.featured-image-30').forEach(image_30 =>{
    image_30.addEventListener('click', () =>{
        var src = image_30.getAttribute('src');
        document.querySelector('.big-image-30').src = src;
    });
});
document.querySelectorAll('.featured-image-31').forEach(image_31 =>{
    image_31.addEventListener('click', () =>{
        var src = image_31.getAttribute('src');
        document.querySelector('.big-image-31').src = src;
    });
});
document.querySelectorAll('.featured-image-32').forEach(image_32 =>{
    image_32.addEventListener('click', () =>{
        var src = image_32.getAttribute('src');
        document.querySelector('.big-image-32').src = src;
    });
});
document.querySelectorAll('.featured-image-33').forEach(image_33 =>{
    image_33.addEventListener('click', () =>{
        var src = image_33.getAttribute('src');
        document.querySelector('.big-image-33').src = src;
    });
});
document.querySelectorAll('.featured-image-34').forEach(image_34 =>{
    image_34.addEventListener('click', () =>{
        var src = image_34.getAttribute('src');
        document.querySelector('.big-image-34').src = src;
    });
});
document.querySelectorAll('.featured-image-35').forEach(image_35 =>{
    image_35.addEventListener('click', () =>{
        var src = image_35.getAttribute('src');
        document.querySelector('.big-image-35').src = src;
    });
});
document.querySelectorAll('.featured-image-36').forEach(image_36 =>{
    image_36.addEventListener('click', () =>{
        var src = image_36.getAttribute('src');
        document.querySelector('.big-image-36').src = src;
    });
});