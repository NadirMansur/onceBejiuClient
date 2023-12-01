import miniCard from "./miniCard.module.css";

const MiniCard = () => {
  return (
    <div className={miniCard["miniCard"]}>
      <div className={miniCard["image"]}>
        <img
          src='https://scontent.fmdq3-1.fna.fbcdn.net/v/t39.30808-6/382600777_821403226652644_4722895409110605870_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Y3QU3LIwXLkAX_YMhNg&_nc_ht=scontent.fmdq3-1.fna&oh=00_AfCJJUjP-19TzEeQiJWI2aKXy7O_SaZAk32kOcHKfox7BA&oe=6560E1D2'
          alt=''
        ></img>
      </div>
      <div className={miniCard["product-body"]}>
        <div>
          <p className='product-category'>Category</p>
        </div>
        <div>
          <h3 className='product-name'>
            <a href='#'>Mochila</a>
          </h3>
        </div>
        <div className={miniCard["product-price"]}> 
          <h4 >
            $980.00 
          </h4>
          <del class='product-old-price'>$990.00</del>
        </div>
      </div>
      <div className={miniCard["product-btns"]}>
        <button className={miniCard["cart"]}>
          <i className='fa fa-heart-o'></i>
        </button>
        <button className={miniCard["cart"]}>
          <i className='fa fa-eye'></i>
        </button>
        <button className={miniCard["cart"]}>
          <i className='fa fa-shopping-cart'></i>
        </button>
      </div>
    </div>
  );
};

export default MiniCard;
