import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import RightSidebar from './RightSidebar';

import assetUrl from '../utils/assetUrl';

const CURRENT_YEAR = new Date().getFullYear();

const Layout = ({ children }) => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const location = useLocation();

    // Close nav on route change
    useEffect(() => {
        setIsNavOpen(false);
    }, [location]);

    return (
        <>
            <div className="home-anchor" id="home"></div>
            <nav className="navbar navbar-default navbar-fixed-top" id="navbar-main">
                <div className="container">
                    <div className="navbar-header">
                        <button
                            type="button"
                            className="navbar-toggle collapsed"
                            onClick={() => setIsNavOpen(!isNavOpen)}
                            aria-expanded={isNavOpen}
                        >
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <div className="navbar-brand">
                            <Link className="logo" to="/">
                                <img src={assetUrl("/assets/logos/core_logo_no_text.png")} alt="Research group logo" />
                            </Link>
                        </div>
                    </div>
                    <div className={`collapse navbar-collapse ${isNavOpen ? 'in' : ''}`} id="navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li className="nav-item">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/publications">Publications</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/teaching">Teaching</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/join-us">Join Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/core-team-projects">CORE Projects</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>



            <RightSidebar />

            {children}

            <footer className="site-footer" style={{ marginTop: 0, paddingTop: '20px' }}>
                <div className="container">
                    <p className="powered-by" style={{ marginBottom: '10px' }}>
                        Christian Bartelt, {CURRENT_YEAR} &#183;
                        Partially powered by the <a href="https://github.com/gcushen/hugo-academic" target="_blank" rel="noreferrer">Academic theme</a> for <a href="http://gohugo.io" target="_blank" rel="noreferrer">Hugo</a>.
                        <span className="pull-right">
                            <a href="#home" id="back_to_top">
                                <span className="button_icon">
                                    <i className="fa fa-chevron-up fa-2x" aria-hidden="true"></i>
                                </span>
                            </a>
                        </span>
                    </p>
                </div>
            </footer>
        </>
    );
};

export default Layout;
