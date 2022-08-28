import images from "../helpers/images";

function Navbar() {
    return ( 
        <header className="header">
            <nav className="navbar">
                <figure className="navbar__figure">
                    <img src={images.logo} alt="Logo" className="navbar__img" />
                </figure>
                <ul className="navbar__ul">
                    <li className="navbar__li"><a href="#" className="navbar__a">How we work</a></li>
                    <li className="navbar__li"><a href="#" className="navbar__a">Blog</a></li>
                    <li className="navbar__li"><a href="#" className="navbar__a">Account</a></li>
                    <li className="navbar__li"><a href="#" className="navbar__a navbar__a--btn">View plans</a></li>
                </ul>
            </nav>
        </header>
     );
}

export default Navbar;