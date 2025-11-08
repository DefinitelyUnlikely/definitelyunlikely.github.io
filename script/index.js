const shadow = document.getElementById('cursorShadow');

document.addEventListener('mousemove', (e) => {
    shadow.style.left = e.clientX + 'px';
    shadow.style.top = e.clientY + 'px';
});