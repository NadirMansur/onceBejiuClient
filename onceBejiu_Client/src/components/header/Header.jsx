import TopHeader from "./TopHeader.jsx";
import MainHeader from "./MainHeader.jsx";
import header from "./header.module.css"

const Header = () => {
  return (
    <header className={header['header']}>
      <TopHeader></TopHeader>
      <MainHeader></MainHeader>
    </header>
  );
};

export default Header;
