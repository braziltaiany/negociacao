class ListaNegociacoes {
  constructor() {
    this._negociacoes = [];
  }

  adiciona(negociacoes) {
    this._negociacoes.push(negociacoes);
  }

  get negociacoes() {
    //Blindando lista negociacoes - [].concat
    return [].concat(this._negociacoes);
  }
}
