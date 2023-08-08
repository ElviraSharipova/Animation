// первое задание

const tl1 = gsap.timeline();
tl1.from(".hero__title", { duration: 0.5, y: 200 })
    .from(".hero__btn", { duration: 0.5, y: 200 })
    .from(".hero__descr", { opacity: 0 })
    .from(".photos-wrap__im1", { duration: 0.3, opacity: 0, scale: 0 })
    .from(".photos-wrap__im2", { duration: 0.3, opacity: 0, scale: 0 })
    .from(".photos-wrap__im3", { duration: 0.3, opacity: 0, scale: 0 })


// второе задние


const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");
const close = document.querySelector(".close");

const tl2 = gsap.timeline({ paused: true });


tl2.from(".menu__top", { duration: 0.2, height: 0, opacity: 0 })
    .from(".menu__container", { duration: 0.2, y: 50, opacity: 0 })
    .from(".menu__nav", { duration: 0.2, y: 50, opacity: 0 })
    .from(".social", { duration: 0.2, y: 50, opacity: 0 })
    .from(".menu__right", { duration: 0.2, y: 50, opacity: 0 })


burger.addEventListener('click', () => {
    console.log("sos");
    menu.style.display = 'block';
    tl2.restart();
    tl2.play();
})


close.addEventListener('click', () => {
    menu.style.display = 'none';
    // tl2.resume();

})
