import React, { Fragment } from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const navigationItems = props => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Burger Builder</NavigationItem>
        {props.authenticated
            ? (<Fragment>
                <NavigationItem link="/orders">Checkout</NavigationItem>
                <NavigationItem link="/logout">Logout</NavigationItem>
            </Fragment>)
            : <NavigationItem link="/auth">Authenticate</NavigationItem>
        }
    </ul>
);

export default navigationItems;
