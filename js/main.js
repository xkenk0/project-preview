let buttonToTop = document.getElementById("buttonToTop")

// Se puede hacer de esta forma
window.addEventListener("scroll", scrollFunction)
// O de esta otra forma
/* window.onscroll = function () {
    scrollFunction()
} */

/**
 * cambia el display del boton de none a block cuandola barra de desplazamiento pasa los 20 px
 * @author "Juani, Jaime, Tincho"
 * @param Nothing
 * @return {void} Nothing
 */
function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        buttonToTop.style.display = "block";
    } else {
        buttonToTop.style.display = "none";
    }
}

/**
 * // cuando se presiona el boton la barra de desplazamiento vuelve a arriba.
 * @author "Juani, Jaime, Tincho"
 * @param Nothing
 * @return {void} Nothing
 */ 
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}