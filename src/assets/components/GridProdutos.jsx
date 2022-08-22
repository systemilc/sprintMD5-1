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
    <div className="containerProdutos">
    <div className="divProdutos">
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
      
    </div>
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
