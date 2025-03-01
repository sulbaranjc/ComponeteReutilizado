
---

## 💻 ¿Cómo funciona?

Este proyecto muestra cómo se puede **cargar dinámicamente partes de una página web (como el header y el footer)** desde archivos HTML independientes, facilitando la reutilización y el mantenimiento.

- **`headComponent.html`** contiene la cabecera con el logo y el menú de navegación.
- **`footerComponent.html`** contiene el pie de página.
- Todas las páginas (`index.html`, `contact.html`, etc.) cargan automáticamente estos componentes gracias al script `componentLoader.js`.

---

## ⚙️ Funcionamiento Técnico

1. Cada página incluye:
    ```html
    <div data-componente="headComponent" data-archivo="components/headComponent.html"></div>
    <div data-componente="footerComponent" data-archivo="components/footerComponent.html"></div>
    ```

2. El script `componentLoader.js` detecta automáticamente todos los elementos con el atributo `data-componente`, lee el valor de `data-archivo`, y carga el contenido HTML correspondiente dentro de ese `div`.

3. Así, puedes modificar el `headComponent.html` o el `footerComponent.html` una sola vez, y el cambio aparecerá automáticamente en **todas las páginas** que usen esos componentes.

---

## 📖 ¿Qué aprenderán los alumnos?

- Cómo **separar estructura (HTML), estilos (CSS) y lógica (JavaScript)**.
- El uso de **`fetch()`** para cargar archivos externos.
- Uso de **`data-attributes`** para hacer el código HTML más flexible.
- Cómo crear un proyecto escalable con carpetas organizadas (pages, components, js, css).
- Mejores prácticas para proyectos web simples.

---

## ✅ ¿Cómo añadir más componentes?

Solo hay que:

1. Crear el archivo del componente en `/components`, por ejemplo:
    ```
    components/sidebarComponent.html
    ```
2. Añadir en la página un contenedor así:
    ```html
    <div data-componente="sidebarComponent" data-archivo="components/sidebarComponent.html"></div>
    ```
3. No es necesario modificar el JavaScript, el sistema ya es genérico.

---

## 🚀 Requisitos

Solo necesitas un navegador moderno (Chrome, Firefox, Edge, etc.) y un servidor local simple (Live Server de VSCode, o cualquier servidor HTTP).

---

## 📂 Repositorio y Uso

1. Clona este repositorio:
    ```bash
    git clone https://github.com/tu-usuario/nombre-del-repo.git
    ```
2. Abre el proyecto en VSCode.
3. Usa **Live Server** o similar para probar.

---

## 📬 Contacto

Cualquier duda, sugerencia o mejora, puedes abrir un **issue** o enviar un pull request.

---

¿Quieres que te lo prepare en un archivo real para que lo subas directo a tu repo? 🚀
