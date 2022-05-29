import logoImg from '../images/turners_logo.png';
import MobileNav from './MobileNav.js';

function Nav() {
    return (
        <header>
            <div className="wrapper">
                <div className="logo">
                    <img src={logoImg} width="50" height="50"></img>
                    <a href="#">TurnersCars</a>
                </div>

                <nav>
                    <a href="#">Home</a>
                    <a href="#">About Us</a>
                    <a href="#">Contact Us</a>
                    <a href="#">Login</a>
                    <MobileNav />
                </nav>

            </div>
        </header>
    );
}

export default Nav;