import headerCard from "./headerCards.module.css";

const HeaderCart = () => {
  return (
    <div className={headerCard['flex']}>
      <h3 className={headerCard['title']}>Productos</h3>
      <div className={headerCard['navigation']}>
        <ul className={headerCard['main-nav']}>
          <li className={headerCard['active']}>
            <a data-toggle='tab' href='#tab1'>
              Laptops
            </a>
          </li>
          <li>
            <a data-toggle='tab' href='#tab1'>
              Smartphones
            </a>
          </li>
          <li>
            <a data-toggle='tab' href='#tab1'>
              Cameras
            </a>
          </li>
          <li>
            <a data-toggle='tab' href='#tab1'>
              Accessories
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default HeaderCart;
