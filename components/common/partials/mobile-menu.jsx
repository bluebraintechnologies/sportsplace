import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import ALink from '~/components/features/custom-link';

function MobileMenu(props) {
    const [search, setSearch] = useState("");
    const [timer, setTimer] = useState(null);
    const router = useRouter();
    const query = router.query;

    useEffect(() => {
        window.addEventListener('resize', hideMobileMenuHandler);
        document.querySelector("body").addEventListener("click", onBodyClick);

        return () => {
            window.removeEventListener('resize', hideMobileMenuHandler);
            document.querySelector("body").removeEventListener("click", onBodyClick);
        }
    }, [])

    useEffect(() => {
        setSearch("");
    }, [router.query.slug])

    const hideMobileMenuHandler = () => {
        if (window.innerWidth > 991) {
            document.querySelector('body').classList.remove('mmenu-active');
        }
    }

    const hideMobileMenu = () => {
        document.querySelector('body').classList.remove('mmenu-active');
    }

    function onSearchChange(e) {
        setSearch(e.target.value);
    }

    function onBodyClick(e) {
        if (e.target.closest('.header-search')) return e.target.closest('.header-search').classList.contains('show-results') || e.target.closest('.header-search').classList.add('show-results');

        document.querySelector('.header-search.show') && document.querySelector('.header-search.show').classList.remove('show');
        document.querySelector('.header-search.show-results') && document.querySelector('.header-search.show-results').classList.remove('show-results');
    }

    function onSubmitSearchForm(e) {
        e.preventDefault();
        router.push({
            pathname: '/shop',
            query: {
                search: search
            }
        });
    }

    return (
        <div className="mobile-menu-wrapper">
            <div className="mobile-menu-overlay" onClick={hideMobileMenu}>
            </div>

            <ALink className="mobile-menu-close" href="#" onClick={hideMobileMenu}><i className="d-icon-times"></i></ALink>

            <div className="mobile-menu-container scrollable">
                <form action="#" className="input-wrapper" onSubmit={onSubmitSearchForm}>
                    <input type="text" className="form-control" name="search" autoComplete="off" value={search} onChange={onSearchChange}
                        placeholder="Search your keyword..." required />
                    <button className="btn btn-search" type="submit">
                        <i className="d-icon-search"></i>
                    </button>
                </form>

                <ul className="mobile-menu mmenu-anim border-no">
                    <li>
                        <ALink href="/">Home</ALink>
                    </li>

                    <li>
                        <ALink href={{ pathname: "/shop", query: { category: "electronics" } }} className={`${query.category === 'electronics' ? 'active' : ''}`}>
                            <h4 className="mobile-catyname">Electronics</h4>
                        </ALink>
                    </li>

                    <li>
                        <ALink href={{ pathname: "/shop", query: { category: "computer" } }} className={`${query.category === 'computer' ? 'active' : ''}`}>
                            <h4 className="mobile-catyname">Computer</h4>
                        </ALink>
                    </li>

                    <li>
                        <ALink href={{ pathname: "/shop", query: { category: "cyrs-tablet" } }} className={`${query.category === 'cyrs-tablet' ? 'active' : ''}`}>
                            <h4 className="mobile-catyname">Cyrs &amp; Tablets</h4>
                        </ALink>
                    </li>

                    <li>
                        <ALink href={{ pathname: "/shop", query: { category: "smart-phone" } }} className={`${query.category === 'smart-phone' ? 'active' : ''}`}>
                            <h4 className="mobile-catyname">Smart Home</h4>
                        </ALink>
                    </li>

                    <li>
                        <ALink href={{ pathname: "/shop", query: { category: "appliances" } }} className={`${query.category === 'appliances' ? 'active' : ''}`}>
                            <h4 className="mobile-catyname">Appliances</h4>
                        </ALink>
                    </li>

                    <li>
                        <ALink href={{ pathname: "/shop", query: { category: "deal" } }} className={`${query.category === 'deal' ? 'active' : ''}`}>
                            <h4 className="mobile-catyname">Hot deals</h4>
                        </ALink>
                    </li>
                    <li>
                        <ALink href={{ pathname: "/shop", query: { category: "look-book" } }} className={`${query.category === 'look-book' ? 'active' : ''}`}>
                            <h4 className="mobile-catyname">Look Book</h4>
                        </ALink>
                    </li>
                    <li className="pb-0"><ALink href="/buynow/riodereact">Buy Riode!</ALink></li>
                </ul>
            </div>
        </div>
    )
}

export default React.memo(MobileMenu);