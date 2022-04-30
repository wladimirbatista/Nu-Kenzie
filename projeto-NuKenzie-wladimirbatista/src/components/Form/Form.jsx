import { useState } from "react";
import "./form.css"

function Form({listTransactions, setListTransactions}) {

    const [inputDescription, setInputDescription] = useState()
    const [inputValue, setInputValue] = useState()
    const [inputSelect, setInputSelect] = useState("Entrada")

    const submitInformation = (event) => {
        event.preventDefault()
        setListTransactions([...listTransactions, {inputDescription: inputDescription, inputValue: inputValue, inputSelect: inputSelect}])
    }

    return(
        <form className="form-container" onSubmit={submitInformation}>
            <p className="paragrafo-descricao">Descrição</p>
            <input type="text" placeholder="Digite aqui a sua descrição" value={inputDescription} onChange={(event) => setInputDescription(event.target.value)}/>
            <small>Ex: Compra de roupas</small>
            <div className="input-container">
                <div className="input-box">
                    <p>Valor</p>
                    <input required="required" type="number" step="0.01" placeholder="1                R$" value={inputValue} onChange={(event) => setInputValue(Number(event.target.value))}/>
                </div>
                <div className="select-box">
                    <p>Tipo de valor</p>
                    <select value={inputSelect} onChange={(event) => setInputSelect(event.target.value)}>
                        <option value="Entrada">Entrada</option>
                        <option value="Despesas">Despesas</option>
                    </select>
                </div>
            </div>
            <button>Inserir valor</button>
        </form>
    )
}

export default Form;