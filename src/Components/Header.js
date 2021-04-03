import React from 'react';
import { useHistory } from 'react-router-dom';

const Header = () => {
    const { push } = useHistory();

    const onHome = () => {
        push('/')
    };

    const onAbout = () => {
        push('/about')
    };

    return (
        <div className="header">
            <p className="header-name">olivia</p>
            <div className="header-links">
                <a href="#" onClick={onHome}>home</a>
                <a href="#" onClick={onAbout}>about</a>
                <a href="https://drive.google.com/file/d/17Eci66AR75ECoFH68RNUaFYNouhyOC4w/view">resume</a>
            </div>
        </div>
    );
};

export default Header;