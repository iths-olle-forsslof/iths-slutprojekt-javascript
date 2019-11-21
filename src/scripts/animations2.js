import Zdog from 'zdog';
import anime from 'animejs';

function CreateLogo() {

    let canvas = document.querySelector('.canvas-zdog');
    let ctx = canvas.getContext('2d');
    
    let width = window.innerWidth -20;
    width < 600 ? width = 1000 : width = width;
    let height = window.innerHeight;
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
    let isFlipping;

    let darkColor = 'rgb(77, 17, 82)';
    let lightColor = '#f1feff'; // light blueish
    let strokeColor = '#ff85bf'; // yellow
    let fill = 75;
    let stroke = 80;

    // Canvas
    let logo = new Zdog.Anchor({
        translate: {x: 0, y: -100},
    });

    // vvvvvvvvvvvvv P PLACEMENT CONTROLLER vvvvvvvvvvvvv

    let pAnchor = new Zdog.Anchor({
        addTo: logo,
    });
    
    let pGroup = new Zdog.Group({
        addTo: pAnchor,
        rotate: {z: Zdog.TAU/-20},
        translate: {x: -248, y: 10, z: 300},
    });

    // vvvvvvvvvvvvv E PLACEMENT CONTROLLER vvvvvvvvvvvvv

    let eAnchor = new Zdog.Anchor({
        addTo: logo,
    });
    
    let eGroup = new Zdog.Group({
        addTo: eAnchor,
        rotate: {z: Zdog.TAU/30},
        translate: {x: -100, y: 20, z: 100}
    });

    // vvvvvvvvvvvvv O PLACEMENT CONTROLLER vvvvvvvvvvvvv

    let oAnchor = new Zdog.Anchor({
        addTo: logo,
    });
    
    let oGroup = new Zdog.Group({
        addTo: oAnchor,
        translate: {x: 20, y: 80, z: -140},
        rotate: pGroup.rotate,
    });

    // vvvvvvvvvvv W CONTROLLER vvvvvvvvvvvv
    let wAnchor = new Zdog.Anchor ({
        addTo: logo,
    });
    
    let wGroup = new Zdog.Group({
        addTo: wAnchor,
        translate: {x: 110, y: -60, z: -180},
        rotate: eGroup.rotate,
    });

    // ------------ P CONTENT ---------------

    let pArcStroke = new Zdog.Ellipse({
        addTo: pGroup,
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
        addTo: pGroup,
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
    let eTopStroke = new Zdog.Shape({
        addTo: eGroup,
        path: [
            {x: -40, y: -48},
            {x: 50, y: -48},
        ],
        color: strokeColor,
        stroke: stroke,
        translate: {z: -100},
    });

    let eTopFill = eTopStroke.copy({
        color: darkColor,
        stroke: fill,
    });

    let eBottomStroke = eTopStroke.copy({
        stroke: stroke,
        color: strokeColor,
        translate: {y: 152, z: -100},
    });

    let eBottomFill = eBottomStroke.copy({
        color: darkColor,
        stroke: fill,
    });
    
    let eSpineStroke = new Zdog.Shape({
        addTo: eGroup,
        path:[
            {x: -40, y: -40},
            {x: -40, y: 110}
        ],
        stroke: stroke,
        color: strokeColor,
        translate: {x: 0, y: -7}
    });

    let eSpineFill = eSpineStroke.copy({
        addTo: eGroup,
        stroke: fill,
        color: darkColor,
    });

    let eMiddleStroke = new Zdog.Shape({
        addTo: eGroup,
        path: [
            {x: -10, y: 30},
            {x: 20, y: 30},
        ],
        translate: {z: 100},
        color: strokeColor,
        stroke: stroke,
    });
    
    let eMiddlefill = eMiddleStroke.copy({
        addTo: eGroup,
        color: darkColor,
        stroke: fill,
    });

    
    // ------------------- O CONTENT --------------------

    let oTopStroke = new Zdog.Shape({
        addTo: oGroup,
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
        addTo: oGroup,
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
    let wBottomStroke = new Zdog.Shape({
        addTo: wGroup,
        path: [
            {x: 0, z: -120},
            {x: 140, z: 30},
        ],
        stroke: stroke,
        color: strokeColor,
        translate: {x: 100, y: 150, z: -20},
    });

    let wBottomFill = wBottomStroke.copy({
        color: lightColor,
        stroke: fill,
});
    let wLeftStroke = new Zdog.Shape({
        addTo: wGroup,
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
        addTo: wGroup,
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
            pGroup,
            eGroup,
            oGroup,
            wGroup,
            logo,
        },
        isSpinning,
        isFlipping,
        running: undefined,
        t: 0,
        c: 150,

        introAnimation () {
            if( this.t < 150 ) {
                let progress = this.t / this.c;
                let tween = Zdog.easeInOut( progress % 1, 2 );
                this.elements.pAnchor.rotate.y = tween * Zdog.TAU;
                this.elements.eAnchor.rotate.x = tween * Zdog.TAU;
                this.elements.oAnchor.rotate.y = tween * Zdog.TAU;
                this.elements.wAnchor.rotate.x = tween * Zdog.TAU;
                this.elements.logo.rotate.y = tween * Zdog.TAU;
                this.t++;
                this.elements.pAnchor.updateGraph();
                this.elements.eAnchor.updateGraph();
                this.elements.oAnchor.updateGraph();
                this.elements.wAnchor.updateGraph();
                this.elements.logo.updateGraph();
                this.running = requestAnimationFrame( this.introAnimation.bind(this) )
                this.render();
            } else {
                this.stopAnimation()
            }
        },

        show() {
            this.elements.logo.updateGraph();
            this.render();
        },
        
        startAnimation (id, num, num2) {
            if (id == 'x') {
                this.spinX();
            } else if (id == 'y') {
                this.spinY();
            } else if (id == 'z') {
                this.spinZ();
            } else if (id == 'spin') {
                if(num % 2 == 0) {
                    this.isSpinning = true;
                    this.spin();
                } else {
                    this.isSpinning = false;
                    this.spin();
                }
            } else if (id == 'flip') {
                if(num2 % 2 == 0) {
                    this.isFlipping = true;
                    this.flip();
                } else {
                    this.isFlipping = false;
                    this.flip();
                }
            }
            console.log(num +' num1; ' +num2 + ' num2;');
            
        },
        
        stopAnimation () {
            cancelAnimationFrame(this.running);
        },

        spinX() {
            this.elements.logo.rotate.x += 0.02;
            this.elements.logo.updateGraph();
            this.render();
            this.running = requestAnimationFrame(this.spinX.bind(this))
        },

        spinY() {
            this.elements.logo.rotate.y += 0.02;
            this.elements.logo.updateGraph();
            this.render();
            this.running = requestAnimationFrame(this.spinY.bind(this))
        },

        spinZ() {
            this.elements.logo.rotate.z += 0.02;
            this.elements.logo.updateGraph();
            this.render();
            this.running = requestAnimationFrame(this.spinZ.bind(this));
        },

        spin() {
            if (this.isSpinning) {
                this.elements.logo.rotate.y += 0.01;
                // this.elements.logo.rotate.y += 0.02;
                this.elements.logo.updateGraph();
                this.render();
                this.running = requestAnimationFrame(this.spin.bind(this));
            } else {
                this.stopAnimation();
            }
        },
        
        flip() {
            if (this.isFlipping) {
                this.elements.logo.rotate.x += 0.01;
                // this.elements.logo.rotate.y += 0.02;
                this.elements.logo.updateGraph();
                this.render();
                this.running = requestAnimationFrame(this.flip.bind(this));
            } else {
                this.stopAnimation();
            }
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

function AnimationControl() {

    let logo = new CreateLogo;
    logo.introAnimation();
    let counter = 0;
    let counter2 = 0;

    return {

        logo,
        counter,
        counter2,

        rotateX() {
            let btnY = document.querySelector('.spinX-btn');
            btnY.addEventListener('mousedown', () => {
                this.logo.startAnimation('x');
            });
            btnY.addEventListener('mouseup' , () => {
                logo.stopAnimation();
            })
        },
        
        rotateY() {
            let btnY = document.querySelector('.spinY-btn');
            btnY.addEventListener('mousedown', () => {
                this.logo.startAnimation('y');
            });
            btnY.addEventListener('mouseup' , () => {
                this.logo.stopAnimation();
            })
        },
        
        rotateZ() {
            let btnY = document.querySelector('.spinZ-btn');
            btnY.addEventListener('mousedown', () => {
                this.logo.startAnimation('z');
            });
            btnY.addEventListener('mouseup' , () => {
                this.logo.stopAnimation();
            });
        },

        spin() {
            let btnSpin = document.querySelector('.spin-btn');
            btnSpin.addEventListener('click', () => {
                if (this.counter % 2 == 0) {
                    btnSpin.innerHTML = 'stop spinning';
                } else {
                    btnSpin.innerHTML = 'keep spinning';
                }
                this.logo.startAnimation('spin', this.counter, undefined);
                this.counter++
            });
        },

        flip() {
            let btnFlip = document.querySelector('.flip-btn');
            btnFlip.addEventListener('click', () => {
                if (this.counter2 % 2 == 0) {
                    btnFlip.innerHTML = 'stop flipping';
                } else {
                    btnFlip.innerHTML = 'keep flipping';
                }
                this.logo.startAnimation('flip', undefined, this.counter2);
                this.counter2++
            });
        },
    }
}

export {CreateLogo, AnimationControl};