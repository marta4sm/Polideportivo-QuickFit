var isActive = true;

  window.onscroll = function() {
    scrollFunction();
  };

  function scrollFunction() {
    if (isActive) {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("subirArriba").classList.add("show");
        document.getElementById("cerrarSubirArriba").classList.add("show");
      } else {
        document.getElementById("subirArriba").classList.remove("show");
        document.getElementById("cerrarSubirArriba").classList.remove("show");
      }
    }
  }

  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  function toggleButton() {
    isActive = !isActive;
    if (isActive) {
      document.getElementById("subirArriba").classList.add("show");
      document.getElementById("cerrarSubirArriba").classList.add("show");
    } else {
      document.getElementById("subirArriba").classList.remove("show");
      document.getElementById("cerrarSubirArriba").classList.remove("show");
    }
  }

  document.addEventListener("keydown", function(event) {
    if (event.ctrlKey && event.shiftKey && event.key === "X") {
      toggleButton();
    }
  });

  function closeButton() {
    document.getElementById("subirArriba").classList.remove("show");
    document.getElementById("cerrarSubirArriba").classList.remove("show");
  }