import React from 'react';

import { Helmet } from 'react-helmet';

import ShopBanner from '~/components/partials/shop/shop-banner';
import SidebarFilterOne from '~/components/partials/shop/sidebar/sidebar-filter-one'
import ProductListOne from '~/components/partials/shop/product-list/product-list-one';

function ShopOffCanvas() {
    return (
        <main className="main shop">
            <Helmet>
                <title>Agway Sports</title>
            </Helmet>

            <h1 className="d-none">Agway Sports</h1>

            <ShopBanner />

            <div className="page-content mb-lg-10 mb-0 pb-lg-6 pb-0">
                <div className="container-fluid">
                    <div className="row main-content-wrap gutter-lg">
                        <div className="main-content overflow-hidden">
                            <ProductListOne itemsPerRow={6} type="off-canvas" />
                        </div>

                        <SidebarFilterOne type="off-canvas" />
                    </div>
                </div>
            </div>
        </main >
    )
}

export default React.memo(ShopOffCanvas);