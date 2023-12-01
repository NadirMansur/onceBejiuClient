import ShoppingCart from "../../shoppingCart/ShoppingCart.jsx";
import cart from "./myCart.module.css";
const MyCart = () => {
  return (
    <div className={cart["contenedor"]}>
      <div className={cart["cart"]}>
        <a
          data-toggle='dropdown'
          aria-expanded='true'
        >
          <div className={cart["contenido"]}>
            <i class='fa-solid fa-cart-shopping'></i>
            <span>Carrito</span>
          </div>
        </a>
        {/* <ShoppingCart></ShoppingCart> */}
      </div>
      <div className={cart["cant"]}>
        <span className={cart["span2"]}>3</span>
      </div>
    </div>
  );
};

export default MyCart;
