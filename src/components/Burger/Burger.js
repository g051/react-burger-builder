import React from 'react';
import Ingredient from "./Intgredient/Intgredient";
import classes from './Burger.module.css';

const burger = props => {
    // console.log('[Burger]', props);
    let ingredients = Object.keys(props.ingredients)
        .map(key => [...Array(props.ingredients[key])]
            .map((_, i) => <Ingredient key={key + i} type={key}/>)
        )
        .reduce((arr, el) => arr.concat(el), []);
    if(ingredients.length === 0) {
        ingredients = <p>Please start adding ingredients!</p>
    }
    return (
        <div className={classes.Burger}>
            <Ingredient type="bread-top"/>
            {ingredients}
            <Ingredient type="bread-bottom"/>
        </div>
    );
};

export default burger;
