import { put } from 'redux-saga/effects';

import axios from '../../axios-orders';
import * as actions from '../actions';

export function* initIntgredientsSaga(action) {
    try {
        const res = yield axios.get('/ingredients.json');
        yield put(actions.setIngredient(res.data));
    } catch (err) {
        yield put(actions.fetchIngredientsFailed());
    };
};