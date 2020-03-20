import axios from 'axios'
const idProfile = "eduardooo"

export const clearSwipes = () => async (dispatch) => {
    await axios.put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${idProfile}/clear`)
    dispatch(countMatches())
}

export const setProfile = profile => {
    return {type: "SET_PROFILE", payload: {
            profile
        }};
};

export const getProfileToSwipe = () => async (dispatch, getState) => {
    const result = await axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${idProfile}/person`);

    dispatch(setProfile(result.data.profile));

};

export const chooseProfile = (id, choice) => async (dispatch, getState) => {
    const newChoice = {
        id,
        choice
    }
    console.log(newChoice)
    const result = axios.post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${idProfile}/choose-person`, newChoice)
    console.log((await result).data.isMatch)

    dispatch(getProfileToSwipe())
    dispatch(countMatches())
};

export const setMatches = matches => {
    return {type: "SET_MATCHES", payload: {
		matches: matches
        }};
};

export const getMatches = () => async (dispatch, getState) => {
    const result = await axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${idProfile}/matches`);

    dispatch(setMatches(result.data.matches));
};

export const updateCountMatches = count => {
    return {type: "UPDATE_COUNT_MATCHES", payload: {
            count
        }};
};

export const countMatches = () => async (dispatch, getState) => {
    const result = await axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${idProfile}/matches`);

    dispatch(updateCountMatches(result.data.matches.length));
};

export const onSelectProfile = i => {
    return {type: "UPDATE_SELECTED_PROFILE", payload: {
            i
        }};
};

