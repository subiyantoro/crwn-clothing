import React from "react";
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { LogoContainer, OptionLink, OptionsContainer } from "./header.styles";

const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        <LogoContainer to='/'>
            <Logo className='logo' />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink className='option' to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink to='/shop'>
                CONTACT
            </OptionLink>
            {
                currentUser !== null ? 
                <OptionLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionLink> :
                <OptionLink to='/signin'>
                    SIGN IN
                </OptionLink>
            }
            <CartIcon />
        </OptionsContainer>
        {
            hidden ? null : <CartDropdown />
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);