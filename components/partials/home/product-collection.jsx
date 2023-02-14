import React from 'react';

import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';

import FeaturedCollection from '../home/featured-collection';

export default function ProductCollection(props) {
    const { featured, bestSelling, onSale, loading } = props;

    return (
        <section className="products-tab mt-10 pt-2">
            <Tabs selectedTabClassName="show" selectedTabPanelClassName="active" defaultIndex={0} className="tab tab-nav-simple tab-nav-center">
                <TabList className="nav nav-tabs" role="tablist">
                    <Tab className="nav-item">
                        <span className="nav-link">Featured</span>
                    </Tab>

                    <Tab className="nav-item">
                        <span className="nav-link">On Sale</span>
                    </Tab>

                    <Tab className="nav-item">
                        <span className="nav-link">Best Sellers</span>
                    </Tab>
                </TabList>
                <div className="tab-content">
                    <TabPanel className="tab-pane">
                        <FeaturedCollection products={featured} loading={loading} />
                    </TabPanel>
                    <TabPanel className="tab-pane">
                        <FeaturedCollection products={onSale} loading={loading} />
                    </TabPanel>
                    <TabPanel className="tab-pane">
                        <FeaturedCollection products={bestSelling} loading={loading} />
                    </TabPanel>
                </div>
            </Tabs>
        </section>
    )
}