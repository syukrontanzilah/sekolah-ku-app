import {createStore} from 'redux'

const initialState = {
    loading: false,
    name : 'Yuk Lebih dekat dengan sekolahmu dan Guru-guru mu'
}

const reducer = (state= initialState, action) => {
    if(action.type === 'SET_LOADING'){
        return {
            ...state,
            loading: action.value,
        }
    }
return state;
}

const store = createStore(reducer);

export default store;