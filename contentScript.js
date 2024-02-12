
window.onload = function() {
    
    if (/^https:\/\/github\.com\/[^\/]+\/[^\/]+/.test(window.location.href)) {

      const $DEV = document.createElement('a');
      $DEV.classList.add('dev-leoSpj');
      $DEV.textContent = 'GitHub.dev';

      $DEV.href = window.location.href.replace('github.com', 'github.dev');
      $DEV.target = '_blank';

      const $CONTENEDOR = document.querySelector('.bWpuBf');
      $CONTENEDOR.appendChild($DEV);
    }
}