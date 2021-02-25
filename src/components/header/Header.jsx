import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '../button/CustomButton';
import '../../scss/style.scss';
import path from '../path/path';

import {withRouter} from 'react-router-dom';


const Header = ({history}) => {
    const [isDropdown, setDropdown] = useState(false);

    const handleClick = () => {
        setDropdown(!isDropdown);
    }

    const handleClose = () => {
        setDropdown(false)
    }

    useEffect(() => {
        if(isDropdown) {
            document.addEventListener('click', handleClose)
            console.log("open")
        }
        return () => document.removeEventListener('click', handleClose )
    }, [isDropdown])

    
    
      
    return (
        <div className="header__wrapper">
            <div className="container header">
                <div className="header__left">
                    <Link className='logo' to='/'><img src={path + '/images/logo.png'} alt=""/></Link>
                </div>
                <div className="header__right">
                    <div className="nav">
                        <Link className="nav__link" to='/'>Home</Link>
                        <Link className="nav__link" to='#' onClick={handleClick}>Pages
                            <i className={`${isDropdown ? 'open': null} fa fa-angle-down`}></i>
                            {isDropdown ? (<div className="dropdown">
                                <span className="dropdown__link" onClick={() => {history.push('/about')}} to="/about">About</span>
                                <span className="dropdown__link" onClick={() => {history.push('/faq')}} to="/faq">Faq</span>
                                <span className="dropdown__link" onClick={() => {history.push('/pricing')}} to="/pricing">Pricing</span>
                            </div>): null}
                        </Link>
                        <Link className="nav__link" to='/news'>News</Link>
                        <Link className="nav__link" to='/contact'>Contact</Link>
                    </div>
                    <div className="header__social">
                        <Link className="social-icon social-icon--search-widget" to="#">
                            <i className="fa fa-search"></i>
                        </Link>
                        <Link className="social-icon" to="#">
                            <i className="fa fa-facebook"></i>
                        </Link>
                        <Link className="social-icon" to="#">
                            <i className="fa fa-twitter"></i>
                        </Link>
                        <Link className="social-icon" to="#">
                            <i className="fa fa-instagram"></i>
                        </Link>
                        <Link className="social-icon" to="#">
                            <i className="fa fa-dribbble"></i>
                        </Link>
                        <CustomButton btnSecondary >Get Started</CustomButton>
                    </div>
                </div>
            </div>
        </div>
    )
}




export default withRouter(Header);