import Head from 'next/head'
import React from 'react'

export default function LandingPage() {
    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:200,300,400,700,900|Display+Playfair:200,300,400,700" />
                <link rel="stylesheet" href="fonts/icomoon/style.css" />

                <link rel="stylesheet" href="css/bootstrap.min.css" />
                <link rel="stylesheet" href="css/magnific-popup.css" />
                <link rel="stylesheet" href="css/jquery-ui.css" />
                <link rel="stylesheet" href="css/owl.carousel.min.css" />
                <link rel="stylesheet" href="css/owl.theme.default.min.css" />
                <link rel="stylesheet" href="css/bootstrap-datepicker.css" />
                <link rel="stylesheet" href="fonts/flaticon/font/flaticon.css" />
                <link rel="stylesheet" href="css/aos.css" />
                <link rel="stylesheet" href="css/style.css" />

            </Head>
            <body data-spy="scroll" data-target=".site-navbar-target" data-offset="200" dir="rtl">
                <div className="site-mobile-menu site-navbar-target">
                    <div className="site-mobile-menu-header">
                        <div className="site-mobile-menu-close mt-3">
                            <span className="icon-close2 js-menu-toggle"></span>
                        </div>
                    </div>
                    <div className="site-mobile-menu-body"></div>
                </div>

                <header className="site-navbar py-3 js-site-navbar site-navbar-target" role="banner" id="site-navbar">

                    <div className="container">
                        <div className="row align-items-center">

                            <div className="col-11 col-xl-2 site-logo">
                                <h1 className="mb-0"><a href="index.html" className="text-white h2 mb-0">عالطريق</a></h1>
                            </div>
                            <div className="col-12 col-md-10 d-none d-xl-block">
                                <nav className="site-navigation position-relative text-right" role="navigation">

                                    <ul className="site-menu js-clone-nav mx-auto d-none d-lg-block">
                                        <li><a href="#section-home" className="nav-link">
                                            الرئيسية
                                        </a></li>
                                        <li className="has-children">
                                            <a href="#section-about" className="nav-link">
                                                نبذة عنا
                                            </a>
                                            <ul className="dropdown">
                                                <li><a href="#section-how-it-works" className="nav-link">
                                                    كيف نعمل
                                                </a></li>
                                                <li><a href="#section-our-team" className="nav-link">
                                                    فريقنا
                                                </a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#section-services" className="nav-link">
                                            الخدمات
                                        </a></li>
                                        <li><a href="#section-blog" className="nav-link">
                                            المدونة
                                        </a></li>
                                        <li><a href="#section-contact" className="nav-link">
                                            تواصل معنا
                                        </a></li>
                                        <li><a href="/login" className="nav-link">
                                            تسجيل الدخول
                                        </a></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="d-inline-block d-xl-none ml-md-0 mr-auto py-3" style={{ position: 'relative', top: '3px' }}><a href="#" className="site-menu-toggle js-menu-toggle"><span className="icon-menu h3"></span></a></div>
                        </div>
                    </div>
                </header>
                <div className="site-blocks-cover overlay" style={{ 'background-image': 'url(images/hero_bg_2.jpg)' }} data-aos="fade" data-stellar-background-ratio="0.5" id="section-home">
                    <div className="container">
                        <div className="row align-items-center justify-content-center text-center">

                            <div className="col-md-8" data-aos="fade-up" data-aos-delay="400">


                                <h1 className="text-white font-weight-light text-uppercase font-weight-bold" data-aos="fade-up">We Make Shipping</h1>
                                <p className="mb-5" data-aos="fade-up" data-aos-delay="100">A Logistics Company</p>
                                <p data-aos="fade-up" data-aos-delay="200"><a href="https://free-template.co" className="btn btn-primary py-3 px-5 text-white">Get Started!</a></p>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="site-section" id="section-about">
                    <div className="container">
                        <div className="row mb-5">

                            <div className="col-md-5 ml-auto mb-5 order-md-2" data-aos="fade-up" data-aos-delay="100">
                                <img src="images/img_3.jpg" alt="Image" className="img-fluid rounded" />
                            </div>
                            <div className="col-md-6 order-md-1" data-aos="fade-up">
                                <div className="text-left pb-1 border-primary mb-4">
                                    <h2 className="text-primary">About Us</h2>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis deleniti reprehenderit animi est eaque corporis! Nisi, asperiores nam amet doloribus, soluta ut reiciendis. Consequatur modi rem, vero eos ipsam voluptas.</p>
                                <p className="mb-5">Error minus sint nobis dolor laborum architecto, quaerat. Voluptatum porro expedita labore esse velit veniam laborum quo obcaecati similique iusto delectus quasi!</p>

                                <ul className="ul-check list-unstyled success">
                                    <li>Error minus sint nobis dolor</li>
                                    <li>Voluptatum porro expedita labore esse</li>
                                    <li>Voluptas unde sit pariatur earum</li>
                                </ul>

                            </div>

                        </div>
                    </div>
                </div>

                <div className="site-section bg-image overlay" style={{ 'background-image': "url('images/hero_bg_4.jpg')" }} id="section-how-it-works">
                    <div className="container">
                        <div className="row justify-content-center mb-5">
                            <div className="col-md-7 text-center border-primary">
                                <h2 className="font-weight-light text-primary" data-aos="fade">How It Works</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="100">
                                <div className="how-it-work-item">
                                    <span className="number">1</span>
                                    <div className="how-it-work-body">
                                        <h2>Make An Order</h2>
                                        <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt praesentium dicta consectetur fuga neque fugit a at. Cum quod vero assumenda iusto.</p>
                                        <ul className="ul-check list-unstyled success">
                                            <li className="text-white">Error minus sint nobis dolor</li>
                                            <li className="text-white">Voluptatum porro expedita labore esse</li>
                                            <li className="text-white">Voluptas unde sit pariatur earum</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="200">
                                <div className="how-it-work-item">
                                    <span className="number">2</span>
                                    <div className="how-it-work-body">
                                        <h2>Make A Payment</h2>
                                        <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt praesentium dicta consectetur fuga neque fugit a at. Cum quod vero assumenda iusto.</p>
                                        <ul className="ul-check list-unstyled success">
                                            <li className="text-white">Error minus sint nobis dolor</li>
                                            <li className="text-white">Voluptatum porro expedita labore esse</li>
                                            <li className="text-white">Voluptas unde sit pariatur earum</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="300">
                                <div className="how-it-work-item">
                                    <span className="number">3</span>
                                    <div className="how-it-work-body">
                                        <h2>Track Your Order</h2>
                                        <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt praesentium dicta consectetur fuga neque fugit a at. Cum quod vero assumenda iusto.</p>
                                        <ul className="ul-check list-unstyled success">
                                            <li className="text-white">Error minus sint nobis dolor</li>
                                            <li className="text-white">Voluptatum porro expedita labore esse</li>
                                            <li className="text-white">Voluptas unde sit pariatur earum</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="site-section border-bottom" id="section-our-team">
                    <div className="container">
                        <div className="row justify-content-center mb-5">
                            <div className="col-md-7 text-center border-primary">
                                <h2 className="font-weight-light text-primary" data-aos="fade">Our Team</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="100">
                                <div className="person">
                                    <img src="images/person_1.jpg" alt="Image" className="img-fluid rounded mb-5 w-75 rounded-circle" />
                                    <h3>Christine Rooster</h3>
                                    <p className="position text-muted">Co-Founder, President</p>
                                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
                                    <ul className="ul-social-circle">
                                        <li><a href="#"><span className="icon-facebook"></span></a></li>
                                        <li><a href="#"><span className="icon-twitter"></span></a></li>
                                        <li><a href="#"><span className="icon-linkedin"></span></a></li>
                                        <li><a href="#"><span className="icon-instagram"></span></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="200">
                                <div className="person">
                                    <img src="images/person_2.jpg" alt="Image" className="img-fluid rounded mb-5 w-75 rounded-circle" />
                                    <h3>Brandon Sharp</h3>
                                    <p className="position text-muted">Co-Founder, COO</p>
                                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
                                    <ul className="ul-social-circle">
                                        <li><a href="#"><span className="icon-facebook"></span></a></li>
                                        <li><a href="#"><span className="icon-twitter"></span></a></li>
                                        <li><a href="#"><span className="icon-linkedin"></span></a></li>
                                        <li><a href="#"><span className="icon-instagram"></span></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="300">
                                <div className="person">
                                    <img src="images/person_4.jpg" alt="Image" className="img-fluid rounded mb-5 w-75 rounded-circle" />
                                    <h3>Connor Hodson</h3>
                                    <p className="position text-muted">Marketing</p>
                                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
                                    <ul className="ul-social-circle">
                                        <li><a href="#"><span className="icon-facebook"></span></a></li>
                                        <li><a href="#"><span className="icon-twitter"></span></a></li>
                                        <li><a href="#"><span className="icon-linkedin"></span></a></li>
                                        <li><a href="#"><span className="icon-instagram"></span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>





                <div className="site-section bg-light" id="section-services">
                    <div className="container">
                        <div className="row justify-content-center mb-5" data-aos="fade-up">
                            <div className="col-md-7 text-center border-primary">
                                <h2 className="mb-0 text-primary">Our Services</h2>
                                <p className="color-black-opacity-5">Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className="row align-items-stretch">
                            <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up">
                                <div className="unit-4 d-flex">
                                    <div className="unit-4-icon mr-4"><span className="text-primary flaticon-plane"></span></div>
                                    <div>
                                        <h3>Air Freight</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                                        <p><a href="#">Learn More</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay="100">
                                <div className="unit-4 d-flex">
                                    <div className="unit-4-icon mr-4"><span className="text-primary flaticon-boat-ship"></span></div>
                                    <div>
                                        <h3>Ocean Freight</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                                        <p><a href="#">Learn More</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay="200">
                                <div className="unit-4 d-flex">
                                    <div className="unit-4-icon mr-4"><span className="text-primary flaticon-truck"></span></div>
                                    <div>
                                        <h3>Land Transportation</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                                        <p><a href="#">Learn More</a></p>
                                    </div>
                                </div>
                            </div>


                            <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay="300">
                                <div className="unit-4 d-flex">
                                    <div className="unit-4-icon mr-4"><span className="text-primary flaticon-warehouse"></span></div>
                                    <div>
                                        <h3>Warehousing</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                                        <p><a href="#">Learn More</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay="400">
                                <div className="unit-4 d-flex">
                                    <div className="unit-4-icon mr-4"><span className="text-primary flaticon-wooden"></span></div>
                                    <div>
                                        <h3>Storage</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                                        <p><a href="#">Learn More</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay="500">
                                <div className="unit-4 d-flex">
                                    <div className="unit-4-icon mr-4"><span className="text-primary flaticon-worldwide"></span></div>
                                    <div>
                                        <h3>Worldwide Delivery</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                                        <p><a href="#">Learn More</a></p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="site-blocks-cover overlay inner-page-cover" style={{ 'background-image': "url(images/hero_bg_2.jpg)", 'background-attachment': "fixed" }}>
                    <div className="container">
                        <div className="row align-items-center justify-content-center text-center">

                            <div className="col-md-7" data-aos="fade-up">
                                <a href="https://vimeo.com/channels/staffpicks/93951774" className="play-single-big mb-4 d-inline-block popup-vimeo"><span className="icon-play"></span></a>
                                <h2 className="text-white font-weight-light mb-5 h1">Watch The Video</h2>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="site-section" id="section-blog">
                    <div className="container">
                        <div className="row justify-content-center mb-5">
                            <div className="col-md-7 text-center border-primary">
                                <h2 className="font-weight-light text-primary">Our Blog</h2>
                                <p className="color-black-opacity-5">See Our Daily News &amp; Updates</p>
                            </div>
                        </div>
                        <div className="row mb-5 align-items-stretch">
                            <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up">
                                <div className="h-entry">
                                    <a href="single.html"><img src="images/blog_1.jpg" alt="Image" className="img-fluid" /></a>
                                    <h2 className="font-size-regular"><a href="single.html">How Logistics Company Improve Spendings</a></h2>
                                    <div className="meta mb-4">by Jed Wilson <span className="mx-2">&bullet;</span> Jan 18, 2019 <span className="mx-2">&bullet;</span> <a href="#">News</a></div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay="100">
                                <div className="h-entry">
                                    <a href="single.html"><img src="images/blog_2.jpg" alt="Image" className="img-fluid" /></a>
                                    <h2 className="font-size-regular"><a href="single.html">How Logistics Company Improve Spendings</a></h2>
                                    <div className="meta mb-4">by Jed Wilson <span className="mx-2">&bullet;</span> Jan 18, 2019 <span className="mx-2">&bullet;</span> <a href="#">News</a></div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay="200">
                                <div className="h-entry">
                                    <a href="single.html"><img src="images/blog_3.jpg" alt="Image" className="img-fluid" /></a>
                                    <h2 className="font-size-regular"><a href="single.html">How Logistics Company Improve Spendings</a></h2>
                                    <div className="meta mb-4">by Jed Wilson <span className="mx-2">&bullet;</span> Jan 18, 2019 <span className="mx-2">&bullet;</span> <a href="#">News</a></div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 text-center" data-aos="fade-up" data-aos-delay="300">
                                <p className="mb-0"><a href="https://free-template.co" className="btn btn-primary py-3 px-5 text-white">View All Blog Posts</a></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="site-section bg-light" id="section-contact">
                    <div className="container">
                        <div className="row justify-content-center mb-5">
                            <div className="col-md-7 text-center border-primary">
                                <h2 className="font-weight-light text-primary">Contact Us</h2>
                                <p className="color-black-opacity-5">See Our Daily News &amp; Updates</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-7 mb-5">



                                <form action="#" className="p-5 bg-white">


                                    <div className="row form-group">
                                        <div className="col-md-6 mb-3 mb-md-0">
                                            <label className="text-black" for="fname">First Name</label>
                                            <input type="text" id="fname" className="form-control" />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="text-black" for="lname">Last Name</label>
                                            <input type="text" id="lname" className="form-control" />
                                        </div>
                                    </div>

                                    <div className="row form-group">

                                        <div className="col-md-12">
                                            <label className="text-black" for="email">Email</label>
                                            <input type="email" id="email" className="form-control" />
                                        </div>
                                    </div>

                                    <div className="row form-group">

                                        <div className="col-md-12">
                                            <label className="text-black" for="subject">Subject</label>
                                            <input type="subject" id="subject" className="form-control" />
                                        </div>
                                    </div>

                                    <div className="row form-group">
                                        <div className="col-md-12">
                                            <label className="text-black" for="message">Message</label>
                                            <textarea name="message" id="message" cols="30" rows="7" className="form-control"></textarea>
                                        </div>
                                    </div>

                                    <div className="row form-group">
                                        <div className="col-md-12">
                                            <input type="submit" value="Send Message" className="btn btn-primary py-2 px-4 text-white" />
                                        </div>
                                    </div>


                                </form>
                            </div>
                            <div className="col-md-5">

                                <div className="p-4 mb-3 bg-white">
                                    <p className="mb-0 font-weight-bold">Address</p>
                                    <p className="mb-4">203 Fake St. Mountain View, San Francisco, California, USA</p>

                                    <p className="mb-0 font-weight-bold">Phone</p>
                                    <p className="mb-4"><a href="#">+1 232 3235 324</a></p>

                                    <p className="mb-0 font-weight-bold">Email Address</p>
                                    <p className="mb-0"><a href="#">youremail@domain.com</a></p>

                                </div>

                                <div className="p-4 mb-3 bg-white">
                                    <h3 className="h5 text-black mb-3">More Info</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ad iure porro mollitia architecto hic consequuntur. Distinctio nisi perferendis dolore, ipsa consectetur? Fugiat quaerat eos qui, libero neque sed nulla.</p>
                                    <p><a href="#" className="btn btn-primary px-4 py-2 text-white">Learn More</a></p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


                <footer className="site-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9">
                                <div className="row">
                                    <div className="col-md-5 mr-auto">
                                        <h2 className="footer-heading mb-4">About Us</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam iure deserunt ut architecto dolores quo beatae laborum aliquam ipsam rem impedit obcaecati ea consequatur.</p>
                                    </div>

                                    <div className="col-md-3">
                                        <h2 className="footer-heading mb-4">Quick Links</h2>
                                        <ul className="list-unstyled">
                                            <li><a href="#">About Us</a></li>
                                            <li><a href="#">Services</a></li>
                                            <li><a href="#">Testimonials</a></li>
                                            <li><a href="#">Contact Us</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-3">
                                        <h2 className="footer-heading mb-4">Follow Us</h2>
                                        <a href="#" className="pl-0 pr-3"><span className="icon-facebook"></span></a>
                                        <a href="#" className="pl-3 pr-3"><span className="icon-twitter"></span></a>
                                        <a href="#" className="pl-3 pr-3"><span className="icon-instagram"></span></a>
                                        <a href="#" className="pl-3 pr-3"><span className="icon-linkedin"></span></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <h2 className="footer-heading mb-4">Subscribe Newsletter</h2>
                                <form action="#" method="post">
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control border-secondary text-white bg-transparent" placeholder="Enter Email" aria-label="Enter Email" aria-describedby="button-addon2" />
                                        <div className="input-group-append">
                                            <button className="btn btn-primary text-white" type="button" id="button-addon2">Send</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="row pt-5 mt-5 text-center">
                            <div className="col-md-12">
                                <div className="border-top pt-5">
                                    <p>
                                        Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </footer>

                <script src="js/jquery-3.3.1.min.js"></script>
                <script src="js/jquery-migrate-3.0.1.min.js"></script>
                <script src="js/jquery-ui.js"></script>
                <script src="js/jquery.easing.1.3.js"></script>
                <script src="js/popper.min.js"></script>
                <script src="js/bootstrap.min.js"></script>
                <script src="js/owl.carousel.min.js"></script>
                <script src="js/jquery.stellar.min.js"></script>
                <script src="js/jquery.countdown.min.js"></script>
                <script src="js/jquery.magnific-popup.min.js"></script>
                <script src="js/bootstrap-datepicker.min.js"></script>
                <script src="js/aos.js"></script>

                <script src="js/main.js"></script>

            </body>
        </>
    )
}
