import "./list.css"
import Card from "./../Card/Card.jsx"
import { useState } from 'react'

function List({listTransactions, deleteCard}) {

    const [filter, setFilter] = useState("Todos")
    
    const filterArray = listTransactions.filter(({inputSelect}) => (filter === "Todos") ? inputSelect !== "Todos" : inputSelect === filter)

    return(
        <nav>
            <div className="nav-header-container">
                <div className="section-title">
                    <h3>Resumo financeiro</h3>
                </div>
                <div className="filter-btns">
                    <button name="Todos" value="Todos" className="btn-todos" onClick={() => setFilter("Todos")}>Todos</button>
                    <button name="Entrada" value="Entrada" className="btn-entrada" onClick={() => setFilter("Entrada")}>Entradas</button>
                    <button name="Despesas" value="Despesas" className="btn-despesas" onClick={() => setFilter("Despesas")}>Despesas</button>
                </div>
            </div>
            <Card deleteCard={deleteCard} filterArray={filterArray}/>
        </nav>
    )
}

export default List;