import { useState } from 'react'
import FormularioGasto from './components/FormularioGasto'
import ListaGastos from './components/ListaGastos'
import TotalGastos from './components/TotalGastos'
import FiltroGastos from './components/FiltroGastos'
import './App.css'

function App() {
  const [gastos, setGastos] = useState([
    { id: 1, descricao: 'Almoço', valor: 35.50, categoria: 'Alimentação' },
    { id: 2, descricao: 'Ônibus', valor: 5.00, categoria: 'Transporte' },
  ])
  const [erro, setErro] = useState('')
  const [categoriaFiltro, setCategoriaFiltro] = useState('Todos')

  const adicionarGasto = ({ descricao, valor, categoria }) => {
    if (!descricao || descricao.trim() === '') {
      setErro('A descrição é obrigatória.')
      return
    }

    if (isNaN(valor) || valor <= 0) {
      setErro('O valor deve ser maior que zero.')
      return
    }

    setErro('')
    const novoGasto = {
      id: Date.now(),
      descricao: descricao.trim(),
      valor,
      categoria,
    }

    setGastos([novoGasto, ...gastos])
  }

  const removerGasto = (id) => {
    setGastos(gastos.filter((gasto) => gasto.id !== id))
  }

  const gastosFiltrados = categoriaFiltro === 'Todos'
    ? gastos
    : gastos.filter((gasto) => gasto.categoria === categoriaFiltro)

  return (
    <div className="container">
      <header>
        <h1>Controle de Gastos Pessoais</h1>
      </header>
      <main>
        <TotalGastos gastos={gastosFiltrados} />
        <FormularioGasto aoAdicionarGasto={adicionarGasto} erro={erro} />
        <FiltroGastos categoriaFiltro={categoriaFiltro} aoMudarFiltro={setCategoriaFiltro} />
        <ListaGastos gastos={gastosFiltrados} aoRemoverGasto={removerGasto} />
      </main>
    </div>
  )
}

export default App
