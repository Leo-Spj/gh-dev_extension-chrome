
window.onload = function() {
    
    if (/^https:\/\/github\.com\/[^\/]+\/[^\/]+/.test(window.location.href)) {

      const colorDeFondo = window.getComputedStyle(document.body).backgroundColor;

      const $DEV = document.createElement('a');
      $DEV.classList.add('dev-leoSpj');
      $DEV.style.color = colorDeFondo;
      $DEV.textContent = 'GitHub.dev';

      $DEV.href = window.location.href.replace('github.com', 'github.dev');

      const $CONTENEDOR = document.querySelector('.bWpuBf');
      $CONTENEDOR.appendChild($DEV);
    }
}