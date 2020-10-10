class MensagemView extends View {

    constructor(elemento) {
        super(elemento);
    }

    template(model) {
        // se o texto estiver vazio/null,indefinido vai dar falso, 
        // ? se for verdadeiro devolve esse template( classe alert alert-info)
        //senão ( : ) - devolve um paragrafo sem a classe alert alert-info
        return model.texto ? `<p class="alert alert-info">${model.texto}<p/>` : '<p></p>';
    }

}
