import './App.css';
import { useState } from 'react';
import LandingPage from "./components/LandingPage/LandingPage.jsx"
import Header from "./components/Header/Header.jsx"
import Form from "./components/Form/Form.jsx"
import TotalMoney from './components/TotalMoney/TotalMoney.jsx';
import List from "./components/List/List.jsx"

function App() {

  const [listTransactions, setListTransactions] = useState([])
  const [enterHome, setEnterHome] = useState(0)

  const homeEnter = () => { setEnterHome(1) }
  const logout = () => { setEnterHome(0) }

  const deleteCard = (card) => {
    setListTransactions(listTransactions.filter((transactions, index) => index !== card))
  }
 
  return (
    <>
      {enterHome === 0 ? (
        <LandingPage homeEnter={homeEnter}/>

      ) : (
        <div className="App">
          <Header logout={logout}/>
          <main className='App-Main'>
            <section className='App-Section'>
              <Form listTransactions={listTransactions} setListTransactions={setListTransactions}/>
              <TotalMoney listTransactions={listTransactions}/>
            </section>
            <List listTransactions={listTransactions} deleteCard={deleteCard}/>
          </main>
        </div>
      )}
    </>
  );
}

export default App;
