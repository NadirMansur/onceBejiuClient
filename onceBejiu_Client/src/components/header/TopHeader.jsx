import topHeader from "./topHeader.module.css";

const TopHeader = () => {
  return (
    <div className={topHeader["top-header"]}>
      <div className={topHeader["container"]}>
        <ul className={`${topHeader["ulLeft"]} ${topHeader["header-links"]}`}>
          <li>
            <i class='fa-solid fa-phone'></i>
            <a href='#'> +021-95-51-84</a>
          </li>
          <li>
            <i class='fa-solid fa-envelope'></i>
            <a href='#'> email@email.com</a>
          </li>
        </ul>
        <ul
          className={`${topHeader["header-links"]} ${topHeader["pull-right"]}`}
        >
          <li>
            <i class='fa-solid fa-user'></i> <a href='#'>Mi Cuenta</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopHeader;
