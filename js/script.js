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



// #########################################
// ESTE SCRIPT SERVE PARA A CLASSE "social-link" PARA OS LINKS VOLTARREI AO PADRÃO NORMAL 
// #########################################

// =========================================================================
// SCRIPT FINAL - TENTATIVA DE FORÇAR O FOCO E A RENDERIZAÇÃO
// =========================================================================


window.addEventListener('load', function() {

  const socialLinks = document.querySelectorAll('.social_icons a');

  if (socialLinks.length > 0) {
    console.log('SUCESSO: Links encontrados. Adicionando evento de clique final.');
  } else {
    console.log('FALHA: Links não encontrados.');
    return; // Para o script se não houver links
  }

  socialLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      
      console.log('CLIQUE DETECTADO! Forçando a perda de foco...');

      // Tática 1: O blur() que já tentamos.
      link.blur();
      
      // Tática 2 (Nova e mais forte): Força o foco a ir para um elemento neutro.
      // Isso obriga o link clicado a perder seu estado de foco.
      document.body.focus();

    });
  });
});





// =========================================================================
// SCRIPT FINAL E DEFINITIVO - USANDO O EVENTO "LOAD"
// =========================================================================
/*
// Vamos usar o evento 'load' na janela do navegador (window).
// Ele é a garantia máxima de que TUDO na página, incluindo imagens e estilos, já carregou.
window.addEventListener('load', function() {

  // Adicionamos um log para termos certeza de que este bloco está rodando.
  console.log('PÁGINA 100% CARREGADA. Procurando os links sociais...');

  // Agora, com 100% de certeza de que tudo está na tela, procuramos os elementos.
  const socialLinks = document.querySelectorAll('.social_icons a');

  // Outro log para confirmar se os elementos foram encontrados.
  console.log('Links encontrados:', socialLinks);

  // Para cada um dos links que ele encontrou...
  socialLinks.forEach(function(link) {
    // Adiciona o nosso "ouvinte" de clique.
    link.addEventListener('click', function() {
      // Força o link a perder o foco imediatamente após o clique.
      link.blur();
    });
  });
});
*/



/*
// Encontra todos os links que têm a classe 'social_icons' como pai
const socialLinks = document.querySelectorAll('.social_icons a');

// Para cada um desses links...
socialLinks.forEach(function(link) {
    // Adiciona um "ouvinte" que espera o clique
    link.addEventListener('click', function() {
        // Imediatamente após o clique, força o link a perder o foco.
        // Isso faz o navegador remover o estilo de :hover.
        link.blur();
    });
});
*/




/*
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
