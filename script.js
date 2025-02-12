function showBubble() {
    var bubble = document.getElementById('speechBubble');
    bubble.style.display = 'block';

    setTimeout(function() {
        bubble.style.display = 'none';
    }, 3000); // Hide bubble after 3 seconds
}
