import React, { useState } from 'react'
import './Header.css'
import MobileHeader from './MobileHeader';
import WebHeader from './WebHeader';
function Header() {
    
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div>
                <header className="header">
                    <div className="logo">
                        <a href="/" >
                            <span className="grey-color"> &lt;</span>
                            <span className="logo-name">Aleena Alby</span>
                            <span className="grey-color">/&gt;</span>
                        </a>
                    </div>
                    <div className="menu">
                    <div className="web-menu">
                        <WebHeader />
                    </div>
                    <div className="mob-menu">
                        {/* <div onClick= { ()=> setIsOpen(!isOpen)}>
                            <img className="menu-icon" src="https://img.icons8.com/fluency-systems-regular/48/000000/apps.png" alt="icons" width= '25'/>
                        </div>
                            {isOpen && <MobileHeader  isOpen={isOpen} setIsOpen={setIsOpen}/> }    */}

                            <MobileHeader />
                    </div>
                    </div>
                    

                </header>
        </div>
    )
}

export default Header
