import { useEffect } from "react";
import { RequisitarAnimes } from "../../api/anime.js"
import { useState } from 'react';



export default function Consulta(){
    const [animes, setAnimes] = useState([]);

    function carregarAnimes(){
        const x = RequisitarAnimes();
        setAnimes(x)
    }
    useEffect(() => {
        carregarAnimes();
    },[]);

    return(
        <div>
            {animes.map(item => 
                <tr>
                    <td>
                        {item.nome}
                    </td>
                    <td>
                        {item.sinopse}
                    </td>
                    <td>
                        {item.lancamento}
                    </td>
                </tr>
                )}

                <div>
                    <a to='/'>Cadastrar novo</a>
                </div>
        </div>
    )
}