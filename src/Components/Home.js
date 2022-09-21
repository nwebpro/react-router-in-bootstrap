import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer/Footer';
import Header from './Header/Navbar';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Header />
            <main>
                <section>
                    <div className="position-relative overflow-hidden p-3 p-md-5 text-center bg-light">
                        <div className="col-md-5 p-lg-5 mx-auto my-5">
                            <h1 className="display-4 fw-normal">Welcome to my nwe website!</h1>
                            <p className="lead fw-normal">And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple’s marketing pages.</p>
                            <Link className="btn btn-outline-secondary" href="#">Coming soon</Link>
                        </div>
                        <div className="product-device shadow-sm d-none d-md-block"></div>
                        <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
                    </div>
                </section>
                <section className="container">
                    <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                        <div className="col">
                            <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
                                <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                                    <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Short title, long jacket</h3>
                                    <ul className="d-flex list-unstyled mt-auto">
                                        <li className="me-auto">
                                            <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white"/>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
                                <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                                    <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Much longer title that wraps to multiple lines</h3>
                                    <ul className="d-flex list-unstyled mt-auto">
                                        <li className="me-auto">
                                            <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white"/>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
                                <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                                    <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Another longer title belongs here</h3>
                                    <ul className="d-flex list-unstyled mt-auto">
                                        <li className="me-auto">
                                            <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white"/>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Home;