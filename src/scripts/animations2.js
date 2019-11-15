import Zdog from 'zdog';
import anime from 'animejs';

function AnimateLogo() {

    let canvas = document.querySelector('.canvas-zdog');
    let ctx = canvas.getContext('2d');
    
    let width = window.innerWidth -20;
    width < 600 ? width = 1000 : width = width;
    let height = 600;
    canvas.setAttribute('width', width);
    canvas.setAttribute('height', height);
    let canvasWidth = canvas.width;
    let canvasHeight = canvas.height;

    window.addEventListener('resize', () => {
        width = width;
    });

    const TAU = Zdog.TAU;
    const zoom = .8;
    let isSpinning;
    let interval;

    let darkColor = 'rgb(77, 17, 82)';
    let lightColor = '#f1feff'; // light blueish
    let strokeColor = '#ff85bf'; // yellow
    let fill = 75;
    let stroke = 80;

    // Canvas
    let logo = new Zdog.Anchor({
        translate: {x: -110, y: -50}
    });

    // vvvvvvvvvvvvv P PLACEMENT CONTROLLER vvvvvvvvvvvvv

    let pAnchor = new Zdog.Anchor({
        addTo: logo,
        rotate: {z: Zdog.TAU/-16},
        translate: {x: -150, y: 20, z: 300},
    });

    // vvvvvvvvvvvvv E PLACEMENT CONTROLLER vvvvvvvvvvvvv

    let eAnchor = new Zdog.Anchor({
        addTo: logo,
        rotate: {z: Zdog.TAU/75},
        translate: {x: 0, y: 20, z: 100}
    });

    // vvvvvvvvvvvvv O PLACEMENT CONTROLLER vvvvvvvvvvvvv

    let oAnchor = new Zdog.Anchor({
        addTo: logo,
        translate: {x: 115, y: 80, z: -140},
        rotate: {z: Zdog.TAU/-20}
    });

    // vvvvvvvvvvv W CONTROLLER vvvvvvvvvvvv

    let wAnchor = new Zdog.Anchor({
        addTo: logo,
        translate: {x: 210, y: -70, z: -180},
        rotate: {z: Zdog.TAU/20},
    });

    // ------------ P CONTENT ---------------

    let pArcStroke = new Zdog.Ellipse({
        addTo: pAnchor,
        diameter: 85,
        quarters: 4,
        rotate: {z: Zdog.TAU/-7},
        translate: {x: 0, z: -80},
        stroke: 75,
        color: strokeColor,
    });

    let pArcFill = pArcStroke.copy({
        stroke: 70,
        color: darkColor,
    });
    
    let pSpineStroke = new Zdog.Shape({
        addTo: pAnchor,
        path:[
            {x: -40, y: -40},
            {x: -40, y: 110}
        ],
        stroke: stroke,
        color: strokeColor,
        translate: {x: 0, y: 0}
    });

    let pSpineFill = pSpineStroke.copy({
        color: lightColor,
        stroke: fill,
    });

    // -------------- E CONTENT ---------------

    let eSpineStroke = new Zdog.Shape({
        addTo: eAnchor,
        path:[
            {x: -40, y: -40},
            {x: -40, y: 110}
        ],
        stroke: stroke,
        color: strokeColor,
        translate: {x: 0, y: -7}
    });

    let eSpineFill = eSpineStroke.copy({
        addTo: eAnchor,
        stroke: fill,
        color: darkColor,
    });

    let eTopStroke = new Zdog.Shape({
            addTo: eAnchor,
            path: [
                {x: -40, y: -48},
                {x: 50, y: -48},
            ],
            color: strokeColor,
            stroke: stroke,
            translate: {z: -80},
    });

    let eTopFill = eTopStroke.copy({
        color: darkColor,
        stroke: fill,
    });

    let eMiddleStroke = new Zdog.Shape({
        addTo: eAnchor,
        path: [
            {x: -10, y: 30},
            {x: 20, y: 30},
        ],
        translate: {z: 80},
        color: strokeColor,
        stroke: stroke,
    });
    
    let eMiddlefill = eMiddleStroke.copy({
        addTo: eAnchor,
        color: darkColor,
        stroke: fill,
    });

    let eBottomStroke = eTopStroke.copy({
        stroke: stroke,
        color: strokeColor,
        translate: {y: 152, z: -80},
    });

    let eBottomFill = eBottomStroke.copy({
        color: darkColor,
        stroke: fill,
    });
    
    // ------------------- O CONTENT --------------------

    let oTopStroke = new Zdog.Shape({
        addTo: oAnchor,
        path: [
            {x: 0, y: -10},
            {x: 0, y: -50},
            {arc: [
                {x: 0, y: -100},
                {x: 50, y: -100},
            ]},
            {arc: [
                {x: 100, y: -100},
                {x: 100 , y: -50},
            ]},
            {x: 100, y: -10},
        ],
        closed: false,
        stroke: stroke,
        color: strokeColor,
    });

    let oTopFill = oTopStroke.copy({
        stroke: fill,
        color: lightColor,
    });

    let oBottomStroke = new Zdog.Ellipse({
        addTo: oAnchor,
        diameter: 100,
        stroke: 80,
        rotate: {z: Zdog.TAU/4},
        quarters: 2,
        color: strokeColor,
        translate: {x: 50, y: 20, z: 80},
    });

    let oBottomFill = oBottomStroke.copy({
        stroke: fill,
        color: darkColor,
    });

// ---------------------- W CONTENT ---------------------

    let wLeftStroke = new Zdog.Shape({
        addTo: wAnchor,
        path: [
            {x: 100, y: 0},
            {x: 100, y: 150}
        ],
        stroke: stroke,
        color: strokeColor,
    });

    let wLeftFill = wLeftStroke.copy({
        addTo: wLeftStroke,
        stroke: fill,
        color: darkColor,
    });

    let wMiddleStroke = new Zdog.Shape({
        addTo: wAnchor,
        path: [
            {x: 0, y: 30},
            {x: 0, y: 150},
        ],
        stroke: stroke,
        color: strokeColor,
        translate: {x: 170, z: 80},
    });

    let wMiddleFill = wMiddleStroke.copy({
        color: darkColor,
        stroke: fill,
    });

    let wRightStroke = wLeftStroke.copy({
        translate: {x: 140, z: 160},
    });

    let wRightFill = wRightStroke.copy({
        stroke: fill,
        color: darkColor,
    });

    let wBottomStroke = new Zdog.Shape({
        addTo: wAnchor,
        path: [
            {x: 0, z: -120},
            {x: 130, z: 30},
        ],
        stroke: stroke,
        color: strokeColor,
        translate: {x: 100, y: 150,},
    });

    let wBottomFill = wBottomStroke.copy({
        color: lightColor,
        stroke: fill,
    });
    
    return {
        elements: {
            canvas,
            ctx,
            width,
            height,
            canvasWidth,
            canvasHeight,
            TAU,
            zoom,
            pAnchor,
            eAnchor,
            oAnchor,
            wAnchor,
            logo,
        },
        isSpinning,
        interval,
        // tick: 0,
        // count: 150,
        // spin: true,

        // animate() {
        //     let progress = this.tick / this.count;
        //     let alpha = progress % 2;
        //     let power = 2;
        //     let tween = Zdog.easeInOut(alpha, power);
        //     this.elements.logo.rotate.x = tween * Zdog.TAU;
        //     if (this.tick  > 200){
        //         this.tick = 0;
        //         this.spin = false;
        //         } else {
        //             this.tick++;
        //         }
        //     this.elements.logo.updateGraph();
        //     this.render();
        //     if (this.spin)
        //         requestAnimationFrame(() => this.animate());
        // },

        spinX() {
            this.elements.logo.rotate.x += 0.02;
            this.elements.logo.updateGraph();
            this.render();
        },

        spinY() {
            this.elements.logo.rotate.y += 0.02;
            this.elements.logo.updateGraph();
            this.render();
        },

        spinZ() {
            this.elements.logo.rotate.z += 0.02;
            this.elements.logo.updateGraph();
            this.render();
        },

        startStop(id) {
            if(this.interval) {
                clearInterval(this.interval);
            };
            this.isSpinning = !this.isSpinning;
            if(this.isSpinning && id == 'x'){
                this.interval = setInterval( () => this.spinX(), 12);
            } else if (this.isSpinning && id == 'y'){
                this.interval = setInterval( () => this.spinY(), 12);
            } else if (this.isSpinning && id == 'z'){
                this.interval = setInterval( () => this.spinZ(), 12);
            };
        },
        
        render() {
            this.elements.ctx.clearRect(0, 0, this.elements.canvasWidth, this.elements.canvasHeight);
            this.elements.ctx.save();
            
            this.elements.ctx.translate(this.elements.canvasWidth/2, this.elements.canvasHeight/2);
            this.elements.ctx.scale(this.elements.zoom, this.elements.zoom);
            
            this.elements.ctx.lineJoin = 'round';
            this.elements.ctx.lineCap = 'round';
            
            this.elements.logo.renderGraphCanvas(this.elements.ctx);
            this.elements.ctx.restore();
        },
    };
};

