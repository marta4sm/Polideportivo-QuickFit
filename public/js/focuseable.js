// Obtén todos los elementos focuseables de la barra de navegación
const navigationItems = document.querySelectorAll('.navbar-nav .nav-link');
const buttonItems = document.querySelectorAll('.btn');
const cardItems = document.querySelectorAll('.card')
const footerLinks = document.querySelectorAll('.footer-link');
const dropdownItems = document.querySelectorAll('.dropdown-item');
const dropdownMenus = document.querySelectorAll('.navbar-nav .dropdown-menu');
const breadcrumb = document.querySelectorAll('.breadcrumb-link');
const socialIcons = document.querySelectorAll('.social-icons-link');
const webmapLinks = document.querySelectorAll('.webmap-link');
const all = document.querySelectorAll('.focuseable');

// Función genérica para agregar los manejadores de eventos
function addEventHandlers(elements) {
  elements.forEach(element => {
    element.addEventListener('keydown', event => {
      if (event.key === 'Enter') {
        const href = element.getAttribute('href');
        if (href) {
          window.location.href = href; // Navega a la URL si existe
        }
      }
    });

    // Agrega un atributo tabindex para hacer los elementos focuseables
    element.setAttribute('tabindex', '0');
  });
}

addEventHandlers(buttonItems);
addEventHandlers(cardItems);
addEventHandlers(footerLinks);
addEventHandlers(dropdownItems);
addEventHandlers(breadcrumb);
addEventHandlers(socialIcons);
addEventHandlers(webmapLinks);
addEventHandlers(all);

// Agrega un manejador de eventos a cada elemento
navigationItems.forEach(item => {
  item.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Evita el comportamiento predeterminado del enlace
      const href = item.getAttribute('href');
      const dropdown = item.parentElement.querySelector('.dropdown-menu');
      if (href) {
        window.location.href = href; // Navega a la URL del enlace si existe
      }
      if (dropdown) {
        dropdown.classList.add('show'); // Abre el dropdown
      }
    }
  });

  item.addEventListener('blur', event => {
    const dropdown = item.parentElement.querySelector('.dropdown-menu');
    if (dropdown) {
      // Espera un tiempo breve antes de cerrar el dropdown
      setTimeout(() => {
        if (!dropdownMatchesFocus(dropdown)) {
          dropdown.classList.remove('show'); // Cierra el dropdown si no hay elementos focuseados en él
        }
      }, 100);
    }
  });

  // Agrega un atributo tabindex para hacer los elementos focuseables
  item.setAttribute('tabindex', '0');
});


// Verifica si algún elemento del dropdown tiene el foco
function dropdownMatchesFocus(dropdown) {
  const focusableElements = dropdown.querySelectorAll('a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])');
  return Array.from(focusableElements).some(element => element === document.activeElement);
}

// Cierra el dropdown cuando se enfoca en otro elemento fuera de él
dropdownMenus.forEach(menu => {
  menu.addEventListener('focusin', event => {
    const dropdown = event.currentTarget.parentElement.querySelector('.dropdown-menu');
    if (dropdown) {
      dropdown.classList.add('show');
    }
  });

  menu.addEventListener('focusout', event => {
    const dropdown = event.currentTarget.parentElement.querySelector('.dropdown-menu');
    if (dropdown) {
      // Espera un tiempo breve antes de cerrar el dropdown
      setTimeout(() => {
        if (!dropdownMatchesFocus(dropdown)) {
          dropdown.classList.remove('show'); // Cierra el dropdown si no hay elementos focuseados en él
        }
      }, 100);
    }
  });
});