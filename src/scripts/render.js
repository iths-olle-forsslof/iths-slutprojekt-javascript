function Book(array) {

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
    let webGallery = array.galleryWeb;
    
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
            this.elements.cover.src = array.coverWeb;
            this.elements.cover.addEventListener('click', () => {this.loadGallery()});
            this.elements.title.innerHTML = array.title;
            this.elements.artist.innerHTML = `by ${array.artist}`;
            this.elements.about.innerHTML = array.about;
            this.elements.year.innerHTML = array.year;
            this.elements.pages.innerHTML = array.pages;
            this.elements.measurements.innerHTML = array.measurements;
            this.elements.printInfo.innerHTML = array.printInfo;
            this.elements.btnBlackbox.innerHTML = `${array.button}  ${array.priceUSD}$`;
            if (array.digital) {
                this.elements.btnDigital.classList.remove('prototype') 
                this.elements.btnDigital.innerHTML = `DIGITAL ${array.priceDigital}$`;
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
            scrollInfo.innerHTML = `// secret content file // title: ${array.title} // artist: ${array.artist} // <b><i> scroll down for additional content </i></b> //`;
            scrollInfo.setAttribute('data-aos', 'flip-up');
            scrollInfo.setAttribute('data-aos-easing', 'ease-out-cubic');
            scrollInfo.setAttribute('data-aos-duration', '300');
            let galleryContainer = document.createElement('div');
            galleryContainer.classList.add('gallery-container');
            galleryContainer.setAttribute('data-aos', 'flip-left');
            // galleryContainer.setAttribute('data-aos-easing', 'ease-out-cubic');
            galleryContainer.setAttribute('data-aos-duration', '200');
            
            for (let image of webGallery) {
                let picture = document.createElement('img');
                picture.src = image;
                galleryContainer.appendChild(picture);
            }
            gallery.appendChild(scrollInfo);
            gallery.appendChild(galleryContainer);
            gallery.addEventListener('click', () => this.closeGallery(gallery))
            this.elements.shopContainer.appendChild(gallery);
        },

        closeGallery(el) {
            el.innerHTML = '';
            el.classList.toggle('prototype');
        }
    };
};

export default Book
