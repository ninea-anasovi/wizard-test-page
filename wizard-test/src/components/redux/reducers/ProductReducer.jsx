import { SET_PRODUCT_NAME, SET_PRODUCT_PRICE, SET_PRODUCT_QUANTITY } from '../ActionTypes'

const initialState = {
    personalInfo: {
        firstName: '',
        lastName: '',
        age: 0,
        country: '',
    },
    items: []
};

export default function CustomerReducer(state = initialState.items, action) {
    switch (action.type) {
        case SET_PRODUCT_NAME:
            return ;
        case SET_PRODUCT_PRICE:
            return 0;
        case SET_PRODUCT_QUANTITY:
            return 0;
    
        default:
            return state;
    }
}