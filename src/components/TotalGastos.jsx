export default function TotalGastos({ gastos }) {
  const valorTotal = gastos.reduce((soma, gasto) => soma + gasto.valor, 0)

  return (
    <section className="total-gastos">
      <h2>Total de Gastos</h2>
      <div className="valor-total">
        R$ {valorTotal.toFixed(2).replace('.', ',')}
      </div>
    </section>
  )
}
