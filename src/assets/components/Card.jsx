import "../css/produto.css"
function Card({
  nome,
  descricao,
  imagem,
  precoAnterior,
  precoAtual,
  parcelas,
  valorParcela,
}) {
  return (
    <div className="cartao">
      <div>
      <img src={imagem} alt="produto" className="imagem" />
      <p className="nomeProduto">{nome}</p>
      <p className="descricao">{descricao}</p>
      <p className="precoAnterior">{precoAnterior}</p>
      <p className="precoAtual">{precoAtual}</p>
      <p className="parcelas">{`Ou ${parcelas}X de ${valorParcela}`}</p>
      <button className="comprar">Comprar</button>
      </div>
    </div>
  );
}

export default Card;
