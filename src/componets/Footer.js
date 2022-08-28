import images from "../helpers/images";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <img src={images.logo} alt="logo" className="footer__logo" />
        <div className="footer__icons">
          <img src={images.facebook} alt="facebook" className="footer__icon" />
          <img src={images.twitter} alt="twitter" className="footer__icon" />
          <img
            src={images.pinterest}
            alt="pinterest"
            className="footer__icon"
          />
          <img
            src={images.instagram}
            alt="instagram"
            className="footer__icon"
          />
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__div">
          <h4 className="footer__h4">Our company</h4>
          <p className="footer__p">How we work</p>
          <p className="footer__p">Why Insure?</p>
          <p className="footer__p">View plans</p>
          <p className="footer__p">Reviews</p>
        </div>
        <div className="footer__div">
          <h4 className="footer__h4">Help me</h4>
          <p className="footer__p">FAQ</p>
          <p className="footer__p">Terms of use</p>
          <p className="footer__p">Privacy policy</p>
          <p className="footer__p">Cookies</p>
        </div>
        <div className="footer__div">
          <h4 className="footer__h4">Contact</h4>
          <p className="footer__p">Sales</p>
          <p className="footer__p">Support</p>
          <p className="footer__p">Live chat</p>
        </div>
        <div className="footer__div">
          <h4 className="footer__h4">Others</h4>
          <p className="footer__p">Careers</p>
          <p className="footer__p">Press</p>
          <p className="footer__p">Licenses</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
