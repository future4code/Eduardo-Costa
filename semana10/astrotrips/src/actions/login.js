import axios from 'axios'

const baseUrl = 'https://us-central1-missao-newton.cloudfunctions.net/futureX/'
const idProfile = "EduCosta"

export const doLogin = (user, pass) => async (dispatch) => {
    try {
        const response = await axios.post(`${baseUrl}${idProfile}/login`, {
            email: user,
            password: pass
        });

        sessionStorage.setItem("token", response.data.token)
        sessionStorage.setItem("user", JSON.stringify(response.data.user))
        dispatch(setUser(response.data.user))

    } catch (e) {
        alert("Erro ao logar. Entre em contato conosco")
        console.error(e)
    }
}

export const setUser = (userData) => ({type: 'SET_USER', payload: {
    userData
}})

export const setLogout = () => (
    sessionStorage.clear(),
    {type: 'SET_LOGOUT', payload: {
    
}})
