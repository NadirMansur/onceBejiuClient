import topFooter from "./topFooter.module.css";

const TopFooter = () => {
  return (
    <section className={topFooter["section"]}>
      <div className={topFooter["about"]}>
        <h3 className='footer-title'>About Us</h3>
        <div className={topFooter["aboutUs"]}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut.
          </p>
          <ul className={topFooter["list"]}>
            <li>
              <a href='#'>
                <i className='fa fa-map-marker'></i>1734 Stonecoal Road
              </a>
            </li>
            <li>
              <a href='#'>
                <i className='fa fa-phone'></i>+021-95-51-84
              </a>
            </li>
            <li>
              <a href='#'>
                <i className='fa fa-envelope-o'></i>email@email.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='links'>
        <h3 className='footer-title'>Information</h3>
        <ul className={topFooter["list"]}>
          <li>
            <a href='#'>About Us</a>
          </li>
          <li>
            <a href='#'>Contact Us</a>
          </li>
          <li>
            <a href='#'>Privacy Policy</a>
          </li>
          <li>
            <a href='#'>Orders and Returns</a>
          </li>
          <li>
            <a href='#'>Terms & Conditions</a>
          </li>
        </ul>
      </div>

      <div className='Service'>
        <h3 className='footer-title'>Service</h3>
        <ul className={topFooter["list"]}>
          <li>
            <a href='#'>My Account</a>
          </li>
          <li>
            <a href='#'>View Cart</a>
          </li>
          <li>
            <a href='#'>Wishlist</a>
          </li>
          <li>
            <a href='#'>Track My Order</a>
          </li>
          <li>
            <a href='#'>Help</a>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default TopFooter;
