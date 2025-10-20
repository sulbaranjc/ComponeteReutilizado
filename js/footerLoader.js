document.addEventListener('DOMContentLoaded', async () => {
  try {
    const resp = await fetch('componentes/footer.html', { credentials: 'same-origin' });
    if (!resp.ok) throw new Error(`Error ${resp.status} al cargar footer.html`);
    const html = await resp.text();

    const container = document.getElementById('footer');
    if (container) {
      container.innerHTML = html;
    }
  } catch (err) {
    console.error('FooterLoader:', err);
  }
});
