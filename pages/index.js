import Head from 'next/head'
import React, { useEffect } from 'react'
import { } from 'next'
import Link from 'next/link'

export default function LandingPage() {
    const history =
        useEffect(() => {
            document.body.setAttribute("data-spy", "scroll")
            document.body.setAttribute("data-target", ".site-navbar-target")
            document.body.setAttribute("data-offset", "200")
            document.body.setAttribute("dir", "rtl")
        }, [])
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
                                    <li>
                                        <Link href="/login" className="nav-link">
                                            تسجيل الدخول
                                        </Link>
                                    </li>
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


                            <h1 className="text-white font-weight-light text-uppercase font-weight-bold" data-aos="fade-up">
                                نقوم بالتوصيل
                            </h1>
                            <p className="mb-5" data-aos="fade-up" data-aos-delay="100"></p>
                            <p data-aos="fade-up" data-aos-delay="200"><a href="/register" className="btn btn-primary py-3 px-5 text-white">البدء معنا</a></p>

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
                            <div className="text-right pb-1 mb-4">
                                <h2 className="text-primary">
                                    نبذة عنا
                                </h2>
                            </div>
                            <p className='text-right'>
                                على طريقك عبارة عن منصة إلكترونية تأسس "على طريقك " في السعودية في 2022 وهو تطبيق متخصص فى خدمات التوصيل بين المدن أون لاين للأشخاص الذين يريدون السفر او ارسال أي غرض  من خلال مندوبين التوصيل، بحسب الموقع. يتيح التطبيق للعملاء الاختيار من بين مجموعة من مندوبين التوصيل حسب السعر الذي يحدده المندوبين أنفسهم.وايضا عرض  ... يعمل التطبيق لتغطية جميع المدن السعودية  .
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            <div className="site-section bg-image overlay" style={{ 'background-image': "url('images/hero_bg_4.jpg')" }} id="section-how-it-works">
                <div className="container">
                    <div className="row justify-content-center mb-5">
                        <div className="col-md-7 text-center border-primary">
                            <h2 className="font-weight-light text-primary" data-aos="fade">
                                كيف نعمل
                            </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="100">
                            <div className="how-it-work-item text-right">
                                <span className="number">1</span>
                                <div className="how-it-work-body">
                                    <h2>
                                        طلب خدمة
                                    </h2>
                                    <p className="mb-5">يقوم المستخدم بتسجيل الدخول (تسجيل مرسل )</p>
                                    <ul className="ul-check list-unstyled success">
                                        <li className="text-white">
                                            من ايقونة طلب خدمة يتم تعبئة نموذج يختار وسيلة تنقل لراكب (ذكر او انثى) او طرد او وثيقة
                                            مدينة الارسال مدينة الاستقبال تاريخ ووقت الخدمة, ملاحظات
                                        </li>
                                        <li className="text-white">
                                            يتم حفظ الخدمة وبعد اتمام العملية مباشرة يظهر للمرسل اذا وجد أي وسيلة نقل تنطبق عليه الشروط المدخلة اعلاه
                                        </li>
                                        <li className="text-white">
                                            يستطيع المرسل تقيم وسيلة النقل بعد كل عملية توصيل
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="200">
                            <div className="how-it-work-item text-right">
                                <span className="number">2</span>
                                <div className="how-it-work-body">
                                    <h2>
                                        تقديم الخدمة
                                    </h2>
                                    <p className="mb-5">
                                        يقوم المستخدم بتسجيل الدخول (وسيلة  نقل)
                                    </p>
                                    <ul className="ul-check list-unstyled success">
                                        <li className="text-white">
                                            بنفس الية طلب الخدمة
                                        </li>
                                        <li className="text-white">
                                            يكون لكل مستخدم بروفايل خاص يتم عرض فيه الاسم صورة والمعلومات الشخصية يمكن للمستخدمين عرض تفاصيل البروفايل
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="300">
                            <div className="how-it-work-item text-right">
                                <span className="number">3</span>
                                <div className="how-it-work-body">
                                    <h2>البحث عن خدمة او عن تقديم خدمة</h2>
                                    <p className="mb-5">
                                        يقوم المستخدم بتسجيل الدخول
                                    </p>
                                    <ul className="ul-check list-unstyled success">
                                        <li className="text-white">عرض الطلبات الخاصة بالمستخدم</li>
                                        <li className="text-white">تعديل تقييم الخدمة</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="site-section bg-light" id="section-services">
                <div className="container">
                    <div className="row justify-content-center mb-5" data-aos="fade-up">
                        <div className="col-md-7 text-center border-primary">
                            <h2 className="mb-0 text-primary">
                                خدماتنا
                            </h2>
                        </div>
                    </div>
                    <div className="row align-items-stretch text-right">
                        <div className='col-md-2'></div>
                        <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay="500">
                            <div className="unit-4 d-flex">
                                <div className="unit-4-icon ml-4"><span className="text-primary flaticon-worldwide"></span></div>
                                <div>
                                    <h3>التنقل بين المدن بأسعار مناسبه</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up">
                            <div className="unit-4 d-flex">
                                <div className="unit-4-icon ml-4"><span className="text-primary flaticon-plane"></span></div>
                                <div>
                                    <h3>توصيل جميع أنواع المنتجات</h3>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-2'></div>
                        <div className='col-md-2'></div>
                        <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay="100">
                            <div className="unit-4 d-flex">
                                <div className="unit-4-icon ml-4"><span className="text-primary flaticon-boat-ship"></span></div>
                                <div>
                                    <h3>تغطية شاملة </h3>
                                    <p>نظام على طريقك يعمل على تغطية كافة مدن المملكة</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay="200">
                            <div className="unit-4 d-flex">
                                <div className="unit-4-icon ml-4"><span className="text-primary flaticon-truck"></span></div>
                                <div>
                                    <h3>الدفع عند الأستلام</h3>
                                    <p>يوفر على طريقك عدة طرق للدفع ومنها الدفع عند الأستلام</p>
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
                            <a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAE2NYxD3no&#x2F;watch?embed" className="play-single-big mb-4 d-inline-block popup-vimeo"><span className="icon-play"></span></a>
                            <h2 className="text-white font-weight-light mb-5 h1">
                                مشاهدة الفيديو
                            </h2>

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
                                    <h2 className="footer-heading mb-4 text-right">
                                        نبذة عنا
                                    </h2>
                                    <p className='text-right'>
                                        على طريقك عبارة عن منصة إلكترونية تأسس "على طريقك " في السعودية في 2022 وهو تطبيق متخصص فى خدمات التوصيل بين المدن أون لاين للأشخاص الذين يريدون السفر او ارسال أي غرض  من خلال مندوبين التوصيل، بحسب الموقع. يتيح التطبيق للعملاء الاختيار من بين مجموعة من مندوبين التوصيل حسب السعر الذي يحدده المندوبين أنفسهم.وايضا عرض  ... يعمل التطبيق لتغطية جميع المدن السعودية  .
                                    </p>
                                </div>

                                <div className="col-md-3">
                                    <h2 className="footer-heading mb-4">
                                        روابط سريعة
                                    </h2>
                                    <ul className="list-unstyled">
                                        <li><a href="#">تبذة عنا</a></li>
                                        <li><a href="#">خدماتنا</a></li>
                                    </ul>
                                </div>
                                <div className="col-md-3">
                                    <h2 className="footer-heading mb-4">تابعنا</h2>
                                    <a href="#" className="pl-0 pr-3"><span className="icon-facebook"></span></a>
                                    <a href="#" className="pl-3 pr-3"><span className="icon-twitter"></span></a>
                                    <a href="#" className="pl-3 pr-3"><span className="icon-instagram"></span></a>
                                    <a href="#" className="pl-3 pr-3"><span className="icon-linkedin"></span></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">

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
        </>
    )
}
