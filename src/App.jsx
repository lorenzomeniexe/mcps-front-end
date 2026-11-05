import { useState } from 'react'
import FormularioGasto from './components/FormularioGasto'
import ListaGastos from './components/ListaGastos'
import TotalGastos from './components/TotalGastos'
import './App.css'

function App() {
  const [gastos, setGastos] = useState([
    { id: 1, descricao: 'Almoço', valor: 35.50, categoria: 'Alimentação' },
    { id: 2, descricao: 'Ônibus', valor: 5.00, categoria: 'Transporte' },
  ])
  const [erro, setErro] = useState('')

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

  return (
    <div className="container">
      <header>
        <h1>Controle de Gastos Pessoais</h1>
      </header>
      <main>
        <TotalGastos gastos={gastos} />
        <FormularioGasto aoAdicionarGasto={adicionarGasto} erro={erro} />
        <ListaGastos gastos={gastos} aoRemoverGasto={removerGasto} />
      </main>
    </div>
  )
}

export default App
