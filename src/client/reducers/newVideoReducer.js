import { UPLOADING_VIDEO, SUCCESS_UPLOADED_VIDEO, ERROR_UPLOADED_VIDEO } from '../actions';


const defaultState = {
    createMessage: '',
    videoLoading: false,
    videoCreated: false
}
export default (state = defaultState, action) => {
    switch (action.type) {
        case UPLOADING_VIDEO:
            return {
                ...state,
                createMessage: '',
                videoLoading: true
            };
        case SUCCESS_UPLOADED_VIDEO:
            const message = action.payload.data;
            return {
                ...state,
                createMessage: message,
                videoCreated: true,
                videoLoading: false
            };
        case ERROR_UPLOADED_VIDEO:
            const messageError = action.payload.data;
            return {
                ...state,
                createMessage: messageError,
                videoLoading: false
            };
        default:
            return state;
    }
}