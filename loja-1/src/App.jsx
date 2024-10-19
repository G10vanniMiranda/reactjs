import "./App.css";

import { useState } from "react"

function App() {
  const [nome, setNome] = useState("")
  const [idade, setIdade] = useState("")
  const [email, setEmail] = useState("")
  const [endereço, setEndereço] = useState("")
  const [cidade, setCidade] = useState("")
  const [bairro, setBairro] = useState("")
  const [estado, setEstado] = useState("")

  // endereço
  // cidade
  // bairro
  // estado

  return (
    <div className="container">

      <form>
        <h1>Hello World !</h1>

        <input type="text" placeholder="Nome" value={nome}
          onChange={e => setNome(e.target.value)}
        />

        <input type="number" placeholder="0" value={idade}
          onChange={e => setIdade(e.target.value)}
        />

        <input type="text" placeholder="Email" value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <input type="text" placeholder="Endereço" value={endereço}
          onChange={e => setEndereço(e.target.value)}
        />

        <input type="text" placeholder="Cidade" />

        <p>Nome: {nome} </p>
        <p>Idade: {idade}</p>
        <p>Email: {email}</p>
        <p>Endereço: {endereço}</p>
        <p>Cidade: {cidade}</p>
        <p>Bairro: {bairro}</p>
        <p>Estado: {estado}</p>
      </form>

    </div>
  )
}

export default App
