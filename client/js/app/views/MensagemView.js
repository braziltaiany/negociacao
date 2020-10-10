class MensagemView {

    constructor(elementoDom) {
        this._elementoDom = elementoDom;

    }

    _template(model) {
        // se o texto estiver vazio/null,indefinido vai dar falso, 
        // ? se for verdadeiro devolve esse template( classe alert alert-info)
        //senão ( : ) - devolve um paragrafo sem a classe alert alert-info
        return model.texto ? `<p class="alert alert-info">${model.texto}<p/>` : '<p></p>';
    }

    update(model) {
        this._elementoDom.innerHTML = this._template(model);
    }
}
