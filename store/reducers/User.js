import { ADD_USER } from '../actions/User';

const initialState = {
    name: '',
    email: '',
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                name: action.userDetail.name,
                email: action.userDetail.email,
            }
    }
    return state;
}