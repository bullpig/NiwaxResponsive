import "bootstrap/dist/css/bootstrap.min.css";
import './Main.css';
import blog_1 from '../../assets/images/blogs/blog-1.jpg';
import blog_2 from '../../assets/images/blogs/blog-2.jpg';
import blog_3 from '../../assets/images/blogs/blog-3.jpg';
import blog_4 from '../../assets/images/blogs/blog-4.jpg';
import blog_5 from '../../assets/images/blogs/blog-5.jpg';
import blog_6 from '../../assets/images/blogs/blog-6.jpg';




function Main() {
    return (
        <div classNameName="main">

            {/* Breadcrumb */}
            <div class="banner">
                <ul class="item-center">
                    <li><a href="" className="cursor">Home</a></li>
                    <li><a href="" className="cursor">Blog Grid</a></li>
                </ul>
                <div class="bread-title">
                    <h2>Blog Grid</h2>
                </div>
            </div>
            <br />

            {/* Blog Content */}
            <div className="blog-page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6 card-item">
                            <div className="item-image hover-scale">
                                <a href=""><img src={blog_1} alt="blog" /></a>
                                <span className="category-blog"><a href="#">iOs</a> <a href="#">Android</a></span>
                            </div>
                            <div className="item-info">
                                <div className="entry-blog">
                                    <span className="bypost"><a href="#"><i className="fas fa-user"></i> Tom Black</a></span>
                                    <span classNameName="posted-on">
                                        <a href="#"><i className="fas fa-clock"></i> Sep 24, 2019</a>
                                    </span>
                                    <span><a href="#"><i className="fas fa-comment-dots"></i> (23)</a></span>
                                </div>
                                <h4><a href="#">Stock Market App Development - Time, Cost, Features</a></h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 card-item">
                            <div className="item-image hover-scale">
                                <a href=""><img src={blog_2} alt="blog" /></a>
                                <span className="category-blog"><a href="#">iOs</a> <a href="#">Android</a></span>
                            </div>
                            <div className="item-info">
                                <div className="entry-blog">
                                    <span className="bypost"><a href="#"><i className="fas fa-user"></i> Tom Black</a></span>
                                    <span className="posted-on">
                                        <a href="#"><i className="fas fa-clock"></i> Sep 24, 2019</a>
                                    </span>
                                    <span><a href="#"><i className="fas fa-comment-dots"></i> (23)</a></span>
                                </div>
                                <h4><a href="#">Finance App Development - Time, Cost, Features</a></h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 card-item">
                            <div className="item-image hover-scale">
                                <a href=""><img src={blog_3} alt="blog" /></a>
                                <span className="category-blog"><a href="#">Marketing</a> <a href="#">SEM</a></span>
                            </div>
                            <div className="item-info">
                                <div className="entry-blog">
                                    <span className="bypost"><a href="#"><i className="fas fa-user"></i> Tom Black</a></span>
                                    <span className="posted-on">
                                        <a href="#"><i className="fas fa-clock"></i> Sep 24, 2019</a>
                                    </span>
                                    <span><a href="#"><i className="fas fa-comment-dots"></i> (23)</a></span>
                                </div>
                                <h4><a href="#">How to Increase Your ROI Through scientific SEM?</a></h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 card-item">
                            <div className="item-image hover-scale">
                                <a href=""><img src={blog_4} alt="blog" /></a>
                                <span className="category-blog"><a href="#">Marketing</a> <a href="#">SEO</a></span>
                            </div>
                            <div className="item-info">
                                <div className="entry-blog">
                                    <span className="bypost"><a href="#"><i className="fas fa-user"></i> Tom Black</a></span>
                                    <span className="posted-on">
                                        <a href="#"><i className="fas fa-clock"></i> Sep 24, 2019</a>
                                    </span>
                                    <span><a href="#"><i className="fas fa-comment-dots"></i> (23)</a></span>
                                </div>
                                <h4><a href="#">How to Increase Website Traffic Using SEO</a></h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 card-item">
                            <div className="item-image hover-scale">
                                <a href=""><img src={blog_5} alt="blog" /></a>
                                <span className="category-blog"><a href="#">Marketing</a> <a href="#">SEO</a></span>
                            </div>
                            <div className="item-info">
                                <div className="entry-blog">
                                    <span className="bypost"><a href="#"><i className="fas fa-user"></i> Tom Black</a></span>
                                    <span className="posted-on">
                                        <a href="#"><i className="fas fa-clock"></i> Sep 24, 2019</a>
                                    </span>
                                    <span><a href="#"><i className="fas fa-comment-dots"></i> (23)</a></span>
                                </div>
                                <h4><a href="#">How digital transformation has changed the world.</a></h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 card-item">
                            <div className="item-image hover-scale">
                                <a href=""><img src={blog_6} alt="blog" /></a>
                                <span className="category-blog"><a href="#">Marketing</a> <a href="#">SEO</a></span>
                            </div>
                            <div className="item-info">
                                <div className="entry-blog">
                                    <span className="bypost"><a href="#"><i className="fas fa-user"></i> Tom Black</a></span>
                                    <span className="posted-on">
                                        <a href="#"><i className="fas fa-clock"></i> Sep 24, 2019</a>
                                    </span>
                                    <span><a href="#"><i className="fas fa-comment-dots"></i> (23)</a></span>
                                </div>
                                <h4><a href="#">How digital transformation has changed the world.</a></h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Main;