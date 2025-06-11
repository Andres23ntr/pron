
// script.js
function enviarMensaje(e) {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const mensaje = document.getElementById('mensaje').value;
  if (nombre && email && mensaje) {
    alert(`¡Gracias, ${nombre}! Tu mensaje ha sido enviado.`);
    e.target.reset();
  }
  return false;
}

// Neon flicker
setInterval(() => {
  document.querySelectorAll('.neon-text').forEach(el => {
    el.style.textShadow = `0 0 ${Math.random()*20+10}px var(--accent-pink)`;
  });
}, 300);
