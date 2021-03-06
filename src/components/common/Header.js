import React, {useEffect, useRef, useState} from "react";
import {Image, Nav, Navbar} from "react-bootstrap";
import {commonIcons} from "../../resources/images";
import {linksArray, singleLinksArray} from "../../resources/links";
import {Link} from "gatsby";
import '../../styles/header.css';
import scrollTo from 'gatsby-plugin-smoothscroll';

const navXs = `width:92%; left:3%; position: absolute; top: 90%; z-index: 200;
            text-align: center; background: rgba(255, 255, 255, 1); border-radius: 5px 0 5px 5px;
            box-shadow: 2px 2px 8px 3px rgba(34, 60, 80, 0.2);`;

const NavLinks = ({path}) => {
    const newLinksArray = linksArray.map(elem => {
        if (!singleLinksArray.includes(path) && elem.charAt(0) === "#") {
            return `/${elem}`
        }
        return elem
    })

    return (
        newLinksArray.map((elem, index) => {
            return (
                <Nav.Link
                    className='link'
                    eventKey={index}
                    key={elem + index}
                    as={Link}
                    to={elem}
                    onClick={() => elem.charAt(0) === "#" ? scrollTo(elem) : null}>
                    {linksArray[index].slice(1).charAt(0).toUpperCase() + linksArray[index].slice(2).replace(/([A-Z])/g, ' $1').trim()}
                </Nav.Link>
            )
        })
    )
}

const Header = ({path}) => {
    const blurBg = useRef(null);
    const nav = useRef(null);
    const collapse = useRef(null);
    const navIcon = useRef(null);
    const [navExpanded, setNavExpanded] = useState(false);

    const removeNavItemStyle = () => {
        setTimeout(() => {
            if (navIcon.current !== null) {
                navIcon.current.setAttribute('style', '');
            }
        }, 300)
    }

    const removeBlurBg = () => {
        setTimeout(() => {
            if (blurBg.current !== null) blurBg.current.classList.remove('blur');
        }, 200)
        removeNavItemStyle();
    }

    const handleButtonClick = () => {
        if (!collapse.current.classList.contains('show')) {
            collapse.current.setAttribute('style', navXs);
            navIcon.current.setAttribute('style', 'background-color: #fff;  box-shadow: 2px 2px 8px 3px rgba(34, 60, 80, 0.2);');
            blurBg.current.classList.add('blur');
        } else {
            removeBlurBg();
            removeNavItemStyle();
        }
    };

    const handleDocumentClick = (e) => {
        if (e.target !== nav.current && !nav.current.contains(e.target)) {
            setNavExpanded(false);
            if (e.target.className !== 'card-img-top') {
                removeNavItemStyle();
                removeBlurBg();
            }
        }
    }

    useEffect(() => {
        window.onresize = () => {
            if (document.documentElement.clientWidth >= 991) {
                collapse.current.setAttribute('style', '');
                removeBlurBg();
            } else {
                collapse.current.setAttribute('style', navXs);
                if (collapse.current.classList.contains('show')) {
                    blurBg.current.classList.add('blur');
                    navIcon.current.setAttribute('style', 'background-color: #fff;  box-shadow: 2px 2px 8px 3px rgba(34, 60, 80, 0.2);');
                }
            }
        }
        window.addEventListener('click', handleDocumentClick, true)
        return () => window.removeEventListener('click', handleDocumentClick, true)
    })


    return (
        <>
            <Navbar
                collapseOnSelect expand="lg"
                className="container mt-3 mb-3 headerStyle"
                onToggle={setNavExpanded}
                expanded={navExpanded}
                ref={nav}>
                <Navbar.Brand>
                    <Link to="/">
                        <Image src={commonIcons.remedyIcon}/>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className='toggle' onClick={handleButtonClick}
                               ref={navIcon}/>
                <Navbar.Collapse
                    id="responsive-navbar-nav"
                    className="ml-1"
                    ref={collapse}
                    onClick={removeBlurBg}>
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav className="justify-content-end">
                        <NavLinks
                            path={path}
                        />
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div className="transparentBg" ref={blurBg}/>
        </>

    )
}

export default Header
