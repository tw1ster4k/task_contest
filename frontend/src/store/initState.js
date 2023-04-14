export const initState = {
    name:"",
}

export const reducers = (state = initState, action) => {
    switch (action.type) {
        case "ADMIN":
            return {...state, name: action.payload}
        case "DEL_SESS":
            return {...state = action.payload}
            default:
                return state;
    }
}
