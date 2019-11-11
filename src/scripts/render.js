function Book(book) {

    const BOOK_PROTOTYPE = document.querySelector('.book-container');
    let shopContainer = document.querySelector('.shop-container');

    let root = BOOK_PROTOTYPE.cloneNode(true);
    root.classList.remove('prototype');

    let cover = root.querySelector('.cover');
    let title = root.querySelector('.book-title');
    let artist = root.querySelector('.artist');
    let about = root.querySelector('.about');
    let year = root.querySelector('.year');
    let pages = root.querySelector('.pages');
    let measurements = root.querySelector('.measures');
    let printInfo = root.querySelector('.print-info');
    let btnBlackbox = root.querySelector('.blackbox');
    let btnDigital = root.querySelector('.gumroad');
    let usd;
    let priceDigital;
    let webGallery = book.galleryWeb;
    
    return {
        elements: {
            root,
            shopContainer,
            cover,
            title,
            artist,
            about,
            year,
            pages,
            measurements,
            printInfo,
            btnBlackbox,
            btnDigital,
            usd,
            priceDigital,
            webGallery,
        },
        
        render() {
            this.elements.cover.src = book.coverWeb;
            this.elements.cover.addEventListener('click', () => {this.loadGallery2()});
            this.elements.title.innerHTML = book.title;
            this.elements.artist.innerHTML = `by ${book.artist}`;
            this.elements.about.innerHTML = book.about;
            this.elements.year.innerHTML = book.year;
            this.elements.pages.innerHTML = book.pages;
            this.elements.measurements.innerHTML = book.measurements;
            this.elements.printInfo.innerHTML = book.printInfo;
            this.elements.btnBlackbox.innerHTML = `${book.button}  ${book.priceUSD}$`;
            if (book.digital) {
                this.elements.btnDigital.classList.remove('prototype') 
                this.elements.btnDigital.innerHTML = `DIGITAL ${book.priceDigital}$`;
            } else {
                this.elements.btnBlackbox.style.minWidth = '100%';
            };
            this.elements.shopContainer.appendChild(this.elements.root);
        },

        loadGallery() {
            let gallery = document.createElement('div');
            gallery.classList.add('gallery-bg');
            let scrollInfo = document.createElement('p');
            scrollInfo.classList.add('content-file');
            scrollInfo.innerHTML = `[secret content file] | title: ${book.title} | artist: ${book.artist} | <b><i> scroll down for additional content </i></b>;`;
            scrollInfo.setAttribute('data-aos', 'flip-up');
            scrollInfo.setAttribute('data-aos-easing', 'ease-out-cubic');
            scrollInfo.setAttribute('data-aos-duration', '300');
            let galleryContainer = document.createElement('div');
            galleryContainer.classList.add('gallery-container');
            galleryContainer.setAttribute('data-aos', 'flip-left');
            // galleryContainer.setAttribute('data-aos-easing', 'ease-out-cubic');
            galleryContainer.setAttribute('data-aos-duration', '200');
            
            for (let image of this.elements.webGallery) {
                let picture = document.createElement('img');
                picture.src = image;
                galleryContainer.appendChild(picture);
            }
            gallery.appendChild(scrollInfo);
            gallery.appendChild(galleryContainer);
            gallery.addEventListener('click', (event) => this.closeGallery(gallery, galleryContainer, event));
            this.elements.shopContainer.appendChild(gallery);
        },

        loadGallery2() {
            let bg = document.createElement('div');
            bg.classList.add('carousel-container');
            let scene = document.createElement('section');
            scene.classList.add('scene');
            let carousel = document.createElement('article');
            carousel.classList.add('carousel');

            for (let image of this.elements.webGallery) {
                let frame = document.createElement('div');
                frame.classList.add('carousel-pic');
                let picture = document.createElement('img');
                picture.src = image;
                frame.appendChild(picture);
                carousel.appendChild(frame);
            }
            scene.appendChild(carousel);
            bg.appendChild(scene);
            bg.addEventListener('click', (event) => this.closeGallery(bg, carousel, event));
            this.elements.shopContainer.appendChild(bg);
        },

        closeGallery(gallery, container, event) {
            if (event.target == gallery) {
                gallery.innerHTML = '';
                gallery.classList.toggle('prototype');
            } else if (event.target == container){
                return;
            }
        }
    };
};

export default Book
