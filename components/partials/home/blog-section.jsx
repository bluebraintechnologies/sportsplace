import React from 'react';
import Reveal from 'react-awesome-reveal';

import OwlCarousel from '~/components/features/owl-carousel';

import Post from '~/components/features/post';

import { fadeInRightShorter } from '~/utils/data/keyframes';
import { mainSlider5 } from '~/utils/data/carousel';

function BlogSection(props) {
    const { posts } = props;

    return (
        <section className="blog-section container mt-10 pt-lg-2 mb-1 pb-5">
            <h2 className="title title-underline text-center mb-4"><span>From Our News</span></h2>

            <OwlCarousel adClass="owl-theme" options={mainSlider5}>
                {
                    posts && posts.length ?
                        posts.slice(15, 19).map((post, index) => (
                            <Reveal keyframes={fadeInRightShorter} duration={1000} triggerOnce key={"post-eight" + index}>
                                <div className="blog-post mb-4">
                                    <Post post={post} isOriginal={true} />
                                </div>
                            </Reveal>
                        )) : ''
                }
            </OwlCarousel>
        </section >
    )
}

export default React.memo(BlogSection);