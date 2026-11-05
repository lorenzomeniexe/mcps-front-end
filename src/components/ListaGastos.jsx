export default function ListaGastos({ gastos, aoRemoverGasto }) {
  const obterClasseCategoria = (categoria) => {
    switch (categoria) {
      case 'Alimentação': return 'badge-alimentacao'
      case 'Transporte': return 'badge-transporte'
      case 'Lazer': return 'badge-lazer'
      default: return 'badge-outros'
    }
  }

  return (
    <section className="lista-gastos">
      <h2>Gastos Registrados</h2>
      {gastos.length === 0 ? (
        <p className="lista-vazia">Nenhum gasto cadastrado nesta categoria.</p>
      ) : (
        <ul className="gasto-lista">
          {gastos.map((gasto) => (
            <li key={gasto.id} className="gasto-item">
              <div className="gasto-info">
                <span className="gasto-descricao">{gasto.descricao}</span>
                <span className={`gasto-categoria ${obterClasseCategoria(gasto.categoria)}`}>
                  {gasto.categoria}
                </span>
              </div>
              <div className="gasto-acoes">
                <span className="gasto-valor">
                  R$ {gasto.valor.toFixed(2).replace('.', ',')}
                </span>
                <button
                  type="button"
                  className="botao-remover"
                  onClick={() => aoRemoverGasto(gasto.id)}
                  title="Remover gasto"
                >
                  ✕
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
