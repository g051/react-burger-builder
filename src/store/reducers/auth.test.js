import reducer from './auth';
import * as actionTypes from '../actions/actionTypes';

describe('auth reducer', () => {
    let initialState = {
        token: null,
        userId: null,
        error: null,
        loading: false,
        authRedirect: '/'
    };

    it('should return initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should store token upon login', () => {
        expect(reducer(initialState, {
            type: actionTypes.AUTH_SUCCESS,
            token: 'some-token',
            userId: 'some-user-id'
        })).toEqual({
            ...initialState,
            token: 'some-token',
            userId: 'some-user-id'
        })
    });
});