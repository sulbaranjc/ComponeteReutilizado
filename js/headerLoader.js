document.addEventListener('DOMContentLoaded', async () => {
  try {
    const resp = await fetch('componentes/header.html', { credentials: 'same-origin' });
    if (!resp.ok) throw new Error(`Error ${resp.status} al cargar header.html`);
    const html = await resp.text();

    const container = document.getElementById('header');
    if (container) {
      container.innerHTML = html;

      // Marcar enlace activo (accesible) tras inyectar el header
      const here = location.pathname.split('/').pop() || 'index.html';
      container.querySelectorAll('.hero-nav a').forEach(a => {
        const file = a.getAttribute('href');
        if (file === here) a.setAttribute('aria-current', 'page');
      });
    }
  } catch (err) {
    console.error('HeaderLoader:', err);
  }
});
