import '../styles/index.scss';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Book from './render.js';
import library from './books.js';
// import {animateLogo, wordAnimation} from './animations.js';
// import {AnimateLogo, rotateX, rotateY, rotateZ, reset} from './animations2.js';
import {CreateLogo, AnimationControl} from './animations2.js';

AOS.init();

// function loadAnimation() {
//     let logo = new CreateLogo();
//     logo.introAnimation();
// }

function loadButtons() {
    let animate = new AnimationControl;
    animate.rotateX();
    animate.rotateY();
    animate.rotateZ();
    animate.spin();
    animate.flip();
}

function renderGallery(array) {
    for (let title of array) {
        let book = new Book(title);
        book.render();
    }
}

// let scrollPos = window.scrollY;

loadButtons();
// loadAnimation();
renderGallery(library);