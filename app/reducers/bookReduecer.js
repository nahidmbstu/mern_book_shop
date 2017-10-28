export default function reducer(state = {
    books: [],
    book: {}
}, action) {
    switch (action.type) {
        case 'GET_BOOKS':
            return Object.assign({}, state, {
                books: action.books
            });
        case 'GET_ONE_BOOK':
            return Object.assign({}, state, {
                book: action.book
            });
        default:
            return state;
    }
}