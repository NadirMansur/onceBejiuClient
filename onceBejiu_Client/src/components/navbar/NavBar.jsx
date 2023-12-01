import nav from "./navBar.module.css";

const NavBar = () => {
  return (
    <nav className={nav['navigation']}>
      <div className={nav['container']}>
        <div className={nav['responsive-nav']}>
          <ul className={`${nav["main-nav"]} ${nav["nav"]} ${nav["navbar-nav"]}`}>
            <li className={nav['active']}>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#'>Hot Deals</a>
            </li>
            <li>
              <a href='#'>Categories</a>
            </li>
            <li>
              <a href='#'>Laptops</a>
            </li>
            <li>
              <a href='#'>Smartphones</a>
            </li>
            <li>
              <a href='#'>Cameras</a>
            </li>
            <li>
              <a href='#'>Accessories</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
