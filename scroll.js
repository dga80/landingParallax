window.addEventListener('scroll', function() {
    var yPos = -window.pageYOffset / 2; // Ajusta la velocidad de desplazamiento cambiando el divisor
    document.body.style.backgroundPosition = 'center ' + yPos + 'px';
  });
  