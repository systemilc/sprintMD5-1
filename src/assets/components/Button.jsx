import React from "react"
function Button ({nomeBotao, callBack}) {
    return(
        <div className="alinhamentoBtn">
            <button className="btn" onClick={callBack}>{nomeBotao}</button>
            </div>
           )
}

export default Button