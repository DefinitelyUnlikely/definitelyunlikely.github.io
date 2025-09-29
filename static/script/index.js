const downArrow = document.getElementsByClassName("down-arrow-area")[0];
const upArrow = document.getElementsByClassName("up-arrow-area")[0];

function checkScroll() {
    const scrollFromTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    const isAtBottom = scrollFromTop + windowHeight >= documentHeight;

    if (isAtBottom) {
        downArrow.classList.add('hidden');
    } else {
        downArrow.classList.remove('hidden');
    }

    if (window.scrollY <= 200) {
        upArrow.classList.add('hidden');
    } else {
        upArrow.classList.remove('hidden');
    }


}

window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);
window.addEventListener('resize', checkScroll);

// Thanks to Claude.ai for helping me figure this one out.
downArrow.addEventListener('click', () => {
    window.scrollBy({
        top: window.innerHeight * 0.8,
        behavior: 'smooth'
    });
});

upArrow.addEventListener('click', () => {
    window.scrollBy({
        top: -window.innerHeight * 0.8,
        behavior: 'smooth'
    });
});