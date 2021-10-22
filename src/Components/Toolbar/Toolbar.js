import React from 'react';
import Toggle from '../SideDrawer/Toggle';
import {NavLink} from 'react-router-dom'
import './toolbar.css';

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar-navigation">
            <NavLink exact={true} activeStyle={{borderBottom:"2px solid #fff"}} to="/">
                <div className="toolbar-logo">
                    <img src={`${process.env.PUBLIC_URL}/images/main-logo.png`} alt="menu-icon" />
                </div>
            </NavLink>
            <div className="spacer"></div>
            <Toggle click={props.drawerClickHandler} />
            <div className="toolbar-navigation-items">
                <ul>
                    <li>
                        <NavLink exact={true} activeStyle={{borderBottom:"2px solid #fff"}} to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeStyle={{borderBottom:"2px solid #fff"}} to="/freelancers">
                            Freelancers
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeStyle={{borderBottom:"2px solid #fff"}} to="/small-business">
                            Small Business
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeStyle={{borderBottom:"2px solid #fff"}} to="/organization">
                            Organization
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeStyle={{borderBottom:"2px solid #fff"}} to="/pricing">
                            Pricing
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeStyle={{borderBottom:"2px solid #fff"}} to="/faqs">
                            FAQs
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
)

export default toolbar;