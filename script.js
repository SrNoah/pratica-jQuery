$(document).ready(function() {
    // para adicionar eventos aos elementos no jQuery/js
    $('header button').click(function() {
        //animação de descer a informação
        $('form').slideDown();
    })

    $('#cancelar').click(function(){
        //animação de subir a informação
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();

        //Função para adicionar imagem no <li> no modo jQuery
        const novaImagem = $('#imagem-nova').val();
        const novoItem = $('<li style="display: none"></li>');
        // Templade literoff se usa as `` // Para adicionar o elemento no novo item se usa o .appendTo(destino)
        $(`<img src="${novaImagem}" />`).appendTo(novoItem);
        $(`
            <div class="imagem-link">
                <a href="${novaImagem}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem); // Aqui foi feito a função de acrescentar a div os mesmos elementos na <ul> toda vez que add uma imagem nova
        $(novoItem).appendTo('ul');
        // Função para a imagem aparecer lentamente
        $(novoItem).fadeIn(2000);
        $('#imagem-nova').val('');
    })
})
