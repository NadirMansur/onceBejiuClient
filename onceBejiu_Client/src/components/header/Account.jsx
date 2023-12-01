import Favorites from "./favorites/Favorites";
import MyCart from "./myCart/MyCart.jsx";
import account from "./account.module.css";

const Account = () => {
  return (
      <div className={account['account']}>
        <Favorites></Favorites>
        <MyCart></MyCart>
      </div>
  );
};

export default Account;
