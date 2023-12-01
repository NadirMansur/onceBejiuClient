import newsLetter from "./newLetter.module.css";
const NewsLetter = () => {
  return (
    <section id='newsletter' className={newsLetter["newsLetter"]}>
      <p>
        Sign Up for the <strong>NEWSLETTER</strong>
      </p>
      <form>
        <input
          className={newsLetter['input']}
          type='email'
          placeholder='Coloca tu Email'
        ></input>
        <button className={newsLetter['search-btn']}>
          <i className='fa fa-envelope'></i> Subscribirme
        </button>
      </form>
      <ul className={newsLetter['newsletter-follow']}>
        <li>
          <a href='#'>
            <i className='fa fa-facebook'></i>
          </a>
        </li>
        <li>
          <a href='#'>
            <i className='fa fa-twitter'></i>
          </a>
        </li>
        <li>
          <a href='#'>
            <i className='fa fa-instagram'></i>
          </a>
        </li>
        <li>
          <a href='#'>
            <i className='fa fa-pinterest'></i>
          </a>
        </li>
      </ul>
    </section>
  );
};
export default NewsLetter;
