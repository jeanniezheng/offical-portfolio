const svgPaths = [
    { id: 'svg1', paths: null, element: null },
    { id: 'svg2', paths: null, element: null },
    { id: 'svg3', paths: null, element: null }
];

for (let i = 0; i < svgPaths.length; i++) {
    svgPaths[i].paths = document.querySelectorAll(`#${svgPaths[i].id} path`);
    svgPaths[i].element = document.getElementById(svgPaths[i].id);

    for (let j = 0; j < svgPaths[i].paths.length; j++) {
        let path = svgPaths[i].paths[j];
        let pathLength = path.getTotalLength();

        path.style.strokeDasharray = pathLength + ' ' + pathLength;
        path.style.strokeDashoffset = pathLength;

        window.addEventListener('scroll', () => {
            const section2 = document.querySelector('#section2');
            const section3 = document.querySelector('#section3');
            const section2Pos = section2.getBoundingClientRect().top;
            const section3Pos = section3.getBoundingClientRect().top;

            let scrollPercentage = i === 0 ? (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - (window.innerHeight * 3)) : Math.max(0, (window.pageYOffset - section2Pos) / (section2.offsetHeight))


            let drawLength = pathLength * scrollPercentage;

            if (window.innerHeight < section2Pos) {
                svgPaths[0].element.style.opacity = "1";
                svgPaths[1].element.style.opacity = '0';
                svgPaths[2].element.style.opacity = '0';
            } else if (window.innerHeight > section2Pos && window.innerHeight < section3Pos) {
                svgPaths[0].element.style.opacity = "0";
                svgPaths[1].element.style.opacity = '1';
                svgPaths[2].element.style.opacity = '0';
            } else if (window.innerHeight > section3Pos) {
                svgPaths[1].element.style.opacity = '0';
                svgPaths[2].element.style.opacity = '1';
            } else {
                svgPaths[2].element.style.opacity = '0';
            }

            path.style.strokeDashoffset = pathLength - drawLength;
        });
    }
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
