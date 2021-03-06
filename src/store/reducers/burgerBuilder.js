import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false,
    building: false
};

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

const addIngredient = (state, ing) => {
    const ingredients = updateObject(state.ingredients, { [ing]: state.ingredients[ing] + 1 });
    return updateObject(state, {
        ingredients,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[ing],
        building: true
    });
}

const removeIngredient = (state, ing) => {
    const ingredients = updateObject(state.ingredients, { [ing]: state.ingredients[ing] - 1 });
    return updateObject(state, {
        ingredients,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[ing],
        building: true
    });
};

const setIngredient = (state, ing) => updateObject(state, {
    ingredients: {
        salad: ing.salad,
        bacon: ing.bacon,
        cheese: ing.cheese,
        meat: ing.meat
    },
    totalPrice: initialState.totalPrice,
    error: false,
    building: false
});

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT: return addIngredient(state, action.ingredient);
        case actionTypes.REMOVE_INGREDIENT: return removeIngredient(state, action.ingredient);
        case actionTypes.SET_INGREDIENTS: return setIngredient(state, action.ingredients);
        case actionTypes.FETCH_INGREDIENTS_FAILED: return updateObject(state, { error: true });
        default: return state;
    }
};

export default reducer;