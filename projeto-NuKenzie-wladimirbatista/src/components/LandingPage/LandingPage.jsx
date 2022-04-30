import "./landingpage.css"
import logo from "./logo.png";

function LandingPage({homeEnter}) {

    return(
        <div className="LandingPage">
            <div className="main-box">
                <div className="form-box">
                    <form className="form">
                        <h2>Nu Kenzie</h2>
                        <h1>Centralize o controle das suas finanças</h1>
                        <p>de forma rápida e segura</p>
                        <button onClick={homeEnter}>Iniciar</button>
                    </form>
                </div>
                <div className="logo-box">
                    <figure className="image-logo">
                        <img src={logo} alt="logo"/>
                    </figure>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;