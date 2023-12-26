import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import shoeImage from '../../assets/collection_banner.jpg';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={shoeImage} alt='Shoes!' />
      </div>
    </Fragment>
  );
};

export default Header;
