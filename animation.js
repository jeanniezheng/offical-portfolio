let paths = document.querySelectorAll('path');

for (let i = 0; i < paths.length; i++) {
    let path = paths[i];
    let pathLength = path.getTotalLength();

    path.style.strokeDasharray = pathLength + ' ' + pathLength;

    // start with hidden
    path.style.strokeDashoffset = pathLength;

    // fire scroll
    window.addEventListener('scroll', () => {
        let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - (window.innerHeight * 6));

        let drawLength = pathLength * scrollPercentage;

        var element = document.getElementById('svg');
        var position = element.getBoundingClientRect();

        // If the svg element is in view
        if (position.top <= window.innerHeight && position.bottom >= 0) {
            element.style.opacity = "1";
        }

        path.style.strokeDashoffset = pathLength - drawLength;

    });
}
