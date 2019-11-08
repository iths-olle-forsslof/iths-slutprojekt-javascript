import '../styles/index.scss';
import 'simplebar'
import 'simplebar/dist/simplebar.css';
import Book from './render.js'
import library from './books.js';



function renderGallery(array){
    for (let title of array) {
        let book = new Book(title);
        book.render();
    }
}

renderGallery(library);
