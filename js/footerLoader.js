document.addEventListener('DOMContentLoaded', async () => {
  try {
      const response = await fetch('footer.html');
      if (!response.ok) {
          throw new Error(`Error al cargar el footer: ${response.status} ${response.statusText}`);
      }

      const html = await response.text();

      const footerContainer = document.getElementById('footer');
      if (footerContainer) {
          footerContainer.innerHTML = html;
      }
  } catch (error) {
      console.error('Error al cargar el footer:', error);
  }
});
