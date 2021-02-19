import React from 'react';

import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

import CustomButton from '../button/CustomButton';

import '../../scss/style.scss';
import path from '../path/path';

const Header = () => {
    return (
        <div className="header__wrapper">
            <div className="container header">
                <div className="header__left">
                    <Link className='logo' to='/'><img src={path + '/images/logo.png'} alt=""/></Link>
                </div>
                <div className="header__right">
                    <div className="nav">
                        <Link className="nav__link" to='/'>Home</Link>
                        <Link className="nav__link" to='/pages'>Pages</Link>
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

const mapStateToProps = state => ({
    currentCount: state.count.currentCount
})

const mapDispatchToProps = dispatch => ({
    increment: () => dispatch({type: "ADD"})
})



export default connect(mapStateToProps, mapDispatchToProps)(Header);