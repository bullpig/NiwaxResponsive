import "bootstrap/dist/css/bootstrap.min.css";
import './Header.css';
import './HeaderResponsive.css';
import logo from "../../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAngleDown,
    faBars,
    faEnvelopeOpenText,
    faPhone,
    faXmark,
  } from "@fortawesome/free-solid-svg-icons";


function Header() {
    const changeNavColor = () => {
        if (
          document.body.scrollTop > 50 ||
          document.documentElement.scrollTop > 50
        ) {
          document.getElementById("header").style.background = "#fff";
          document.getElementById("header").classList.add("shadow");
        } else {
          document.getElementById("header").style.background = "none";
          document.getElementById("header").classList.remove("shadow");
        }
      };
      window.onscroll = () => {
        changeNavColor();
      };

    return (
        <div class="header">
            <div className="menu-header shadow" id="header">
                <div className="web-logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="menu-navbar d-flex">
                    <ul className="no-decor">
                        <li className="">
                            <a href="#" className="menu-link cursor">homes</a>
                            <div className="submenu-general submenu-center shadow">
                                <div className="row">

                                    <div className="col">
                                        <span className="submenu-home">Multi-Page Demo</span>
                                        <div className="row">
                                            <div className="col">
                                                <ul className="no-decor">
                                                    <hr />
                                                    <li><a href="#">All Demo <span className="badge bg-primary">New</span></a></li>
                                                    <li><a href="#">Digital Agency</a></li>
                                                    <li><a href="#">Digital Agency V2</a></li>
                                                    <li><a href="#">Digital Agency V3</a></li>
                                                    <li><a href="#">Web Design Agency</a></li>
                                                    <li><a href="#">Digital Marketing</a></li>
                                                    <li><a href="#">Lead Generation Agency</a></li>
                                                    <li><a href="#">Landing Page V1</a></li>
                                                    <li><a href="#">Landing Page V2</a></li>
                                                </ul>
                                            </div>

                                            <div className="col">
                                                <ul className="no-decor">
                                                    <hr />
                                                    <li><a href="#">Freelance Portfolio</a></li>
                                                    <li><a href="#">App Development Agency</a></li>
                                                    <li><a href="#">Minimal Portfolio</a></li>
                                                    <li><a href="#">Creative Agency</a></li>
                                                    <li><a href="#">Branding Agency</a></li>
                                                    <li><a href="#">Modern Agency</a></li>
                                                    <li><a href="#">Business &amp; Startup</a></li>
                                                    <li><a href="#">Graphic Studio</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <span className="submenu-home">One-Page Demo</span>
                                        <div className="row">

                                            <div className="col">
                                                <ul className="no-decor">
                                                    <hr />
                                                    <li><a href="#">Digital Agency</a></li>
                                                    <li><a href="#">Digital Agency Dark</a></li>
                                                    <li><a href="#">Web Design Agency</a></li>
                                                    <li><a href="#">Web Design Agency Dark</a></li>
                                                    <li><a href="#">Digital Marketing</a></li>
                                                    <li><a href="#">Digital Marketing Dark</a></li>
                                                    <li><a href="#">Lead Generation Agency</a></li>
                                                    <li><a href="#">Lead Generation Agency Dark</a></li>
                                                    <li><a href="#">Freelance Portfolio</a></li>
                                                </ul>
                                            </div>

                                            <div className="col">
                                                <ul className="no-decor">
                                                    <hr />
                                                    <li><a href="#">Freelancer v2</a></li>
                                                    <li><a href="#">App Development Agency</a></li>
                                                    <li><a href="#">Minimal Portfolio</a></li>
                                                    <li><a href="#">Creative Agency</a></li>
                                                    <li><a href="#">Branding Agency</a></li>
                                                    <li><a href="#">Modern Agency</a></li>
                                                    <li><a href="#">Business &amp; Startup</a></li>
                                                    <li><a href="#">Graphic Studio</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </li>

                        <li className="">
                            <a href="#" className="menu-link cursor">pages</a>
                            <div className="submenu-general submenu-center shadow">
                                <div className="row">

                                    <div className="col">
                                        <ul className="no-decor">
                                            <li><a href="#">About Us</a></li>
                                            <li><a href="#">About Us V2</a></li>
                                            <li><a href="#">Why Us</a></li>
                                            <li><a href="#">Our Team</a></li>
                                            <li><a href="#">Team Single</a></li>
                                            <li><a href="#">Case Study</a></li>
                                            <li><a href="#">Case Study Single</a></li>
                                        </ul>
                                    </div>

                                    <div className="col">
                                        <ul className="no-decor">
                                            <li><a href="#">Mission &amp; Vision</a></li>
                                            <li><a href="#">Development Process</a></li>
                                            <li><a href="#">Client Reviews</a></li>
                                            <li><a href="#">Our Clients</a></li>
                                            <li><a href="#">Contact Us</a></li>
                                            <li><a href="#">Contact Us 2</a></li>
                                            <li><a href="#">Contact Us 3</a></li>
                                        </ul>
                                    </div>

                                    <div className="col">
                                        <ul className="no-decor">
                                            <li><a href="#">Login Page</a></li>
                                            <li><a href="#">Service Card</a></li>
                                            <li><a href="#">Service Web</a></li>
                                            <li><a href="#">Service Mobile App</a></li>
                                            <li><a href="#">Service Digital Marketing</a></li>
                                            <li><a href="#">Service Graphic</a></li>
                                        </ul>
                                    </div>

                                    <div className="col">
                                        <ul className="no-decor">
                                            <li><a href="#">Careers</a></li>
                                            <li><a href="#">Shop Single</a></li>
                                            <li><a href="#">Shop Details</a></li>
                                            <li><a href="#">Shop Cart</a></li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </li>

                        <li className="">
                            <a href="#" className="menu-link cursor">shortcodes</a>
                            <div className="submenu-general submenu-center shadow">
                                <div className="row">
                                    <div className="col">
                                        <ul className="no-decor">
                                            <li><a href="#">Pricing</a></li>
                                            <li><a href="#">Typography</a></li>
                                            <li><a href="#">Buttons</a></li>
                                            <li><a href="#">Office Location</a></li>
                                        </ul>
                                    </div>

                                    <div className="col">
                                        <ul className="no-decor">
                                            <li><a href="#">FAQs</a></li>
                                            <li><a href="#">Tabs</a></li>
                                            <li><a href="#">404 Page</a></li>
                                            <li><a href="#">Background Gradients</a></li>
                                        </ul>
                                    </div>

                                    <div className="col">
                                        <ul className="no-decor">
                                            <li><a href="#">Header v1</a></li>
                                            <li><a href="#">Header v2</a></li>
                                            <li><a href="#">Header v3</a></li>
                                            <li><a href="#">Footer</a></li>
                                        </ul>
                                    </div>

                                    <div className="col">
                                        <ul className="no-decor">
                                            <li><a href="#">Hover Animation</a></li>
                                            <li><a href="#">Popup Modal</a></li>
                                            <li><a href="#">Lists</a></li>
                                            <li><a href="#">Boostrap Components</a></li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </li>

                        <li className="">
                            <a href="#" className="menu-link cursor">portfolio</a>
                            <ul className="submenu-general submenu-right shadow">
                                <li><a href="#">Portfolio Grid 1</a></li>
                                <li><a href="#">Portfolio Grid 2</a></li>
                                <li><a href="#">Portfolio Wide Block</a></li>
                                <li><a href="#">Portfolio Wide Block v2</a></li>
                                <li><a href="#">Portfolio Details</a></li>
                            </ul>
                        </li>

                        <li className="">
                            <a href="#" className="menu-link cursor">blogs</a>
                            <ul className="submenu-general submenu-right shadow">
                                <li><a href="#">Blog Grid 1</a></li>
                                <li><a href="#">Blog Grid 2</a></li>
                                <li><a href="#">Blog Right Sidebar</a></li>
                                <li><a href="#">Blog Left Sidebar</a></li>
                                <li><a href="#">Blog Single</a></li>
                            </ul>
                        </li>

                        <ul className="menu-button">
                            <li>
                                <a href="#" className="btn-round cursor no-border-bottom">
                                    <i className="fa fa-bars"></i>
                                </a>
                            </li>

                            <li>
                                <a href="#" className="quote cursor no-border-bottom">
                                    Request A Quote
                                </a>
                            </li>

                            <li>
                                <div className="dark-mode no-border-bottom">
                                    <input type="checkbox">
                                    </input>
                                </div>
                            </li>
                        </ul>
                    </ul>
                </div>
                {/* Mobile Menu */}

                <input className="menu-checkbox" type="checkbox" id="nav-mobile-menu" hidden>
                </input>
                <label for="nav-mobile-menu" className="mobile-menu">
                    <FontAwesomeIcon icon={faBars} size="2x"/>
                </label>

                <label for="nav-mobile-menu" className="nav-overlay"></label>
                
                <div className="mobile-nav">

                    <div className="main-nav">
                        <div className="nav-title">
                            <h2 className="nav-title">Niwax Menu</h2>
                            <label for="nav-mobile-menu" className="nav-mobile-close">
                                <FontAwesomeIcon icon={faXmark} size="2x" />
                            </label>
                        </div>

                        <ul class="nav-mobile-list">
                            <li className="nav-parent">
                                <a href="#" className="nav-mobile-link">Home</a>
                            </li>
                            <li className="nav-parent">
                                <a href="#" className="nav-mobile-link">Pages</a>
                            </li>
                            <li className="nav-parent">
                                <a href="#" className="nav-mobile-link">Shortcodes</a>
                            </li>
                            <li className="nav-parent">
                                <a href="#" className="nav-mobile-link">Portfolio</a>
                            </li>
                            <li className="nav-parent">
                                <a href="#" className="nav-mobile-link">Blog</a>
                            </li>
                        </ul>

                    </div>

                </div> 
            </div>      
        </div>
    );
}

export default Header;