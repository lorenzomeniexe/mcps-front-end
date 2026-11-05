export default function ListaGastos({ gastos }) {
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
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
