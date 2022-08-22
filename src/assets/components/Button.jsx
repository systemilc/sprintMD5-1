import React from "react"
function Button ({nomeBotao, callBack}) {
    return(
            <button className="btn" onClick={callBack}>{nomeBotao}</button>
           )
}

export default Button