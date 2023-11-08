import LocomotiveScroll from 'https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1.4/+esm';

// Locomotive scroll options
const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth:true,
    repeat: true
})

// Glide init
var glide = new Glide('.glide', {
    type: 'carousel',
    perView: 4,
    focusAt: 'center',
    breakpoints: {
      991: {
        perView: 2
      },
      480: {
        perView: 1
      }
    }
  });

glide.mount();


// Vivus logo stroke
new Vivus('logo-svg', {
    file: '../assets/images/Asset 7.svg',
    animTimingFunction: Vivus.EASE,
    duration: 200,
    onReady: function (myVivus) {
      // `el` property is the SVG element
      myVivus.el.setAttribute('height', '60%');
    }
  });

//   Granim changing gradient BG
  var granimInstance = new Granim({
    element: '#canvas-image-blending',
    direction: 'top-bottom',
    isPausedWhenNotInView: true,
    image : {
        source: '../assets/images/Artboard 1.png',
        blendingMode: 'multiply',
        stretchMode: ['stretch', 'stretch-if-bigger'],
        position: ['center', 'center'],
    },
    states : {
        "default-state": {
            gradients: [
                ['#01426D', '#01162E'],
                ['#FBB03B', '#ED1C24'],
                ['#79C4F2', '#0A4DA6'],
                // ['#80d3fe', '#7ea0c4'],
                // ['#f0ab51', '#eceba3']
            ],
            transitionSpeed: 5000,
            loop: true
        }
    }
});
