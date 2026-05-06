// Smooth scroll for all nav links
document.querySelectorAll('a[href^="#"]').forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        var target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Contact form submit
function sendMessage(e) {
    e.preventDefault();
    var btn = e.target.querySelector('button');
    btn.textContent = 'Message Sent!';
    btn.style.background = '#28a745';
    setTimeout(function() {
        btn.textContent = 'Send Message';
        btn.style.background = '';
        e.target.reset();
    }, 3000);
}