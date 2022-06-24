import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='Mae'>
            <div>
                <h1>
                    Insira as informações
                </h1>
                <div>
                    <label>Nome</label>
                    <input value={nome} onChange={e => setNome(e.target.value)}></input>

                    <label>Sinopse</label>
                    <input value={sinopse} onChange={e => setSinopse(e.target.value)}></input>

                    <label>Lançamento</label>
                    <input value={lancamento} onChange={e => setLancamento(e.target.value)}></input>
                </div>
                <button onClick={salvarClick}>Salvar</button>
            </div>
        </div>
  );
}

export default App;
