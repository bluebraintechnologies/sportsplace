import React from 'react';
import { Helmet } from 'react-helmet';


// Import Apollo Server and Query
//import withApollo from '../server/apollo';

// import Home Components
import NewsletterModal from '~/components/features/modals/newsletter-modal';
import IntroSection from '~/components/partials/home/intro-section';
import BannerGrid from '~/components/partials/home/banner-grid';
import ProductCollection from '~/components/partials/home/product-collection';
import CtaSection from '~/components/partials/home/cta-section';
import BrandSection from '~/components/partials/home/brand-section';
import BlogSection from '~/components/partials/home/blog-section';

function HomePage() {
    const { data, loading, error } = [[], false, []]; //useQuery(GET_HOME_DATA, { variables: { productsCount: 7 } });
    const featured = data && data.specialProducts.featured;
    const bestSelling = data && data.specialProducts.bestSelling;
    const latest = data && data.specialProducts.latest;
    const onSale = data && data.specialProducts.onSale;
    const posts = data && data.posts.data;

    return (
        <div className="main home">
            <Helmet>
                <title>Agway Sports Private Limited</title>
            </Helmet>
            <h1 className="d-none">Agway Sports Private Limited - Home</h1>
            <div className="page-content">
                <IntroSection />
                <BannerGrid />
                <div className="container">
                    <ProductCollection featured={featured} bestSelling={bestSelling} onSale={onSale} loading={loading} />
                    <BrandSection />
                </div>
                <CtaSection />
                <BlogSection posts={posts} />
            </div>
            <NewsletterModal />
        </div>
    )
}

export default HomePage; // ''withApollo({ ssr: typeof window === 'undefined' })(HomePage);