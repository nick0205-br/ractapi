import { con } from "./connection.js"

export async function inserirAnime(anime){
    const comando = 
    `
    insert into tb_listaanimes(nm_nome, ds_sinopse, dt_lancamento)
    values(?, ?, ?);
    `
    const [resposta] = await con.query(comando, [anime.nome, anime.sinopse, anime.lancamento])
    return resposta;
}

export async function consultarAnimes(){
    const comando = 
    `
    select * from tb_listaanimes 
    `
    const [resposta] = await con.query(comando)
    return resposta;
}
