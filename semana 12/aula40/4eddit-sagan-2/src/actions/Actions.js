import axios from 'axios'

const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/fourEddit"


export const login = (email, password) => async (dispatch) => {
    const loginData = {
        email,
        password
    }
    try {
        const response = await axios.post(`${baseUrl}/login`, loginData);
        const token = response.data.token
        const user = JSON.stringify(response.data.user)
        console.log(response.data)
        localStorage.setItem("token", token)
        localStorage.setItem("user", user)
        dispatch(setUser(response.data.user))
        dispatch(setLoadingOff())
        dispatch(setLoadingFree())
    } catch (error) {
        window.alert("Desculpe, o login de deu errado, tente novamente", error)
    }
}

export const newRegister = (form) => async (dispatch) => {
    console.log(form)
    try {
        const response = await axios.post(`${baseUrl}/signup`, form)
        dispatch(newUser(response.data))
        const token = response.data.token
        const user = JSON.stringify(response.data.user)
        localStorage.setItem("user", user)
        localStorage.setItem("token", token)
        dispatch(setUser(response.data.user))
        dispatch(setLoadingOff())
        dispatch(setLoadingFree())
    } catch (error) {
        window.alert('Ops, não foi possível cadastrar, tente novamente!')
        console.log(error)
    }
}

export const getPosts = () => async (dispatch) => {
    try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`${baseUrl}/posts`, {
            headers: {
                auth: token
            }
        })
        dispatch(setPosts(response.data))
        dispatch(setLoadingOff())
        dispatch(setLoadingFree())
    } catch (error) {
        alert('erro ao logar. contate o suporte', error)
        console.log(error)
    }
}

export const newPost = (form) => async (dispatch) => {
    try {
        const token = localStorage.getItem("token");
        const response = await axios.post(`${baseUrl}/posts`, form, {
            headers: {
                auth: token
            }
        })
        dispatch(getPosts())
    } catch (error) {
        alert('erro ao enviar. contate o suporte', error)
        console.log(error)
    }
}

export const getPostDetail = (id) => async (dispatch) => {
    try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`${baseUrl}/posts/${id}`, {
            headers: {
                auth: token
            }
        })
        dispatch(setPostDetail(response.data.post))
        dispatch(setLoadingOff())
        dispatch(setLoadingFree())

    } catch (error) {
        alert('erro ao pegar detalhes. contate o suporte', error)
        console.log(error)
    }
}

export const newComment = (id, form) => async (dispatch) => {
    console.log(form)
    console.log(id)
    try {
        const token = localStorage.getItem("token")
        const response = await axios.post(`${baseUrl}/posts/${id}/comment`, form, {
            headers: {
                auth: token
            }
        })
        dispatch(getPostDetail(id))
        dispatch(setLoadingOff())
        dispatch(setLoadingFree())

    } catch (error) {
        window.alert('Ops, não foi possível comentar!')
        console.log(error)
    }
}

export const topicVote = (i, v) => async (dispatch) => {
    try {
        const token = localStorage.getItem("token")
        const response = await axios.put(`${baseUrl}/posts/${i}/vote`, v, {
            headers: {
                auth: token
            }
        })
        dispatch(getPosts())
        dispatch(getPostDetail(i))
        dispatch(setLoadingOff())
        dispatch(setLoadingFree())
    } catch (error) {
        window.alert('não foi possivel votar')
        console.log(error)
    }
}

export const commentVote = (ti, v, ci) => async (dispatch) => {
    try {
        const token = localStorage.getItem("token")
        const response = await axios.put(`${baseUrl}/posts/${ti}/comment/${ci}/vote`, v, {
            headers: {
                auth: token
            }
        })
        dispatch(getPostDetail(ti))
        dispatch(setLoadingOff())
        dispatch(setLoadingFree())
    } catch (error) {
        window.alert('não foi possivel votar')
        console.log(error)
    }
}

export const setUser = (userData) => ({type: 'SET_USER', payload: {
        userData
    }})

export const setSearch = (terms) => ({type: 'SET_SEARCH', payload: {
        terms
    }})

export const setPosts = (posts) => ({type: 'SET_POSTS', payload: {
        posts
    }})

export const newUser = (newUserData) => ({type: 'NEW_USER', payload: {
        newUserData
    }})

export const setLoadingOff = () => ({type: 'SET_LOADING_OFF', payload: {}})

export const setLoadingFree = () => ({type: 'SET_LOADING_FREE', payload: {}})

export const setLogout = () => (localStorage.clear(), {
    type: 'SET_LOGOUT',
    payload: {}
})

const setPostDetail = (post) => ({type: 'SET_POST_DETAIL', payload: {
        post
    }})
