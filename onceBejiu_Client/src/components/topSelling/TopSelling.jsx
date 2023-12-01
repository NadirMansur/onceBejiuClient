import MiniCard from "./MiniCard.jsx";
import VerticalCarrousel from "../carrousel/VerticalCarrousel.jsx"
import top from "./topSelling.module.css"
const TopSelling = () => {
  return (
    <section className={top['topSelling']}>
      <MiniCard/>
      {/* <VerticalCarrousel direction={"vertical"}/>
      <VerticalCarrousel direction={"vertical"}/>
      <VerticalCarrousel direction={"vertical"}/> */}
    </section>
  );
};
export default TopSelling;
