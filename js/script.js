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