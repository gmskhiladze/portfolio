import React, {useState} from 'react';

import logo from '../../../assets/GM_Logo.svg';
import './header.scss';




function Header() {

    const [isClicked, setIsClicked] = useState(false);

    const clickHandler = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setIsClicked(!isClicked);
    }

    return (
        <div className={"header__container"}>
            <div className={"logo"}>
                <img src={logo} alt="Logo"/>
            </div>
            <div className={"header__menu"}>
                <ul>
                    <li>Projects</li>
                    <li>About me</li>
                    <li>Contact</li>
                </ul>
            </div>

            <div className={`${isClicked ? 'open ': ""}burger__menu` } onClick={clickHandler}>
                <div className={"icon"}/>
            </div>

            <div style={ isClicked ? { right: 0 } : {right: -400}} className={"burger__menu__items"}>
                <ul>
                    <li>Projects</li>
                    <li>About me</li>
                    <li>Contact</li>
                </ul>
            </div>

        </div>
    );
}

export default Header;