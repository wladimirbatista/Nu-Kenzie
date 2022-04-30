import "./header.css"

function Header({logout}) {

    return(
        <header className="header-container">
            <h1>Nu Kenzie</h1>
            <button onClick={logout}>Inicio</button>
        </header>
    )
}

export default Header;