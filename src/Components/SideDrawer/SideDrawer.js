import React from 'react';
import {NavLink} from 'react-router-dom';
import './sidedrawer.css';


const sideDrawer = props => {
    let drawerClasses = ['side-drawer']
    if(props.show){
        drawerClasses = ['side-drawer open']
    }
    // console.log(props)

    return(
        <nav className={drawerClasses} onClick={props.drawerClickHandler}>
            <ul>
                <li>
                    <img src={`${process.env.PUBLIC_URL}/images/main-logo.png`} alt="menu-icon" />
                </li>
                <li>
                    <NavLink exact={true} activeStyle={{color:"#27c492"}} to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink activeStyle={{color:"#27c492"}} to="/freelancers">
                        Freelancers
                    </NavLink>
                </li>
                <li>
                    <NavLink activeStyle={{color:"#27c492"}} to="/small-business">
                        Small Business
                    </NavLink>
                </li>
                <li>
                    <NavLink activeStyle={{color:"#27c492"}} to="/organization">
                        Organizations
                    </NavLink>
                </li>
                <li>
                    <NavLink activeStyle={{color:"#27c492"}} to="/privacy-policy">
                        Privacy Policy
                    </NavLink>
                </li>
                <li>
                    <NavLink activeStyle={{color:"#27c492"}} to="/faqs">
                        FAQs
                    </NavLink>
                </li>
                <li>
                    <NavLink activeStyle={{color:"#27c492"}} to="/pricing">
                        Pricing
                    </NavLink>
                </li>
                <li>
                    <NavLink activeStyle={{color:"#27c492"}} to="/terms-of-service">
                        Terms & Conditions
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default sideDrawer;