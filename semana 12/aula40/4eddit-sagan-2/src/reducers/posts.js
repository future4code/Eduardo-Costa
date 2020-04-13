const initialState = {
    posts: [],
    user: [],
    postDetail: null,
    postComments: null,
    topicVote: null,
    loading: '',
    searchTerms: ''
}

const posts = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_POSTS':
            return {
                ...state,
                posts: action.payload.posts.posts
            }
        case 'SET_USER':
            return {
                ...state,
                user: action.payload.userData
            }
        case 'NEW_USER':
            return {
                ...state,
                newUser: action.payload.newUserData
            }
        case 'SET_LOGOUT':
            return {
                ...state,
                user: []
            }
        case 'SET_POST_DETAIL':
            return {
                ...state,
                postDetail: action.payload.post,
                postComments: action.payload.post.comments
            }
        case 'SET_LOADING_OFF':
            return {
                ...state,
                loading: 'desliga'
            }
        case 'SET_LOADING_FREE':
            return {
                ...state,
                loading: ''
            }
        case 'SET_SEARCH':
            return {
                ...state,
                searchTerms: action.payload.terms
            }
        default:
            return state
    }
}

export default posts
