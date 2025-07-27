// #########################################
// ESTE SCRIPT SERVE PARA O BANNER DO COOKIE
// #########################################

document.addEventListener('DOMContentLoaded', function() {
    const cookieBanner = document.getElementById('cookie-consent-banner');
    const acceptButton = document.getElementById('accept-cookies-btn');
    const hasAcceptedCookies = localStorage.getItem('cookiesAccepted');

    if (!hasAcceptedCookies) {
        cookieBanner.style.display = 'flex'; // Exibe o banner
    }

    acceptButton.addEventListener('click', function() {
        localStorage.setItem('cookiesAccepted', 'true'); // Salva a preferência
        cookieBanner.style.display = 'none'; // Esconde o banner
    });
});


/*
// #########################################
// ESTE SCRIPT SERVE PARA A CLASSE "social-link" PARA OS LINKS VOLTARREI AO PADRÃO NORMAL 
// #########################################

// Espera todo o conteúdo da página ser carregado para rodar o script
document.addEventListener('DOMContentLoaded', function() {

    // Encontra todos os links que têm a classe 'social-link'
    const socialLinks = document.querySelectorAll('.social-link');

    // Para cada um desses links...
    socialLinks.forEach(function(link) {

      // Adiciona um "ouvinte" para o evento de clique
      link.addEventListener('click', function() {
        
        // Usa um pequeno atraso para garantir que o navegador processe o clique
        // e abra a nova aba antes de forçarmos a perda de foco.
        setTimeout(function() {
          link.blur(); // O comando mágico que força o link a perder o foco.
        }, 100); // 100 milissegundos é um atraso imperceptível.
      });
    });
});
*/
