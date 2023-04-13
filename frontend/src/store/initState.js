export const initState = {
    name:"",
}

export const reducers = (state = initState, action) => {
    switch (action.type) {
        case "ADMIN":
            return {...state, name: action.payload.name}
            default:
                return state;
    }
}
