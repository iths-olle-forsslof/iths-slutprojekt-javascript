import Zdog from 'zdog';
import anime from 'animejs';

class AnimateLogo {
    constructor() {
        this.canvas = document.querySelector('.canvas-zdog'),
        this.ctx = this.canvas.getContext('2d'),
        
        this.width = window.innerWidth -20;
        this.width < 600 ? this.width = 1000 : this.width = this.width;
        this.height = window.innerHeight;
        this.canvas.setAttribute('width', this.width);
        this.canvas.setAttribute('height', this.height);
        this.canvasWidth = this.canvas.width;
        this.canvasHeight = this.canvas.height;
    
        window.addEventListener('resize', () => {
            this.width = this.width;
        });
        
        this.TAU = Zdog.TAU;
        this.zoom = .8;
        this.isSpinning = true;
        this.interval;
        this.currAnimation;
    
        this.darkColor = 'rgb(77, 17, 82)';
        this.lightColor = '#f1feff'; // light blueish
        this.strokeColor = '#ff85bf'; // yellow
        this.fill = 75;
        this.stroke = 80;
    
        // Canvas
        this.logo = new Zdog.Anchor({
            translate: {x: -110, y: -50}
        });
    
        // vvvvvvvvvvvvv P PLACEMENT CONTROLLER vvvvvvvvvvvvv
    
        this.pAnchor = new Zdog.Anchor({
            addTo: this.logo,
            rotate: {z: Zdog.TAU/-16},
            translate: {x: -150, y: 20, z: 300},
        });
    
        // vvvvvvvvvvvvv E PLACEMENT CONTROLLER vvvvvvvvvvvvv
    
        this.eAnchor = new Zdog.Anchor({
            addTo: this.logo,
            rotate: {z: Zdog.TAU/75},
            translate: {x: 0, y: 20, z: 100}
        });
    
        // vvvvvvvvvvvvv O PLACEMENT CONTROLLER vvvvvvvvvvvvv
    
        this.oAnchor = new Zdog.Anchor({
            addTo: this.logo,
            translate: {x: 115, y: 80, z: -140},
            rotate: {z: Zdog.TAU/-20}
        });
    
        // vvvvvvvvvvv W CONTROLLER vvvvvvvvvvvv
        
        this.wAnchor = new Zdog.Anchor({
            addTo: this.logo,
            translate: {x: 210, y: -70, z: -180},
            rotate: {z: Zdog.TAU/20},
        });
    
        // ------------ P CONTENT ---------------

        this.pArcStroke = new Zdog.Ellipse({
            addTo: this.pAnchor,
            diameter: 85,
            quarters: 4,
            rotate: {z: Zdog.TAU/-7},
            translate: {x: 0, z: -80},
            stroke: 75,
            color: this.strokeColor,
        });
    
        this.pArcFill = this.pArcStroke.copy({
            stroke: 70,
            color: this.darkColor,
        });
        
        this.pSpineStroke = new Zdog.Shape({
            addTo: this.pAnchor,
            path:[
                {x: -40, y: -40},
                {x: -40, y: 110}
            ],
            stroke: this.stroke,
            color: this.strokeColor,
            translate: {x: 0, y: 0}
        });
    
        this.pSpineFill = this.pSpineStroke.copy({
            color: this.lightColor,
            stroke: this.fill,
        });
        // -------------- E CONTENT ---------------
    
        this.eSpineStroke = new Zdog.Shape({
            addTo: this.eAnchor,
            path:[
                {x: -40, y: -40},
                {x: -40, y: 110}
            ],
            stroke: this.stroke,
            color: this.strokeColor,
            translate: {x: 0, y: -7}
        });
    
        this.eSpineFill = this.eSpineStroke.copy({
            addTo: this.eAnchor,
            stroke: this.fill,
            color: this.darkColor,
        });
    
        this.eTopStroke = new Zdog.Shape({
                addTo: this.eAnchor,
                path: [
                    {x: -40, y: -48},
                    {x: 50, y: -48},
                ],
                color: this.strokeColor,
                stroke: this.stroke,
                translate: {z: -80},
        });
    
        this.eTopFill = this.eTopStroke.copy({
            color: this.darkColor,
            stroke: this.fill,
        });
    
        this.eMiddleStroke = new Zdog.Shape({
            addTo: this.eAnchor,
            path: [
                {x: -10, y: 30},
                {x: 20, y: 30},
            ],
            translate: {z: 80},
            color: this.strokeColor,
            stroke: this.stroke,
        });
        
        this.eMiddlefill = this.eMiddleStroke.copy({
            addTo: this.eAnchor,
            color: this.darkColor,
            stroke: this.fill,
        });
    
        this.eBottomStroke = this.eTopStroke.copy({
            stroke: this.stroke,
            color: this.strokeColor,
            translate: {y: 152, z: -80},
        });
    
        this.eBottomFill = this.eBottomStroke.copy({
            color: this.darkColor,
            stroke: this.fill,
        });
        
        // ------------------- O CONTENT --------------------
    
        this.oTopStroke = new Zdog.Shape({
            addTo: this.oAnchor,
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
            stroke: this.stroke,
            color: this.strokeColor,
        });
    
        this.oTopFill = this.oTopStroke.copy({
            stroke: this.fill,
            color: this.lightColor,
        });
    
        this.oBottomStroke = new Zdog.Ellipse({
            addTo: this.oAnchor,
            diameter: 100,
            stroke: 80,
            rotate: {z: Zdog.TAU/4},
            quarters: 2,
            color: this.strokeColor,
            translate: {x: 50, y: 20, z: 80},
        });
    
        this.oBottomFill = this.oBottomStroke.copy({
            stroke: this.fill,
            color: this.darkColor,
        });

    // ---------------------- W CONTENT ---------------------
    
        this.wLeftStroke = new Zdog.Shape({
            addTo: this.wAnchor,
            path: [
                {x: 100, y: 0},
                {x: 100, y: 150}
            ],
            stroke: this.stroke,
            color: this.strokeColor,
        });
    
        this.wLeftFill = this.wLeftStroke.copy({
            addTo: this.wLeftStroke,
            stroke: this.fill,
            color: this.darkColor,
        });
    
        this.wMiddleStroke = new Zdog.Shape({
            addTo: this.wAnchor,
            path: [
                {x: 0, y: 30},
                {x: 0, y: 150},
            ],
            stroke: this.stroke,
            color: this.strokeColor,
            translate: {x: 170, z: 80},
        });
    
        this.wMiddleFill = this.wMiddleStroke.copy({
            color: this.darkColor,
            stroke: this.fill,
        });
    
        this.wRightStroke = this.wLeftStroke.copy({
            translate: {x: 140, z: 160},
        });
    
        this.wRightFill = this.wRightStroke.copy({
            stroke: this.fill,
            color: this.darkColor,
        });
    
        this.wBottomStroke = new Zdog.Shape({
            addTo: this.wAnchor,
            path: [
                {x: 0, z: -120},
                {x: 130, z: 30},
            ],
            stroke: this.stroke,
            color: this.strokeColor,
            translate: {x: 100, y: 150,},
        });
    
        this.wBottomFill = this.wBottomStroke.copy({
            color: this.lightColor,
            stroke: this.fill,
        });
    
        this.currAnimation;
        this.isSpinning;
        this.interval;
        this.running = null;
    }
    
