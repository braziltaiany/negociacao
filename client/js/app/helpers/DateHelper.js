class DateHelper {
  //metodo 1
  dataParaTexto(data) {
    return `${data.getDate()}${'/'}${
      data.getMonth() + 1
    }${'/'}${data.getFullYear()}`;
  }
  //metodo 2
  textoParaData(texto) {
    return new Date(
      ...texto.split('-').map((item, indice) => item - (indice % 2))
    );
  }
}
