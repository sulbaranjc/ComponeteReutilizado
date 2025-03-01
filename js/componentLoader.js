async function cargarComponente(elemento) {
  const archivo = elemento.getAttribute('data-archivo');
  if (!archivo) {
      console.warn(`El elemento ${elemento} no tiene atributo data-archivo`);
      return;
  }

  try {
      const response = await fetch(archivo);
      if (!response.ok) {
          throw new Error(`Error al cargar ${archivo}: ${response.status} ${response.statusText}`);
      }

      const html = await response.text();
      elemento.innerHTML = html;

  } catch (error) {
      console.error(`Error al cargar componente desde ${archivo}:`, error);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const componentes = document.querySelectorAll('[data-componente]');
  componentes.forEach(cargarComponente);
});
