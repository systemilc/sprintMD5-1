import React from "react"
import "../css/compartilhe.css"

function Compartilhe ({props}) {
    return(
        <div className="compartilhe">
        <p>Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</p>
        <div className="inputCompartilhar">
        <div className="nome">
            <label>Nome do seu amigo:</label>
            <input type="text"></input>
        </div>
        <div className="email">
            <label>E-mail:</label>
            <input type="email"></input>
        </div>

        </div>
        <button className="enviar">Enviar agora</button>
        </div>
           )
}

export default Compartilhe