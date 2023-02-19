import { useEffect } from 'react';
import { useRouter } from 'next/router';

import ALink from '~/components/features/custom-link';

import CartMenu from '~/components/common/partials/cart-menu';
//import SearchBox from '~/components/common/partials/search-box';
import LoginModal from '~/components/features/modals/login-modal';
import Image from 'next/image';

import { headerBorderRemoveList } from '~/utils/data/menu'

export default function Header(props) {
    const router = useRouter();
    const pathname = useRouter().pathname;
    const query = router.query;

    const showMobileMenu = () => {
        document.querySelector('body').classList.add('mmenu-active');
    }

    return (
        <header className="header header-border">
            <div className="header-middle sticky-header fix-top sticky-content has-center">
                <div className="container-fluid">
                    <div className="header-left">
                        <ALink href="#" className="mobile-menu-toggle" onClick={showMobileMenu}>
                            <i className="d-icon-bars2"></i>
                        </ALink>
                        <nav className="main-nav main-nav-1">
                            <ul className="menu">
                                <li><ALink href="/" className={'active'}>Home</ALink></li>
                                <li><ALink href={{ pathname: "/shop", query: { category: "computer" } }} className={`${query.category === 'computer' ? 'active' : ''}`}>Badminton</ALink></li>
                                <li><ALink href={{ pathname: "/shop", query: { category: "tv-and-watches" } }} className={`${query.category === 'tv-and-watches' ? 'active' : ''}`}>Tennis</ALink></li>
                                <li><ALink href={{ pathname: "/shop", query: { category: "smart-phone" } }} className={`${query.category === 'smart-phone' ? 'active' : ''}`}>Brand</ALink></li>
                                <li><ALink href={{ pathname: "/shop", query: { category: "appliances" } }} className={`${query.category === 'appliances' ? 'active' : ''}`}>Category</ALink></li>
                            </ul>
                        </nav>
                    </div>

                    <div className="header-center">
                        <ALink href="/" className="logo mr-0">
                            <Image src='/images/home/logo.png' alt="logo" width="154" height="43" />
                        </ALink>
                    </div>

                    <div className="header-right">
                        <nav className="main-nav main-nav-2">
                            <ul className="menu">
                                <li><ALink href={{ pathname: "/shop", query: { category: "accessories" } }} className={`${query.category === 'accessories' ? 'active' : ''}`}>Accessories
                                </ALink></li>
                                <li><ALink href={{ pathname: "/shop", query: { category: "deals" } }} className={`${query.category === 'deals' ? 'active' : ''}`}>Hot Deals</ALink></li>
                                <li><ALink href="/pages/contact-us">Contact</ALink></li>
                                <li><ALink href="/blog/classic">Blog</ALink></li>
                            </ul>
                        </nav>

                        {/* <SearchBox /> */}

                        <LoginModal />

                        <ALink href="/pages/wishlist" className="wishlist">
                            <i className="d-icon-heart"></i>
                        </ALink>

                        <CartMenu />
                    </div>
                </div>
            </div>
        </header >
    );
}