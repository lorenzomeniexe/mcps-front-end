export default function FiltroGastos({ categoriaFiltro, aoMudarFiltro }) {
  const categorias = ['Todos', 'Alimentação', 'Transporte', 'Lazer', 'Outros']

  return (
    <div className="filtro-gastos">
      <span className="filtro-label">Filtrar:</span>
      <div className="filtro-botoes">
        {categorias.map((cat) => (
          <button
            key={cat}
            type="button"
            className={`botao-filtro ${categoriaFiltro === cat ? 'ativo' : ''}`}
            onClick={() => aoMudarFiltro(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  )
}
