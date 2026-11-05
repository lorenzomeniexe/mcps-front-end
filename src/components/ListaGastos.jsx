export default function ListaGastos({ gastos, aoRemoverGasto }) {
  return (
    <section className="lista-gastos">
      <h2>Gastos Registrados</h2>
      {gastos.length === 0 ? (
        <p>Nenhum gasto cadastrado ainda.</p>
      ) : (
        <ul>
          {gastos.map((gasto) => (
            <li key={gasto.id} className="gasto-item">
              <span className="gasto-descricao">{gasto.descricao}</span>
              <span className="gasto-categoria">[{gasto.categoria}]</span>
              <span className="gasto-valor">
                R$ {gasto.valor.toFixed(2).replace('.', ',')}
              </span>
              <button
                type="button"
                className="botao-remover"
                onClick={() => aoRemoverGasto(gasto.id)}
              >
                Remover
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
