import HeaderCards from "./HeaderCards.jsx";
import cards from "./cards.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Carrousel from "../carrousel/Carrousel.jsx"
const Cards = () => {



  return (
    <div className={cards["section"]}>
      <div className={cards["container"]}>
        <div className={cards["column"]}>
          <HeaderCards></HeaderCards>
          <div className={cards["row"]}>
            <Carrousel direction="horizontal"></Carrousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
