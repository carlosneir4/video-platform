import {
    LIST_VIDEOS_LOADED,
    LIST_VIDEOS_LOADING,
    LIST_VIDEOS_LOADING_FAILED,
    DELETING_VIDEO,
    SUCCESS_DELETED_VIDEO,
    ERROR_DELETED_VIDEO
} from '../actions';

const defaultState = {
    list: [],
    loadMessage: '',
    deletedeMessage: '',
    videosLoading: false,
    videodeleting: false
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case LIST_VIDEOS_LOADED:
            const videoList = action.payload.data.videos;
            return {
                ...state,
                list: videoList,
                loadMessage: '',
                videosLoading: false
            };
        case LIST_VIDEOS_LOADING:
            return {
                ...state,
                loadMessage: '',
                videosLoading: true
            };
        case LIST_VIDEOS_LOADING_FAILED:
            const loadError = action.payload.data;
            return {
                ...state,
                loadMessage: loadError,
                videosLoading: false
            };
        case SUCCESS_DELETED_VIDEO:
            const id = action.payload;
            const list = state.list;
            delete list[id];
            return {
                ...state,
                list: list,
                deletedeMessage: '',
                videodeleting: false
            };
        case DELETING_VIDEO:
            return {
                ...state,
                deletedeMessage: '',
                videodeleting: true
            };
        case ERROR_DELETED_VIDEO:
            const deleteError = action.payload.data;
            return {
                ...state,
                deletedeMessage: deleteError,
                videodeleting: false
            };
        default:
            return state;
    }
}