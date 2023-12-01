import colection from "./colectionCard.module.css";

const ColectionCard = () => {
  return (
    <div className={colection["section"]}>
      <div className={colection["container"]}>
        <div className={colection["row"]}>
          <div className={colection["shopContainer"]}>
            <div className={colection["shop"]}>
              <div className={colection["image-container"]}>
                <img
                  className={colection["image"]}
                  src='https://scontent.fmdq3-1.fna.fbcdn.net/v/t39.30808-6/396698165_842860877840212_6680927245225329595_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Fame43tuFt4AX8clj_m&_nc_ht=scontent.fmdq3-1.fna&oh=00_AfCf-S28DHL0Vn0p9Io2qL9iLsVqpfb_-hc6jFFvodOr2w&oe=6560639D'
                  alt=''
                ></img>
              </div>
              <div className={colection["shop-body"]}>
                <h3>
                  Ropa<br></br>Collection
                </h3>
                <a href='#' className={colection["cta-btn"]}>
                  Compra Ahora <i className='fa fa-arrow-circle-right'></i>
                </a>
              </div>
            </div>
          </div>

          <div className={colection["shopContainer"]}>
            <div className={colection["shop"]}>
              <div className={colection["image-container"]}>
                <img
                 className={colection["image"]}
                  src='https://scontent.fmdq3-1.fna.fbcdn.net/v/t39.30808-6/348838157_198579979789953_2461817730469434690_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=pn-cGL8CdSYAX8PumbU&_nc_ht=scontent.fmdq3-1.fna&oh=00_AfAhsIUdeCkv7c9oC9tmqikUB49fE78X3SKfaKouat7B7w&oe=6560E6CF'
                  alt=''
                ></img>
              </div>
              <div className={colection["shop-body"]}>
                <h3>
                  Bejiu<br></br>Collection
                </h3>
                <a href='#' className={colection["cta-btn"]}>
                  Compra Ahora <i className='fa fa-arrow-circle-right'></i>
                </a>
              </div>
            </div>
          </div>

          <div className={colection["shopContainer"]}>
            <div className={colection["shop"]}>
              <div className={colection["image-container"]}>
                <img
                 className={colection["image"]}
                  src='https://scontent.fmdq3-1.fna.fbcdn.net/v/t39.30808-6/321661546_850174679372521_1508386622829578031_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=hpTg3SvRRysAX9hhBGK&_nc_ht=scontent.fmdq3-1.fna&oh=00_AfCiBk43s0ZjZcqoupJSfDh-yc-o8uWCvzAkbADlCcpXJg&oe=65612DB1'
                  alt=''
                ></img>
              </div>
              <div className={colection["shop-body"]}>
                <h3>
                  Accesorios<br></br>Collection
                </h3>
                <a href='#' className={colection["cta-btn"]}>
                  Shop now <i className='fa fa-arrow-circle-right'></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ColectionCard;
