import { useEffect } from "react";

import { useState } from 'react';



export default function Consulta(){
    const [animes] = useState([]);
    return(
        <div>
            {animes.map(item => 
                <tr>
                    <td>
                        {item.nome}
                    </td>
                </tr>
                )}

                <div>
                    <a to='/'>Cadastrar novo</a>
                </div>
        </div>
    )
}