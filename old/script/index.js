const shadow = document.getElementById('cursorShadow');

document.addEventListener('mousemove', (e) => {
    shadow.style.left = e.clientX + 'px';
    shadow.style.top = e.clientY + 'px';
});

const langToggle = document.getElementById('language-toggle');
if (langToggle) {
    langToggle.addEventListener('click', () => {
        const currentPath = window.location.pathname;
        if (currentPath.endsWith('index_eng.html')) {
            window.location.href = 'index.html';
        } else {
            window.location.href = 'index_eng.html';
        }
    });
}