import * as actionTypes from './actionTypes';

export const addIngredient = ingredient => ({
    type: actionTypes.ADD_INGREDIENT,
    ingredient
});

export const removeIngredient = ingredient => ({
    type: actionTypes.REMOVE_INGREDIENT,
    ingredient
});

export const fetchIngredientsFailed = () => ({
    type: actionTypes.FETCH_INGREDIENTS_FAILED
});

export const setIngredient = ingredients => ({
    type: actionTypes.SET_INGREDIENTS,
    ingredients
});

export const initIntgredients = () => ({ type: actionTypes.INIT_INGREDIENTS });