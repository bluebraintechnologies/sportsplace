import React from 'react';

function CtaSection() {
    return (
        <section className="newsletter-section bg-primary pt-lg-4 pb-lg-4">
            <div className="container">
                <div className="form-wrapper form-wrapper-inline newsletter-form">
                    <div className="icon-box icon-box-side mb-4 mb-lg-0">
                        <div className="icon-box-content">
                            <h4 className="icon-box-title text-white">Subscribe to the newsletter</h4>
                            <p className="text-white">Stay up to date regarding the newest product & offers.
                                    </p>
                        </div>
                    </div>
                    <form action="#" method="get" className="input-wrapper input-wrapper-inline">
                        <input type="email" className="form-control font-primary " name="email" id="email"
                            placeholder="Enter Your E-mail Address..." required="" />
                        <button className="btn btn-dark text-uppercase" type="submit">Subscribe<i
                            className="d-icon-arrow-right"></i></button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default React.memo(CtaSection);