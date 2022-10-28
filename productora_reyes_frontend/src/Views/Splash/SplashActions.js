export const APP_LOADING = 'APP_LOADING';
export const APP_LOADED = 'APP_LOADED';
export const APP_ERROR = 'APP_ERROR';
export const APP_ERROR_CLEAR = 'APP_ERROR_CLEAR';

export const app_start_loading = (dispatch) => {
    dispatch({
        type: APP_LOADING,
        payload: true,
    });
}

export const app_stop_loading = (dispatch) => {
    dispatch({
        type: APP_LOADING,
        payload: false,
    });
}

export const app_loaded = (dispatch) => {
    dispatch({
        type: APP_LOADED,
        payload: true,
    });
}
export const app_on_error = (dispatch, error) => {
    dispatch({ type: APP_ERROR, payload: error });
}

export const app_error_clear = (dispatch) => {
    dispatch({
        type: APP_ERROR_CLEAR,
    });
}