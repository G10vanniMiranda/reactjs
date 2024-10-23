import "./Employee.css"
import { useState } from "react"
// [] array, {} objeto, number, string, boolean, date
export function Employee() {
    const url = "http://localhost:3000/usuario"
    const [employee, setEmplyee] = useState([])

    fetch(url, {
        method: "GET",
        headers: { "Content-Type": "Application/json"}
    })
    .then( resp => resp.json()  )
    .then( data => { setEmplyee(data) } )
    return(
        <div className="card">
            <h1>Lista de Funcionarios</h1>
            { employee.map( item => (
                <div className="card-item" key={ item.id }>
                    <p> { item.nome } </p>
                    <p> { item.telefone } </p>
                    <p> { item.email } </p>
                </div>
            ))
            }
        </div>
    )
}