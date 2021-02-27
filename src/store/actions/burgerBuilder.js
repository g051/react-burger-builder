import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const addIngredient = ingredient => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredient
    };
};

export const removeIngredient = ingredient => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredient
    };
};

export const fetchIngredientsFailed = () => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED
    }
};

const setIngredient = ingredients => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients
    };
};

export const initIntgredients = () => {
    return dispatch => {
        axios.get('/ingredients.json')
            .then(res => {
                dispatch(setIngredient(res.data));
            })
            .catch(err => {
                dispatch(fetchIngredientsFailed());
            });
    }
}