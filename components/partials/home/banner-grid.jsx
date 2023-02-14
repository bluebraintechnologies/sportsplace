import React from 'react';
import Reveal from "react-awesome-reveal";
import { useRef, useEffect } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';

// import Custom Components
import ALink from '~/components/features/custom-link';

import { fadeInLeftShorter, fadeIn, fadeInRightShorter, fadeInUpShorter } from '~/utils/data/keyframes';

export default function BannerGrid() {
    const ref = useRef();
    let iso;

    useEffect(() => {
        isotopeLoad();
    }, [])

    async function isotopeLoad() {
        const Isotope = (await import('isotope-layout')).default;
        iso = new Isotope(ref.current, {
            itemSelector: '.grid-item',
            layoutMode: 'masonry',
            masonry: {
                columnWidth: '.grid-space'
            }
        });
    }

    return (
        <section className="container-fluid featured-banner-section mt-10 pt-lg-6">
            <h3 className="text-center font-weight-bold">Featured</h3>
            <div className="row grid banner-grid gutter-sm" ref={ref}>
                <div className="grid-item col-md-4 w-1-3 h-2-3">
                    <Reveal keyframes={fadeInLeftShorter} delay={500} duration={1200} className="h-100" triggerOnce>
                        <div className="banner banner-fixed overlay-light">
                            <figure style={{ backgroundColor: '#96979B' }}>
                                <LazyLoadImage
                                    src="./images/home/banner/2.jpg"
                                    alt="banner"
                                    effect="opacity"
                                    width="586"
                                    height="462"
                                />
                            </figure>
                            <div className="banner-content bottom text-center">
                                <h5 className="banner-subtitle font-weight-normal text-uppercase mb-1 text-white">Home
                                        Appliances</h5>
                                <h3 className="banner-title text-white ls-m mb-1">FTPS Coffee Maker</h3>
                            </div>
                        </div>
                    </Reveal>
                </div>
                <div className="grid-item col-md-4 w-1-3 h-2-3">
                    <Reveal keyframes={fadeIn} delay={300} duration={1200} className="h-100" triggerOnce>
                        <div className="banner banner-fixed overlay-light">
                            <figure style={{ backgroundColor: '#F5F6FB' }}>
                                <LazyLoadImage
                                    src="./images/home/banner/3.jpg"
                                    alt="banner"
                                    effect="opacity"
                                    width="586"
                                    height="462"
                                />
                            </figure>
                            <div className="banner-content bottom text-center">
                                <h5 className="banner-subtitle font-weight-normal text-uppercase mb-1 text-dark">From
                                        Sumsung</h5>
                                <h3 className="banner-title text-dark ls-m mb-1">Introducing Riode Camera 10</h3>
                            </div>
                        </div>
                    </Reveal>
                </div>
                <div className="grid-item col-md-4 w-1-3 h-2-3">
                    <Reveal keyframes={fadeInRightShorter} delay={300} duration={1200} className="h-100" triggerOnce>
                        <div className="banner banner-fixed overlay-light">
                            <figure style={{ backgroundColor: '#EBC218' }}>
                                <LazyLoadImage
                                    src="./images/home/banner/4.jpg"
                                    alt="banner"
                                    effect="opacity"
                                    width="586"
                                    height="462"
                                />
                            </figure>
                            <div className="banner-content bottom text-center">
                                <h5 className="banner-subtitle font-weight-normal text-uppercase mb-1 text-white">Latest Model</h5>
                                <h3 className="banner-title text-white ls-m mb-1">Apple Headphone</h3>
                            </div>
                        </div>
                    </Reveal>
                </div>
                <div className="grid-item col-sm-6 col-md-7 w-7-12 h-1">
                    <Reveal keyframes={fadeInUpShorter} delay={300} duration={1200} className="h-100" triggerOnce>
                        <div className="banner banner-fixed overlay-light">
                            <figure style={{ backgroundColor: '#40403F' }}>
                                <LazyLoadImage
                                    src="./images/home/banner/5.jpg"
                                    alt="banner"
                                    effect="opacity"
                                    width="1031"
                                    height="699"
                                />
                            </figure>
                            <div className="banner-content bottom text-center">
                                <h3 className="banner-title text-tertiary text-uppercase ls-m mb-5">From SONY<br /><em
                                    className="d-block mt-2 text-white text-normal">2020 TVs & SOUND BARS</em></h3>
                            </div>
                        </div>
                    </Reveal>
                </div>
                <div className="grid-item col-sm-6 col-md-5 w-5-24 h-1-2">
                    <Reveal keyframes={fadeInLeftShorter} delay={700} duration={1000} className="h-100" triggerOnce>
                        <div className="banner banner-fixed overlay-light banner-camera">
                            <figure style={{ backgroundColor: '#3D3C3A' }}>
                                <LazyLoadImage
                                    src="./images/home/banner/6.jpg"
                                    alt="banner"
                                    effect="opacity"
                                    width="365"
                                    height="345"
                                />
                            </figure>
                            <div className="banner-content top d-flex align-items-center justify-content-center">
                                <h3 className="text-secondary ls-m scale-95 mt-2 mb-2">8K</h3>
                                <h4 className="text-capitalize font-weight-normal ls-m scale-95 mt-2 mb-2"><span
                                    className="d-block ls-m mb-1">Trade in your current</span>Camera</h4>
                            </div>
                        </div>
                    </Reveal>
                </div>
                <div className="grid-item col-sm-6 col-md-5 w-5-24 w-edge-2-12 h-1-2">
                    <Reveal keyframes={fadeInLeftShorter} delay={500} duration={1000} className="h-100" triggerOnce>
                        <div className="banner banner-fixed overlay-light">
                            <figure style={{ backgroundColor: '#EAEBEF' }}>
                                <LazyLoadImage
                                    src="./images/home/banner/7.jpg"
                                    alt="banner"
                                    effect="opacity"
                                    width="365"
                                    height="345"
                                />
                            </figure>
                            <div className="banner-content bottom text-center">
                                <h5 className="banner-subtitle text-uppercase mb-1 text-body">Accessories</h5>
                                <h3 className="banner-title text-dark ls-m mb-1">Electric Watches</h3>
                            </div>
                        </div>
                    </Reveal>
                </div>
                <div className="grid-item col-sm-6 col-md-5 col-lg-5 w-5-12 h-1">
                    <Reveal keyframes={fadeInUpShorter} delay={300} duration={1000} className="h-100" triggerOnce>
                        <div className="banner banner-fixed overlay-light">
                            <figure style={{ backgroundColor: '#B6B6B8' }}>
                                <LazyLoadImage
                                    src="./images/home/banner/8.jpg"
                                    alt="banner"
                                    effect="opacity"
                                    width="740"
                                    height="699"
                                />
                            </figure>
                            <div className="banner-content top text-center">
                                <h5 className="banner-subtitle font-weight-normal mt-md-10 mb-2 text-dark scale-95">
                                    Quality portable sound</h5>
                                <h3
                                    className="banner-title banner-title-lg font-weight-bold text-dark text-uppercase scale-95 mb-0">
                                    Laptop Notebook</h3>
                                <p className="banner-description-lg font-weight-semi-bold font-primary text-dark">
                                    Introducing Xiaomi Pro Enhanced</p>
                            </div>
                        </div>
                    </Reveal>
                </div>
                <div className="grid-item col-sm-6 col-md-7 w-9-24 h-1-2">
                    <Reveal keyframes={fadeInRightShorter} delay={500} duration={1000} className="h-100" triggerOnce>
                        <div className="banner banner-fixed banner-speaker overlay-light">
                            <figure style={{ backgroundColor: '#F1F1F1' }}>
                                <LazyLoadImage
                                    src="./images/home/banner/9.jpg"
                                    alt="banner"
                                    effect="opacity"
                                    width="656"
                                    height="345"
                                />
                            </figure>
                            <div className="banner-content y-50 text-right">
                                <LazyLoadImage
                                    className="ml-auto mb-4"
                                    src="./images/home/banner/9-1.jpg"
                                    alt="banner"
                                    effect="opacity"
                                    width="121"
                                    height="71"
                                />
                                <h5 className="banner-subtitle text-primary-dark font-weight-normal scale-95 mb-0">
                                    Quality portable sound</h5>
                                <h3 className="banner-title text-primary-dark font-weight-bold text-uppercase mb-6">
                                    Speakers</h3>
                                <ALink href="/shop"
                                    className="btn btn-link text-primary-dark font-weight-semi-bold">Read
                                        More<i className="d-icon-arrow-right"></i></ALink>
                            </div>
                        </div>
                    </Reveal>
                </div>
                <div className="grid-item col-sm-6 col-md-7 w-5-24 h-1-2">
                    <Reveal keyframes={fadeInRightShorter} delay={600} className="h-100" duration={1000} triggerOnce>
                        <div className="banner banner-fixed bg-primary overlay-light"
                            style={{ backgroundColor: '#0063D1' }}>
                            <div className="banner-content y-50 text-center">
                                <h3 className="banner-title text-uppercase font-weight-normal ls-m text-white scale-95"
                                    style={{ marginBottom: '2px' }}>
                                    Save up to $100<br /><strong className="d-block mt-1 ls-normal text-normal">Exclusive
                                            Brands Sale</strong></h3>
                                <p className="text-white op-5 ls-m mb-md-6 mb-2 scale-95">Free Shipping on
                                        all orders $399.99</p>
                                <ALink href="/shop"
                                    className="btn btn-outline btn-white font-weight-semi-bold btn-overflow">View All
                                        Sale</ALink>
                            </div>
                        </div>
                    </Reveal>
                </div>
                <div className="grid-item col-12 w-1 h-3-4">
                    <Reveal keyframes={fadeIn} delay={700} duration={1000} className="h-100" triggerOnce>
                        <div className="banner banner-fixed banner-smartphone overlay-light">
                            <figure style={{ backgroundColor: '#06536D' }}>
                                <LazyLoadImage
                                    className="ml-auto mb-4"
                                    src="./images/home/banner/11.jpg"
                                    alt="banner"
                                    effect="opacity"
                                    width="1780"
                                    height="507"
                                />
                            </figure>
                            <div className="banner-content top text-center">
                                <h3 className="text-light font-weight-normal text-uppercase scale-95 mt-5 mb-6">
                                    <strong className="font-weight-semi-bold text-normal d-block">Big Speaker</strong>4K
                                        HIGH QUALITY SPEAKER SET</h3>
                                <ALink href="/shop" className="btn btn-primary font-weight-semi-bold">Shop Now<i
                                    className="d-icon-arrow-right"></i></ALink>
                            </div>
                        </div>
                    </Reveal>
                </div>
                <div className="grid-space w-1-24">
                </div>
            </div>
        </section >
    )
}