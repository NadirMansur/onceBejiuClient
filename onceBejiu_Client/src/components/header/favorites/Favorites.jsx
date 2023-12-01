import fav from "./favorites.module.css";

const Favorites = () => {
  return (
    <div className={fav["contenedor"]}>
      <div className={fav["cart"]}>
        <a data-toggle='dropdown' aria-expanded='true'>
          <div className={fav["contenido"]}>
            <i class='fa-regular fa-heart'></i>
            <span>Favoritos</span>
          </div>
        </a>
        {/* <ShoppingCart></ShoppingCart> */}
      </div>
      <div className={fav["cant"]}>
        <span className={fav["span2"]}>2</span>
      </div>
    </div>
  );
};
export default Favorites;
