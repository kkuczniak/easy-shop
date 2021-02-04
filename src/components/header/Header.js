import React from 'react';
import './Header.css';
import logo from '../../img/logo.svg';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';

function Header() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className='header'>
      <Link to='/'>
        <img className='header__logo' src={logo} alt='logo' />
      </Link>
      <div className='header__search'>
        <input className='header__searchInput' type='text' />
        <SearchIcon className='header__searchIcon' />
      </div>
      <div className='header__nav'>
        <div className='header__option'>
          <span className='header__optionIcon'>Sign In</span>
        </div>
        <div className='header__option'>
          <span className='header__optionIcon'>Orders</span>
        </div>
        <div className='header__option'>
          <span className='header__optionIcon'>Shipping</span>
        </div>
        <Link to='/checkout'>
          <div className='header__basket'>
            <ShoppingBasketIcon />
            <span className='header__option header__basketCount'>
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
