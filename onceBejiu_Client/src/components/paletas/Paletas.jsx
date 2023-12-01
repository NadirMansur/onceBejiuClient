import Paleta from "./Paleta.jsx";
import paleta from "./paletas.module.css";
const paletas = () => {
  return (
    <div className={paleta["row"]}>
      <Paleta paleta='a' />
      <Paleta paleta='b' />
      <Paleta paleta='c' />
      <Paleta paleta='d' />
      <Paleta paleta='e' />
    </div>
  );
};
export default paletas;
