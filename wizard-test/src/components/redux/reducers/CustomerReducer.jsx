import { SET_PERSONAL_INFO } from '../ActionTypes'

const initialState = {
    personalInfo: {
        firstName: '',
        lastName: '',
        age: 0,
        country: '',
    },
    items: []
};

export default function CustomerReducer(state = initialState.personalInfo, action) {
    switch (action.type) {
        case SET_PERSONAL_INFO:
            
            return state={...state};
    
        default:
            return state;
    }
}

 console.log(initialState);