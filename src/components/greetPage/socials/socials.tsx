import React from 'react';
import './socials.scss'

import linkedin from '../../../assets/icons/linkedin.svg';
import dribble from '../../../assets/icons/dribble.svg';
import git from '../../../assets/icons/git.svg';
import fb from '../../../assets/icons/fb.svg';
import instagram from '../../../assets/icons/instagram.svg';

function Socials() {
    return (
        <>
            <ul className={"social__icons__list"}>
                <li className={"social__iconn"}>

                </li>
                <li className={"social__icon"}><img className={"icon__linkedin"} title="https://www.linkedin.com/in/giorgimskhiladze/" src={linkedin} alt="linkedin"/></li>
                <li className={"social__icon"}><img className={"icon__dribble"} title="https://dribbble.com/Wazaaa" src={dribble} alt="dribble"/></li>
                <li className={"social__icon"}><img className={"icon__git"} title="https://github.com/GiorgiMskhiladze99" src={git} alt="github"/></li>
                <li className={"social__icon"}><img className={"icon__fb"} title="https://www.facebook.com/gio.mskhiladze" src={fb} alt="facebook"/></li>
                <li className={"social__icon"}><img className={"icon__instagram"} title="https://www.instagram.com/giorgi.mskhiladze/" src={instagram} alt="instagram"/></li>
            </ul>
        </>
    );
}

export default Socials;