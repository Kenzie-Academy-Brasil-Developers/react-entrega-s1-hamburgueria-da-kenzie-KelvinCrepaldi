import "./style.css";

const Product = ({ product, handleClick }) => {
  return (
    <div className="product" key={product.id}>
      <h1>{product.name}</h1>
      <span className="_product-categoria">Categoria - {product.category}</span>
      <span className="_product-preco">Preço: {product.price}</span>
      <button
        className="_product-botao"
        onClick={() => handleClick(product.id)}
      >
        Adicionar
      </button>
    </div>
  );
};

export default Product;
