import React from "react";
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  }
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="data:image/jpeg;base64,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"
          alt="" />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        {/* logo */}
        <SearchIcon className="header__SearchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"} >
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionlineOne">Hello Guest</span>
            <span className="header__optionlineTwo">
              {user ?
                'Sign Out' : 'Sign in'
              }</span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionlineOne">Returns</span>
          <span className="header__optionlineTwo">Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionlineOne">Your</span>
          <span className="header__optionlineTwo"> Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionlineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
