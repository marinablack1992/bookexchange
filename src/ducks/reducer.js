import axios from 'axios';
//set up an initial state.
const initialState = {
    user: {}
}

const GET_USER_INFO = 'GET_USER_INFO'

export function getUserInfo() {
    const userData = axios.get('/auth/me')
        .then(res => {
            return res.data
        })
    return {
        type: GET_USER_INFO,
        payload: userData

    }
}
//reducers job is just to return a new piece of state, or if that doesn't exist, the initial state.. it's just a function.
//state is underfined until we set it to initialState. IF STATE IS UNDEFINED, IT WILL DEFAULT TO INITIALSTATE. :)
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_INFO + '_FULFILLED':
            return Object.assign({}, state, {user: action.payload})
            

        default:
            return state;
    }
}