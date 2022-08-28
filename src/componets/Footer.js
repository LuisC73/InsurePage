import images from "../helpers/images";

function Footer() {
    return ( 
        <footer className="footer">
            <img src={images.logo} alt="logo" className="footer__logo"/>
        </footer>
     );
}

export default Footer;
