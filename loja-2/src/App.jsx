import './App.css';
// import { CadastroProduto } from "./pages/CadastroProduto"
import { CadastroCliente } from "./pages/CadastroCliente"
import { Nav } from "./components/Nav"

function App() {

  return (
    <div className=''>
      <Nav />
      
      {/* <CadastroProduto /> */}
      <CadastroCliente />

      <footer>
        <h3>Footer</h3>
      </footer>

    </div>
  )
}

export default App
