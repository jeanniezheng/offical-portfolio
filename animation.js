const paths1 = document.querySelectorAll('#svg1 path');

const paths2 = document.querySelectorAll('#svg2 path');

const paths3 = document.querySelectorAll('#svg3 path');

let element1 = document.getElementById('svg1');

let element2 = document.getElementById('svg2')

let element3 = document.getElementById('svg3')



for (let i = 0; i < paths1.length; i++) {
    let path = paths1[i];
    let pathLength = path.getTotalLength();

    path.style.strokeDasharray = pathLength + ' ' + pathLength;

    // start with hidden
    path.style.strokeDashoffset = pathLength;

    // fire scroll
    window.addEventListener('scroll', () => {
        // Get the position of section2

        const section1 = document.querySelector('#name');
        const section1Pos = section1.getBoundingClientRect().top;

        const section2 = document.querySelector('#section2');
        const section2Pos = section2.getBoundingClientRect().top;

        const section3 = document.querySelector('#section3');
        const section3Pos = section3.getBoundingClientRect().top;


        let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - (window.innerHeight * 3));

        let drawLength = pathLength * scrollPercentage;

        if (window.innerHeight < section2Pos) {
            // If the svg has passed section2, hide it
            element1.style.opacity = "1";
            element2.style.opacity = '0';
            element3.style.opacity = '0';


        }
        else if (window.innerHeight > section2Pos && window.innerHeight < section3Pos) {
            // Otherwise, show it
            element1.style.opacity = "0";
            element2.style.opacity = '1';
            element3.style.opacity = '0';


        }

        else if (window.innerHeight > section3Pos) {
            element2.style.opacity = '0';
            element3.style.opacity = '1';

        }
        else {
            element3.style.opacity = '0';

        }

        path.style.strokeDashoffset =
            pathLength - drawLength;

    });
}

//path2

for (let i = 0; i < paths2.length; i++) {
    let path = paths2[i];
    let pathLength = path.getTotalLength();

    path.style.strokeDasharray = pathLength + ' ' + pathLength;

    // start with hidden
    path.style.strokeDashoffset = pathLength;

    // fire scroll
    window.addEventListener('scroll', () => {
        // Get the position of section2
        const section2 = document.querySelector('#section2');
        const section2Pos = section2.getBoundingClientRect().top;

        let scrollPercentage = Math.max(0, (window.pageYOffset - section2Pos) / (section2.offsetHeight));

        let drawLength = pathLength * scrollPercentage;

        path.style.strokeDashoffset =
            pathLength - drawLength;

    });

}

//path 3
for (let i = 0; i < paths3.length; i++) {
    let path = paths3[i];
    let pathLength = path.getTotalLength();

    path.style.strokeDasharray = pathLength + ' ' + pathLength;

    // start with hidden
    path.style.strokeDashoffset = pathLength;

    // fire scroll
    window.addEventListener('scroll', () => {
        // Get the position of section2
        const section3 = document.querySelector('#section2');
        const section3Pos = section3.getBoundingClientRect().top;
        // let scrollPercentage = Math.max(0, (window.pageYOffset - section3Pos) / (section3.offsetHeight));

        let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - (window.innerHeight) * 4);


        let drawLength = pathLength * scrollPercentage;

        path.style.strokeDashoffset =
            pathLength - drawLength;

    });

}

const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

nextButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft -= slideWidth;
});