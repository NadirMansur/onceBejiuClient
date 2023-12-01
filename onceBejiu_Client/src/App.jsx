//import { useState } from "react";

import main from "./App.module.css";
import Header from "./components/header/Header.jsx";
import NavBar from "./components/navbar/NavBar.jsx";
import ColectionCard from "./components/collections/ColectionCard.jsx";
import Cards from "./components/cards/Cards.jsx";
import TopSelling from "./components/topSelling/TopSelling.jsx";
import NewsLetter from "./components/newsletter/NewsLetter.jsx";
import Footer from "./components/footer/Footer.jsx";
import Paletas from "./components/paletas/Paletas.jsx";

function App() {
  //  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <NavBar />
      <ColectionCard />
      <Cards />
      <TopSelling />
      <NewsLetter />
      <Footer />
      <Paletas />
    </div>
  );
}

export default App;
