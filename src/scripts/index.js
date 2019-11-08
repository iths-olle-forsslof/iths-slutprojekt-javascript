import '../styles/index.scss';
import 'simplebar'
import 'simplebar/dist/simplebar.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Book from './render.js'
import library from './books.js';
AOS.init();



function renderGallery(array){
    for (let title of array) {
        let book = new Book(title);
        book.render();
    }
}

renderGallery(library);
