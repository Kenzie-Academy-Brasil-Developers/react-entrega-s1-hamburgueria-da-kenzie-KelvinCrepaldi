import "./style.css";

const CartList = ({ currentSale, cartTotal }) => {
  return (
    <div className="cart-container">
      <h2>Carrinho de compras:</h2>
      <p>Valor total: {cartTotal.toFixed(2)}</p>
      {currentSale.map((element) => (
        <div className="cart-card">
          <h1 className="cart-line">{element.name}</h1>
          <p className="cart-line">
            Categoria: {element.category} - Preço: {element.price}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CartList;
