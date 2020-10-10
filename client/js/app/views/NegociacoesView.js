class NegociacoesView extends View {

  constructor(elemento) {
    super(elemento);
  }

  _template(model) {
    return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>

            <tbody>
            ${model.negociacoes.map(i => `
                  
                  <tr>
                    <td>${DateHelper.dataParaTexto(i.data)}</td>
                    <td>${i.quantidade}</td>
                    <td>${i.valor}</td>
                    <td>${i.volume}</td>
                  </tr>
                  
                `).join('')}
            </tbody>
            
            <tfoot>
              <td colspan="3"></td>
              <td>${model.negociacoes.reduce((total, i) => total + i.volume, 0.0)}</td>
              
            </tfoot>
        </table>
          `;
  }
}
