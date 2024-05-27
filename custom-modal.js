/**
 * @param {string} title
 * @param {number} width
 * @param {number} height
 * 
 * $("#btnClick").click(function () {
 *          $.ajax({
 *              url: '',
 *              type: '',
 *              success: function (result) {
 *                  if (result) {
 *                      $("#conteudoModal").load('rota http/https aqui', function () {
 *                          RedimensionarModal('Titulo', 'Largura', 'Altura');
 *                      });
 *                  } else {
 *                      window.location.href = '/home';
 *                  }
 *              }
 *          });
 *      });
 */

//Formatar modal e Titulo   ---   Dentro da requisição para abrir a modal
function RedimensionarModal(title, width, height) {
    $('#modalContainer').addClass('show');
    setTimeout(function () {
        $('.name-large').empty();
        $('.name-large').append(title);
        $('.modal-example').css('--modal-width', width);
        $('.modal-example').css('--modal-height', height);
        $('.modal-example').addClass('expand');
    }, 100);
};

// Fechar modal   --- Configurar btn onClick

function FecharModal() {
    $('.x-touch').click(function (event) {
        event.stopPropagation();
        $('.modal-example').removeClass('expand');
        setTimeout(function () {
            $('#modalContainer').removeClass('show');
        }, 300);
    });
};