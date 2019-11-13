import Zdog from 'zdog';

function animatedLogo() {

    let illu = new Zdog.Illustration({
        element: document.querySelector('.canvas-zdog'),
    });

    let letterP = new Zdog.Group({
        addTo: illu,
        translate: {x: -100},
    })

    let pCurve = new Zdog.Ellipse({
        addTo: letterP,
        diameter: 90,
        stroke: 75,
        quarters: 2,
        color: '#bb0000',
    });

    let pCurveRight = new Zdog.Shape({
        addTo: pCurve,
        path: [
            {x: -10, y:45},
            {x: -30, y:45},
        ],
        stroke: 75,
        color: '#bb0000',
    });

    pCurveRight.copy({
        translate: {y: -90},
    })

    let pBack = new Zdog.Shape({
        addTo: pCurve,
        path:[
            {x: -40, y: -35},
            {x: -40, y: 110}
        ],
        stroke: 80,
        color: '#34efad',
        translate: {x: 0, y: -7}
    });
    

    let letterO = new Zdog.Group({
        addTo: illu,
        translate: {x:100},
    })

    let oTop3 = new Zdog.Ellipse({
        addTo: letterO,
        diameter: 90,
        stroke: 75,
        quarters: 2,
        rotate: {z: Zdog.TAU/-4},
        color: '#bb0000',
    });

    let oTopRight = new Zdog.Shape({
        addTo: oTop3,
        path: [
            {x: -10, y:45},
            {x: -30, y:45},
        ],
        stroke: 75,
        color: '#bb0000',
    });

    oTopRight.copy({
        translate: {y: -90},
    })

    oTop3.copy({
        translate: {y: 55},
        color: '#eeaadd',
        rotate: {z: Zdog.TAU/4}
    })

    illu.updateRenderGraph();
}

export default animatedLogo