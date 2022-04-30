import "./totalmoney.css"

function TotalMoney({listTransactions}) {

    const entrada = listTransactions.filter(({inputSelect}) => inputSelect === "Entrada")
    const despesas = listTransactions.filter(({inputSelect}) => inputSelect === "Despesas")
    const valorTotal = entrada.reduce(((acumulador, objetoAtual) => acumulador + objetoAtual.inputValue), 0) + despesas.reduce(((acumulador, objetoAtual) => acumulador - objetoAtual.inputValue), 0)

    return(
        <div className="div-container">
            <div className="texto">
                <h3>Valor total:</h3>
            </div>
            <div className="valor">
                <p>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(valorTotal)}</p>
            </div>
        </div>
    )
}

export default TotalMoney;