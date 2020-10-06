class DateHelper {
  constructor() {
    //DateHelper não pode ser instanciada
    throw new Error('Esta classe não pode ser instanciada');
  }
  //metodo 1
  static dataParaTexto(data) {
    return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
  }
  //metodo 2
  static textoParaData(texto) {
    if (!/\d{4}-\d{2}-\d{2}/.test(texto))
      throw new Error('Deve estar no formato aaaa-mm-dd');

    return new Date(
      ...texto.split('-').map((item, indice) => item - (indice % 2))
    );
  }
}