let animate = new AnimateLogo;

function rotateX() {
    let count = 0;
    let btnX = document.querySelector('.spinX-btn');
    let btnY = document.querySelector('.spinY-btn');
    let btnZ = document.querySelector('.spinZ-btn');
    btnX.addEventListener('click', () => {
        animate.startStop('x');
        count++
        if (count % 2 == 1) {
            btnX.innerHTML = 'X: stop'
            btnY.innerHTML = 'Y: rotate'
            btnZ.innerHTML = 'Z: rotate'
        } else {
            btnX.innerHTML = 'X: rotate'
            btnY.innerHTML = 'Y: rotate'
            btnZ.innerHTML = 'Z: rotate'
        } 
    });
};

function rotateY() {
    let count = 0;
    let btnX = document.querySelector('.spinX-btn');
    let btnY = document.querySelector('.spinY-btn');
    let btnZ = document.querySelector('.spinZ-btn');
    btnY.addEventListener('click', () => {
        animate.startStop('y');
        count++
        if (count % 2 == 1) {
            btnX.innerHTML = 'X: rotate'
            btnY.innerHTML = 'Y: stop'
            btnZ.innerHTML = 'Z: rotate'
        } else {
            btnX.innerHTML = 'X: rotate'
            btnY.innerHTML = 'Y: rotate'
            btnZ.innerHTML = 'Z: rotate'
        } 
    });
};

function rotateZ() {
    let count = 0;
    let btnX = document.querySelector('.spinX-btn');
    let btnY = document.querySelector('.spinY-btn');
    let btnZ = document.querySelector('.spinZ-btn');
    btnZ.addEventListener('click', () => {
        animate.startStop('z');
        count++
        if (count % 2 == 1) {
            btnX.innerHTML = 'X: rotate'
            btnY.innerHTML = 'Y: rotate'
            btnZ.innerHTML = 'Z: stop'
        } else {
            btnX.innerHTML = 'X: rotate'
            btnY.innerHTML = 'Y: rotate'
            btnZ.innerHTML = 'Z: rotate'
        } 
    });
};


export {AnimateLogo, rotateX, rotateY, rotateZ};