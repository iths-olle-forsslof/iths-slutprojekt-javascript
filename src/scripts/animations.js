import Zdog from 'zdog';

function animatedLogo() {

    let darkColor = 'rgb(77, 17, 82)';
    let lightColor = '#bffdff';
    let strokeColor = '#34efad';
    let fill = 75;
    let stroke = 80;

    // Canvas
    let logo = new Zdog.Illustration({
        element: document.querySelector('.canvas-zdog'),
        dragRotate: true,
    });

    // vvvvvvvvvvvvv P PLACEMENT CONTROLLER vvvvvvvvvvvvv

    let pAnchor = new Zdog.Anchor({
        addTo: logo,
        rotate: {z: Zdog.TAU/-16},
        translate: {x: -150, y: 20, z: 300},
    })

    // vvvvvvvvvvvvv E PLACEMENT CONTROLLER vvvvvvvvvvvvv

    let eAnchor = new Zdog.Anchor({
        addTo: logo,
        rotate: {z: Zdog.TAU/75},
        translate: {x: 0, y: 20, z: 100}
    })

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
    })

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
    })
    
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
    })

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
    })
    
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
    })


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
    })

    let wMiddleFill = wMiddleStroke.copy({
        color: darkColor,
        stroke: fill,
    })

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
    })
    
    function animate() {
        logo.updateRenderGraph();
        requestAnimationFrame(animate);
    };

    animate();
}

export default animatedLogo