import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";
import logo from "../../assets/images/logo.png"
import badges_a from './../../assets/images/badges/badges-a.png';
import badges_b from './../../assets/images/badges/badges-b.png';
import badges_c from './../../assets/images/badges/badges-c.png';
import badges_d from './../../assets/images/badges/badges-d.png';
import blog_small from './../../assets/images/blogs/blog-small.jpg';

function Footer() {
    return (
        <div className="footer">

            <div className="footer-1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 email-center">
                            <h3>Get New Insights Weekly</h3>
                            <p>News letter dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Enter your
                                email</p>
                        </div>

                        <div className="col-lg-6 email-center">
                            <div className="email-form">
                                <form>
                                    <input type="email" className="email-input" placeholder="Email Your Address" />
                                    <button className="sub-button">Subcribe &gt;</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 footer-2-center">
                            <a href="#" className="footer-2-logo"><img src={logo}></img></a>
                            <p>News letter dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Enter your
                                email</p>
                            <div className="bg-btn"><a href="#" className="footer-2-btn">Become Partner &gt;<span className="circle"></span></a></div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <h5>Contact Us</h5>
                            <ul className="address-list">
                                <li>
                                    <span><i class="fas fa-envelope"></i></span>
                                    <p>Email <span> <a href="mailto:info@businessname.com">info@businessname.com</a></span></p>
                                </li>

                                <li>
                                    <span><i class="fas fa-phone-alt"></i></span>
                                    <p>Phone <span> <a href="tel:+10000000000">+1 0000 000 000</a></span></p>
                                </li>

                                <li>
                                    <span><i class="fas fa-map-marker-alt"></i></span>
                                    <p>Address <span> 123 Business Centre London SW1A 1AA</span></p>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-2 col-sm-6">
                            <h5>Company</h5>
                            <ul className="address-list link-hover">
                                <li><a href="">Contact</a></li>
                                <li><a href="">Customer's FAQ</a></li>
                                <li><a href="">Refund Policy</a></li>
                                <li><a href="">Privacy Policy</a></li>
                                <li><a href="">Terms and Conditions</a></li>
                                <li><a href="">License &amp; Copyright</a></li>
                            </ul> 
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <h5>Latest Blogs</h5>
                            <div className="sigle-blog">
                                <div className="post-thumb"><a href=""><img src={blog_small}></img></a></div>
                                <div className="sigle-blog-content">
                                    <span class="post-date"><i class="far fa-clock"></i>April 15, 2020</span>
                                    <h6 class="title"><a href="">We Provide you Best &amp; Creative Consulting Service</a>
                                    </h6>
                                </div>
                            </div>

                            <div className="sigle-blog">
                                <div className="post-thumb"><a href=""><img src={blog_small}></img></a></div>
                                <div className="sigle-blog-content">
                                    <span class="post-date"><i class="far fa-clock"></i>April 15, 2020</span>
                                    <h6 class="title"><a href="">We Provide you Best &amp; Creative Consulting Service</a>
                                    </h6>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div className="footer-3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 item-center">
                            <h5>Top App Development Companies</h5>
                            <p>News letter dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Enter
                                your email</p>
                        </div>

                        <div className="col-lg-8 item-center">
                            <ul className="badges">
                                <li><a href="#"><img src={badges_a} alt="" /></a></li>
                                <li><a href="#"><img src={badges_b} alt="" /></a></li>
                                <li><a href="#"><img src={badges_c} alt="" /></a></li>
                                <li><a href="#"><img src={badges_d} alt="" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-4">
                <div className="footer-4-container">
                    <div className="brand-logo">
                        <a href=""><i className="fab fa-facebook"></i></a>
                        <a href=""><i className="fab fa-twitter"></i></a>
                        <a href=""><i className="fab fa-instagram"></i></a>
                        <a href=""><i className="fab fa-linkedin"></i></a>
                        <a href=""><i className="fab fa-youtube"></i></a>
                        <a href=""><i className="fab fa-pinterest-p"></i></a>
                        <a href=""><i className="fab fa-vimeo-v"></i></a>
                        <a href=""><i className="fab fa-dribbble"></i></a>
                        <a href=""><i className="fab fa-behance"></i></a>
                    </div>
                    <br />
                    <br />
                    <p>© 2020-2022. All Rights Reserved By Rajesh Doot</p>
                </div>
            </div>


        </div>
    )
}

export default Footer;