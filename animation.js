let paths = document.querySelectorAll('path');

for (let i = 0; i < paths.length; i++) {
    let path = paths[i];
    let pathLength = path.getTotalLength();

    path.style.strokeDasharray = pathLength + ' ' + pathLength;

    // start with hidden
    path.style.strokeDashoffset = pathLength;

    // fire scroll
    window.addEventListener('scroll', () => {
        // Get the position of section2
        const section2 = document.querySelector('#section2');
        const section2Pos = section2.getBoundingClientRect().top;

        let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - (window.innerHeight * 4));
        let drawLength = pathLength * scrollPercentage;
        let element = document.getElementById('svg');

        if (section2Pos < window.innerHeight) {
            // If the svg has passed section2, hide it
            element.style.opacity = "0";
        } else {
            // Otherwise, show it
            element.style.opacity = "1";
        }

        path.style.strokeDashoffset = pathLength - drawLength;
    });
}
