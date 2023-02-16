import ALink from '~/components/features/custom-link';
import ServiceBox from '../partials/home/service-section';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <ServiceBox />
                </div>

                <div className="footer-middle">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="widget">
                                <h4 className="widget-title">Get to know us</h4>
                                <ul className="widget-body">
                                    <li><a href="#" onClick={(e) => e.preventDefault()}>About Sports Place</a></li>
                                    <li><a href="#" onClick={(e) => e.preventDefault()}>Careers</a></li>
                                    <li><a href="#" onClick={(e) => e.preventDefault()}>Affiliate Program</a></li>
                                    <li><a href="#" onClick={(e) => e.preventDefault()}>Show Hosts</a></li>
                                    <li><a href="#" onClick={(e) => e.preventDefault()}>Sports Place Cares</a></li>
                                    <li><a href="#" onClick={(e) => e.preventDefault()}>Submit Your Product</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="widget">
                                <h4 className="widget-title">Account</h4>
                                <ul className="widget-body">
                                    <li><ALink href="/pages/account">My Account</ALink></li>
                                    <li><a href="#" onClick={(e) => e.preventDefault()}>Our Guarantees</a></li>
                                    <li><a href="#" onClick={(e) => e.preventDefault()}>Terms And Conditions</a></li>
                                    <li><a href="#" onClick={(e) => e.preventDefault()}>Privacy Policy</a></li>
                                    <li><a href="#" onClick={(e) => e.preventDefault()}>Intellectual Property Claims</a></li>
                                    <li><a href="#" onClick={(e) => e.preventDefault()}>Site Map</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="widget">
                                <h4 className="widget-title">Get Help</h4>
                                <ul className="widget-body">
                                    <li><a href="#" onClick={(e) => e.preventDefault()}>Shipping & Delivery</a></li>
                                    <li><a href="#" onClick={(e) => e.preventDefault()}>Order Status</a></li>
                                    <li><a href="#" onClick={(e) => e.preventDefault()}>Brand</a></li>
                                    <li><a href="#" onClick={(e) => e.preventDefault()}>Returns</a></li>
                                    <li><a href="#" onClick={(e) => e.preventDefault()}>Payment Options</a></li>
                                    <li><ALink href="/pages/contact-us">Contact Us</ALink></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="widget">
                                <h4 className="widget-title">Contact Info</h4>
                                <ul className="widget-body">
                                    <li><ALink href="/pages/about-us">About Us</ALink></li>
                                    <li><a href="#" onClick={(e) => e.preventDefault()}>Order History</a></li>
                                    <li><a href="#" onClick={(e) => e.preventDefault()}>Returns</a></li>
                                    <li><a href="#" onClick={(e) => e.preventDefault()}>Custom Service</a></li>
                                    <li><a href="#" onClick={(e) => e.preventDefault()}>Terms & Condition</a></li>
                                    <li><a href="#" onClick={(e) => e.preventDefault()}>Track My Order</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p className="copyright text-center w-100">Sports Place eCommerce &copy; 2023. All Rights Reserved</p>
                </div>
            </div>
        </footer>
    )
}