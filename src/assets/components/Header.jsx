import React from "react"
import "../css/Header.css"
import ButtomHeader from "./ButtomHeader"
const Header = ()=>{
    return(
    <div className="container">
        <div className="header">
        <h2 className="h2">Uma seleção de produtos</h2>
        <h1 className="h1">Especial para você</h1>
        <p>Todos os produtos desta lista foram selecionados a partir da sua lista de navegação. Aproveite!</p>
        <ButtomHeader />
        </div>
    </div>
    )
}

export default Header