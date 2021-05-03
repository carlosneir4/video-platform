import { combineReducers } from 'redux';
import videosReducer from './videosResucer';
import newVideoReducer from './newVideoReducer';

export default combineReducers({
    newVideo: newVideoReducer,
    videos: videosReducer
});
