"use strict";
const d = document;
const w = window;

d.addEventListener('DOMContentLoaded', (e) => {
    scroll('header')
})

const scroll = (name) => {
    const scrollNavigation = d.querySelector(name);

    const fnScroll = () => {
        let scrollTop = w.scrollY || d.documentElement.scrollTop;
        if (scrollTop > 0) {
            scrollNavigation.classList.add("header-active")
        } else {
            scrollNavigation.classList.remove("header-active")
        }
    }

    w.addEventListener("scroll", fnScroll)
    fnScroll();
}

const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loopStart: true,
    slidesPerGroup: 1,
    autoplay: {
        start: true,
        delay: 3500,
        duration: 500,
        disableOnInteraction: false,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});


