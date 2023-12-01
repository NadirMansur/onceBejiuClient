import card from "./card.module.css";
const Card = () => {
  return (
    <div className={card["product"]}>
      <section>
        <div className={card["shop-img"]}>
          <div className={card["product-label"]}>
            <div className={card["product-label-row"]}>
              <div className={card["sale"]}>
                <span>-30%</span>
              </div>
              <div className={card["new"]}>
                <span>NEW</span>
              </div>
            </div>
            <button className={card["cart"]}>
              <a data-toggle='dropdown' aria-expanded='true'>
                <div className={card["contenido"]}>
                  <i class='fa-solid fa-cart-shopping'></i>
                </div>
              </a>
            </button>
            <button className={card["cart"]}>
              <a data-toggle='dropdown' aria-expanded='true'>
                <div className={card["contenido"]}>
                  <i class='fa-regular fa-heart'></i>
                </div>
              </a>
            </button>
          </div>
          <div className={card["image"]}>
            <img
            className={card["img"]}
              src='https://scontent.fmdq3-1.fna.fbcdn.net/v/t39.30808-6/382600777_821403226652644_4722895409110605870_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Y3QU3LIwXLkAX_YMhNg&_nc_ht=scontent.fmdq3-1.fna&oh=00_AfCJJUjP-19TzEeQiJWI2aKXy7O_SaZAk32kOcHKfox7BA&oe=6560E1D2'
              alt=''
            ></img>
          </div>
        </div>
      </section>
      <section className={card["product-body"]}>
        <section className={card["product-body-top"]}>
          <div className={card["product-categories"]}>
            <div className={card["product-category"]}>
              <p>Category</p>
            </div>
            <div className={card["product-category"]}>
              <p>Category</p>
            </div>
            <div className={card["product-category"]}>
              <p>Category</p>
            </div>
            <div className={card["product-category"]}>
              <p>Category</p>
            </div>
          </div>
        </section>
        <section className={card["product-body-buttom"]}>
          <div className={card["product-name"]}>
            <h3>Mochila</h3>
          </div>
          <h4 className={card["price"]}>
            $980.00 <del className={card["old-price"]}>$990.00</del>
          </h4>
        </section>
        <div className={card["contenedor"]}>
          <button className={card["cart"]}>
            <i className='fa fa-eye'></i>
          </button>
        </div>
      </section>
    </div>
  );
};
export default Card;
