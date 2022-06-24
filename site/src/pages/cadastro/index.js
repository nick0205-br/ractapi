import { PostarAnime } from '../../api/anime.js';
import { useState } from 'react'

export default function Cadastro() {
    const [nome, setNome] = useState('');
    const [sinopse, setSinopse] = useState('');
    const [lancamento, setLancamento] = useState('');

    function salvarClick(){
        PostarAnime(nome, sinopse, lancamento)
        alert('Anime Cadastrado!')
    }
    return (
      <div>
              <div>
                  <h1>
                    Cadastro
                  </h1>
                  <h2>Insira as informações</h2>
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

              <div>
                  <a to='/consulta'>Animes Cadastrados</a>
              </div>
          </div>
    );
  }