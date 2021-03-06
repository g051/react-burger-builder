import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

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

const setIngredient = ingredients => ({
    type: actionTypes.SET_INGREDIENTS,
    ingredients
});

export const initIntgredients = () => dispatch => {
    axios.get('/ingredients.json')
        .then(res => {
            dispatch(setIngredient(res.data));
        })
        .catch(err => {
            dispatch(fetchIngredientsFailed());
        });
};