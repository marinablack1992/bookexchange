import axios from 'axios';
//set up an initial state.
const initialState = {
    user: {},
    allBooks: []
}

const GET_USER_INFO = 'GET_USER_INFO';
const GET_BOOKS = 'GET_BOOKS';

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

export function getBooks() {
    const books = axios.get('/api/getbooks')
    .then (res => {
        return res.data
    })
    return {
        type: GET_BOOKS,
        payload: books
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_INFO + '_FULFILLED':
            return Object.assign({}, state, {user: action.payload})

        case GET_BOOKS + '_FULFILLED':
            return Object.assign({}, state, {allBooks: action.payload})
            

        default:
            return state;
    }
}