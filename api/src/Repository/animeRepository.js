import { con } from "./connection.js"

export async function inserirAnime(anime){
    const comando = 
    `
    insert into tb_listaanimes(nm_nome)
    values(?);
    `
    const [resposta] = await con.query(comando, [anime])
    
    return resposta;
}

export async function consultarAnimesPorID(id){
    const comando = 
    `
    select * from tb_listaanimes 
    WHERE id_anime= ?;
    `
    const [resposta] = await con.query(comando, [id])
    return resposta;
}
