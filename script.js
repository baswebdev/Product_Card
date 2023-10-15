// JavaScript, um die Details der Produktkarte anzuzeigen oder auszublenden
var toggleButtons = document.querySelectorAll('.toggle-details');
toggleButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        var details = this.nextElementSibling;
        if (details.style.display === 'none' || details.style.display === '') {
            details.style.display = 'block';
            this.textContent = 'Weniger Info';
        } else {
            details.style.display = 'none';
            this.textContent = 'Mehr Info';
        }
    });
});
