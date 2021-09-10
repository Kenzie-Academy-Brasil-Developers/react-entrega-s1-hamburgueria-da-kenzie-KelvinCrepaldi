import "./style.css";
import Product from "../Product";

const MenuContainer = ({ filteredProducts, handleClick }) => {
  return (
    <div className="menu-container" key="">
      {filteredProducts.map((product) => (
        <Product product={product} handleClick={handleClick} />
      ))}
    </div>
  );
};

export default MenuContainer;
