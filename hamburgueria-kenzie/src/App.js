import "./App.css";
import { useState } from "react";
import MenuContainer from "./components/MenuContainer";
import FilterBar from "./components/FilterBar";
import CartList from "./components/CartList";

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Hamburguer", category: "Sanduíches", price: 7.99 },
    { id: 2, name: "X-Burguer", category: "Sanduíches", price: 8.99 },
    { id: 3, name: "X-Salada", category: "Sanduíches", price: 10.99 },
    { id: 4, name: "Big Kenzie", category: "Sanduíches", price: 16.99 },
    { id: 5, name: "Guaraná", category: "Bebidas", price: 4.99 },
    { id: 6, name: "Coca", category: "Bebidas", price: 4.99 },
    { id: 7, name: "Fanta", category: "Bebidas", price: 4.99 },
  ]);

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [currentSale, setCurrentSale] = useState([]);

  const showProducts = (filterName) => {
    const filtered = products.filter((obj) =>
      obj.name.toLowerCase().includes(filterName.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const cartTotal = currentSale.reduce((acc, item) => {
    return acc + item.price;
  }, 0);

  const handleClick = (productId) => {
    if (currentSale.find((element) => element.id === productId) === undefined) {
      const product = products.find((element) => element.id === productId);
      setCurrentSale([...currentSale, product]);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <FilterBar showProducts={showProducts} />
        <MenuContainer
          filteredProducts={filteredProducts}
          handleClick={handleClick}
        />
        <CartList currentSale={currentSale} cartTotal={cartTotal} />
      </header>
    </div>
  );
}

export default App;
