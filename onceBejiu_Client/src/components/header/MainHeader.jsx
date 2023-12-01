import Logo from "./logo/Logo.jsx";
import SearchBar from "./searchBar/SearchBar.jsx";
import Account from "./Account.jsx";
import mainHeader from "./mainHeader.module.css";

const MainHeader = () => {
  return (
    <div className={mainHeader["header"]}>
      <div className={mainHeader["row"]}>
        <Logo></Logo>
        <SearchBar></SearchBar>
        <Account></Account>
      </div>
    </div>
  );
};

export default MainHeader;
