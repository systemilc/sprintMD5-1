import { useEffect, useState } from "react";
import api from "../../Config/api";
import Card from "./Card";
import '../css/card.css'
import Button from "./Button";

const produtoArr = [];

function GridProdutos() {
  const [listaProdutos, setListaDeProdutos] = useState([]);
  const [pagina, setPagina] = useState(1);
  useEffect(() => {
    api(pagina).then((data) => {
      setListaDeProdutos(produtoArr);
      produtoArr.push(data.products);
    });
  }, [pagina]);

  return (
    <div className="divProdutos">
      <div className="divisor">
       <hr size='2' width='35%' /> TESTE <hr size='2' width='35%' />
       </div>
      {listaProdutos.map((arr) => {
        return arr.map((produto) => {
          return (
            <Card
              key={produto.id}
              nome={produto.name}
              descricao={produto.description}
              imagem={produto.image}
              precoAnterior={produto.oldPrice}
              precoAtual={produto.price}
              parcelas={produto.installments.count}
              valorParcela={produto.installments.value}
            />
          );
        });
      })}
      <Button
        callBack={() => {
          setPagina(pagina + 1);
        }
      } nomeBotao = 'Ainda mais produtos aqui'
      />
    </div>
  );
}

export default GridProdutos;
