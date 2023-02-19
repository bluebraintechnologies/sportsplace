import React from 'react';

import Product from '~/components/features/product/product';

function FeaturedCollection(props) {
    const { products, loading } = props;

    return (
        <>
            {
                loading ?
                    <>
                        {
                            [1, 2, 3, 4, 5].map((item) =>
                                <div className="product-loading-overlay" key={'featured-skel-' + item}></div>
                            )
                        }
                    </>
                    :
                    <div className="row gutter-sm">
                        <div className="col-md-6">
                            {
                                products && <Product product={products[0]} adClass="product-lg" lgImage={true} />
                            }
                        </div>
                        <div className="col-6 col-md-3 order-md-first">
                            {
                                products && products.slice(1, 3).map((item, index) =>
                                    <Product
                                        product={item}
                                        key={`top-selling-product ${index}`}
                                    />
                                )
                            }
                        </div>
                        <div className="col-6 col-md-3">
                            {
                                products && products.slice(3, 5).map((item, index) =>
                                    <Product
                                        product={item}
                                        key={`top-selling-product ${index}`}
                                    />
                                )
                            }
                        </div>
                    </div>
            }
        </ >
    )
}

export default React.memo(FeaturedCollection);
