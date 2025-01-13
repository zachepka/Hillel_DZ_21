document.getElementById('button').addEventListener('click', function() {
    const textElement = document.getElementById('text');
    textElement.style.color = (textElement.style.color === 'purple') ? 'black' : 'purple';
});