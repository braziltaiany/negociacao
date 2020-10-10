class View {
    constructor(elemento) {
        this._elemento = elemento;
    }

    template() {
        //na classe filha
        throw new Error('O método template deve ser implementado')
    }

    update(model) {
        this._elemento.innerHTML = this.template(model);
    }
}