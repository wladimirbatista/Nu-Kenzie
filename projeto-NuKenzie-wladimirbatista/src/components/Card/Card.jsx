import "./card.css"
import { FaTrash } from "react-icons/fa"

function Card({deleteCard, filterArray}) {

    return(
        <div>
            <ul>
                {filterArray.map((transactions, index) => (
                    <li className={transactions.inputSelect === "Entrada" ? "list-container border-green" : "list-container border-grey"}  key={index}>
                        <div>
                            <h3>{transactions.inputDescription}</h3>
                            <small>{transactions.inputSelect}</small>
                        </div>
                        <span>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(transactions.inputValue)}</span>
                        <button onClick={() => deleteCard(index)}>
                            <FaTrash/>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Card;