import React from "react"
import "../css/FormIndex.css"
const Form = () => {
    return(
        <div className="containerForm">
            <div className="textForm">
                <h2>Ajude o algorítimo a ser mais certeiro</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio amet minus molestias possimus, asperiores delectus sapiente, recusandae, repellat ducimus voluptates error praesentium dignissimos officia nostrum et illum assumenda vero iure.</p>
            </div>

            <div className="formForm">
                <label>Nome</label>
                 <input></input>
                 <label>E-mail</label>
                 <input type='email'></input>
                 <label>CPF</label>
                 <input></input>
                 <div className="radiosForm">
                    <input type="radio" value="Masculino" name="genero" />Masculino
                    <input type="radio" value="Feminino" name="genero" />Feminino
                 </div>
                <button>Enviar</button>
            </div>
        </div>
    )
}

export default Form