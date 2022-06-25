import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:5000'
})

function PostarAnime(nome, sinopse, lancamento){
    const resposta = api.post('/anime/', {
        nome: nome,
    })
    return resposta.data;
}

function RequisitarAnimes(){
    const resposta = api.get('/consulta')
    return resposta.data;
}

export { PostarAnime, RequisitarAnimes}
