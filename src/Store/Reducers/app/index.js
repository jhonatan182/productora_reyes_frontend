const defaultValue = {
    isLoading: false,
    appLoaded: false,
    error: null,
}

const reducer = (state = defaultValue, action = { type: "NONE", payload: null }) => {
    const { type, payload } = action;
    switch (type) {
        case "APP_LOADING":
            return {
                ...state,
                isLoading: payload,
            };
        case "APP_LOADED":
            return {
                ...state,
                appLoaded: payload,
                isLoading: false,
            };
        case "APP_ERROR":
            return {
                ...state,
                error: payload,
            };
        case "APP_ERROR_CLEAR":
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
}

export default reducer;