    animate() {
        // let logo = this.logo
        let tick = 0;
        let count = 150;
        let spin = true;
        let progress = tick / count;
        let alpha = progress % 2;
        let power = 2;
        let tween = Zdog.easeInOut(alpha, power);
        this.logo.rotate.x = tween * Zdog.TAU;
        if (tick  > 200){
            tick = 0;
            spin = false;
            } else {
                tick++;
            }
        this.logo.updateGraph();
        this.render();
        if (this.currAnimation){
            this.running = requestAnimationFrame( () => this.animate() )
        }
    };

    stopAnimate() {
        if(this.currAnimation){
            this.currAnimation = !this.currAnimation
        } else {
            this.currAnimation = true;
            this.animate();
        }
    };

    spinX() {
        this.logo.rotate.x += 0.02;
        this.logo.updateGraph();
        this.render();
        if (this.currAnimation){
            requestAnimationFrame( this.spinX() );
        }
    };

    spinY() {
        this.logo.rotate.y += 0.02;
        this.logo.updateGraph();
        this.render();
    };

    spinZ() {
        this.logo.rotate.z += 0.02;
        this.logo.updateGraph();
        this.render();
    };
    
    render() {
        this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        this.ctx.save();
        
        this.ctx.translate(this.canvasWidth/2, this.canvasHeight/2);
        this.ctx.scale(this.zoom, this.zoom);
        
        this.ctx.lineJoin = 'round';
        this.ctx.lineCap = 'round';
        
        this.logo.renderGraphCanvas(this.ctx);
        this.ctx.restore();
    };
    
};

let animate = new AnimateLogo;

function rotateX() {
    let count = 0;
    let btnX = document.querySelector('.spinX-btn');
    let btnY = document.querySelector('.spinY-btn');
    let btnZ = document.querySelector('.spinZ-btn');
    btnX.addEventListener('click', () => {
        animate.stopAnim();
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
        animate.startAnim();
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
        animate.stopAnimate();
    });
};

function reset() {
    let count = 0;
    
    let reset = document.querySelector('.reset-btn');
    let btnX = document.querySelector('.spinX-btn');
    let btnY = document.querySelector('.spinY-btn');
    let btnZ = document.querySelector('.spinZ-btn');
    reset.addEventListener('click', () => {
        let animate = new AnimateLogo();
        animate.animate();
        btnX.innerHTML = 'X: rotate'
        btnY.innerHTML = 'Y: rotate'
        btnZ.innerHTML = 'Z: rotate'
        // loadButtons();
        
    });
};

export {AnimateLogo, rotateX, rotateY, rotateZ, reset};