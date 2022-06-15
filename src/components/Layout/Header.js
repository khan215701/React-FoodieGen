import {Fragment} from "react";
import headermeal from '../../assests/img/headermeal.jpg'
import classes from './Header.module.css'
import HeaderCart from "./HeaderCart";

const Header = props => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1> FoodieGen</h1>
                <HeaderCart onClick={props.onShowCart} /> 
            </header>
            <div className={classes['main-image']}>
                <img src={headermeal} alt="The Table of full food"></img>
            </div>
        </Fragment>
    )
}

export default Header;