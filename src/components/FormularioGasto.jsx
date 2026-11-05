import { useState } from 'react'

export default function FormularioGasto({ aoAdicionarGasto, erro }) {
  const [descricao, setDescricao] = useState('')
  const [valor, setValor] = useState('')
  const [categoria, setCategoria] = useState('Alimentação')

  const handleSubmit = (e) => {
    e.preventDefault()
    aoAdicionarGasto({
      descricao,
      valor: Number(valor),
      categoria
    })
  }

  return (
    <section className="formulario-gasto">
      <h2>Adicionar Novo Gasto</h2>
      {erro && <div className="mensagem-erro" style={{ color: 'red', marginBottom: '10px' }}>{erro}</div>}
      <form onSubmit={handleSubmit}>
        <div className="campo">
          <label htmlFor="descricao">Descrição:</label>
          <input
            type="text"
            id="descricao"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            placeholder="Ex: Supermercado"
          />
        </div>

        <div className="campo">
          <label htmlFor="valor">Valor (R$):</label>
          <input
            type="number"
            id="valor"
            step="0.01"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            placeholder="0,00"
          />
        </div>

        <div className="campo">
          <label htmlFor="categoria">Categoria:</label>
          <select
            id="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Transporte">Transporte</option>
            <option value="Lazer">Lazer</option>
            <option value="Outros">Outros</option>
          </select>
        </div>

        <button type="submit">Adicionar Gasto</button>
      </form>
    </section>
  )
}
