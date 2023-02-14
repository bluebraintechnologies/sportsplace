import React from 'react';

import OwlCarousel from '~/components/features/owl-carousel';

import { serviceSlider } from '~/utils/data/carousel';

function ServiceBox(props) {
    return (
        <OwlCarousel adClass="owl-theme" options={serviceSlider}>
            <div className="icon-box icon-box-side slide-icon-box mt-1 mb-1">
                <i className="icon-box-icon d-icon-truck" style={{ fontSize: '4.6rem' }}></i>
                <div className="icon-box-content">
                    <h4 className="icon-box-title">Free Shipping & Return</h4>
                    <p>Free shipping on orders over $99</p>
                </div>
            </div>
            <div className="icon-box icon-box-side slide-icon-box icon-box-support mt-1 mb-1">
                <i className="icon-box-icon d-icon-service"></i>
                <div className="icon-box-content">
                    <h4 className="icon-box-title">Customer Support 24/7</h4>
                    <p>Instant access to perfect support</p>
                </div>
            </div>
            <div className="icon-box icon-box-side slide-icon-box mt-1 mb-1">
                <i className="icon-box-icon d-icon-secure"></i>
                <div className="icon-box-content">
                    <h4 className="icon-box-title">100% Secure Payment</h4>
                    <p>We ensure secure payment!</p>
                </div>
            </div>
        </OwlCarousel>
    )
}

export default React.memo(ServiceBox);