'use strict'



document.addEventListener("DOMContentLoaded", () => {
    const offcanvas = document.getElementById("offcanvasTop");
    const toggleButton = document.getElementById("toggleOffcanvas");
    const closeButton = document.getElementById("closeOffcanvas");

    toggleButton.addEventListener("click", () => {
        offcanvas.classList.add("show");
    });

    closeButton.addEventListener("click", () => {
        offcanvas.classList.remove("show");
    });
});



// desktop-slider and tablet

let image = [
    'desktop-image-hero-1.jpg',
    'desktop-image-hero-2.jpg',
    'desktop-image-hero-3.jpg'
];


let imageSlider = document.getElementById("backimage-1");
let i = 0;


function setImg() {
    return imageSlider.setAttribute('src', 'assets/' + image[i])
}

function next() {
    if (i >= image.length - 1 ) i = -1;
    i++;
    return setImg();
}

function prev() {
    if(i <= 0) i = image.length;
    i--;
    return setImg();
}


// mobile-slider

let images = [
    'mobile-image-hero-1.jpg',
    'mobile-image-hero-2.jpg',
    'mobile-image-hero-3.jpg'
];


let ImageSlider = document.getElementById('backimage-mobile')
let t = 0;

function setimg() {
    return ImageSlider.setAttribute('src', 'assets/' + images[i])
}


function nexts() {
    if (i >= images.length - 1 ) i = -1;
    i++;
    return setimg();
}

function prevs() {
    if(i <= 0) i = images.length;
    i--;
    return setimg();
    
}


// words slide 

let words = [
    'Discover innovative ways to decorative',
    'We are available all across the globe',
    'Manufactured with the best materials'
];

let headingTag = document.getElementById('discover-h1');
let d = 0;

function headingchange() {
    headingTag.innerText = words[d]
}
// desktop
document.getElementById("next").addEventListener("click",function() {
    if (d < words.length - 1) {
        d++;
    } else {
        d = 0
    }
    headingchange();

})

document.getElementById("prev").addEventListener("click",function() {
    if (d > 0) {
        d--;
    } else {
        d = words.length - 1;
    }
    headingchange();

})

// mobile
document.getElementById("nexts").addEventListener("click",function() {
    if (d < words.length - 1) {
        d++;
    } else {
        d = 0
    }
    headingchange();

})

document.getElementById("prevs").addEventListener("click",function() {
    if (d > 0) {
        d--;
    } else {
        d = words.length - 1;
    }
    headingchange();

})

// tablet

document.getElementById("nextss").addEventListener("click",function() {
    if (d < words.length - 1) {
        d++;
    } else {
        d = 0
    }
    headingchange();

})

document.getElementById("prevss").addEventListener("click",function() {
    if (d > 0) {
        d--;
    } else {
        d = words.length - 1;
    }
    headingchange();

})

// p-tag-words 

let WORD = [
    'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love',
    "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using store locator. Any questions? Don't hesistate to contact us today.",
    'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experiences in this industry, we understand what customer want for their home and office.'

];

let ptag = document.getElementById('discover-p');
let z = 0;

function pTag() {
    ptag.innerText = WORD[z];
    
}

document.getElementById("next").addEventListener("click",function() {
    if (z < words.length - 1) {
        z++;
    } else {
        z = 0
    }
    pTag();

})

document.getElementById("prev").addEventListener("click",function() {
    if (z > 0) {
        z--;
    } else {
        z = words.length - 1;
    }
    pTag();

})

document.getElementById("nexts").addEventListener("click",function() {
    if (z < words.length - 1) {
        z++;
    } else {
        z = 0
    }
    pTag();

})

document.getElementById("prevs").addEventListener("click",function() {
    if (z > 0) {
        z--;
    } else {
        z = words.length - 1;
    }
    pTag();

})

document.getElementById("nextss").addEventListener("click",function() {
    if (z < words.length - 1) {
        z++;
    } else {
        z = 0
    }
    pTag();

})

document.getElementById("prevss").addEventListener("click",function() {
    if (z > 0) {
        z--;
    } else {
        z = words.length - 1;
    }
    pTag();

})

