import React from 'react';

import Reveal from "react-awesome-reveal";
import { LazyLoadImage } from 'react-lazy-load-image-component';

// import Custom Components
import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';

import { introSlider } from '~/utils/data/carousel';
import { fadeInRightShorter, blurIn } from '~/utils/data/keyframes';

function IntroSection() {
    return (
        <OwlCarousel adClass="intro-slider owl-theme owl-nav-fade owl-dot-inner" options={introSlider}>
            <div className="banner banner-fixed intro-slide1" style={{ backgroundColor: "#fff" }}>
                <figure>
                    <LazyLoadImage
                        src="./images/home/slides/1.jpg"
                        alt="Intro Slider"
                        effect="opacity"
                        width="auto"
                        height="798"
                    />
                </figure>

                <div className="banner-content y-50">
                    <Reveal keyframes={fadeInRightShorter} delay={200} duration={1200}>
                        <h4 className="banner-subtitle mb-1 font-weight-normal text-uppercase">Accessories</h4>
                        <Reveal keyframes={fadeInRightShorter} delay={400} duration={1600}>

                            <h3 className="banner-title font-weight-bold">Shop Personalize your Galaxy Watches</h3>
                        </Reveal>

                        <p className="font-primary ls-m text-dark lh-1">Free returns extended to 30 days after
                                    delivery</p>
                        <ALink href="/shop" className="btn btn-dark">Shop now<i
                            className="d-icon-arrow-right"></i></ALink>
                    </Reveal>
                </div>
            </div>

            <div className="banner banner-fixed intro-slide2" style={{ backgroundColor: "#fff" }}>
                <figure>
                    <LazyLoadImage
                        src="./images/home/slides/2.jpg"
                        alt="Intro Slider"
                        effect="opacity"
                        width="auto"
                        height="798"
                    />
                </figure>

                <div className="container">
                    <div className="banner-content">
                        <Reveal keyframes={blurIn} delay={200} duration={1200}>
                            <h3 className="banner-title ls-m">Experience jaw-dropping detail and resolution</h3>
                            <p className="font-primary ls-m text-dark">Real 8K resolution with Quantum Processor 8K</p>
                            <ALink href="/shop" className="btn btn-dark">Shop now<i
                                className="d-icon-arrow-right"></i></ALink>
                        </Reveal>
                    </div>
                </div>
            </div>
        </OwlCarousel >
    )
}

export default React.memo(IntroSection);