import axios from 'axios';


export const UPLOADING_VIDEO = 'UPLOADING_VIDEO';
export const SUCCESS_UPLOADED_VIDEO = 'SUCCESS_UPLOADED_VIDEO';
export const ERROR_UPLOADED_VIDEO = 'ERROR_UPLOADED_VIDEO';

export const LIST_VIDEOS_LOADED = 'LIST_VIDEOS_LOADED';
export const LIST_VIDEOS_LOADING = 'LIST_VIDEOS_LOADING';
export const LIST_VIDEOS_LOADING_FAILED = 'LIST_VIDEOS_LOADING_FAILED';

export const DELETING_VIDEO = 'DELETING_VIDEO';
export const SUCCESS_DELETED_VIDEO = 'SUCCESS_DELETED_VIDEO';
export const ERROR_DELETED_VIDEO = 'ERROR_DELETED_VIDEO';

export const successUploadedVideo = (payload) => ({
  type: SUCCESS_UPLOADED_VIDEO, payload
});

export const errorUploadedVideo = (payload) => ({
  type: ERROR_UPLOADED_VIDEO, payload
});

export const uploadingVideo = () => ({
  type: UPLOADING_VIDEO
});


export const listVideoLoaded = (payload) => ({
  type: LIST_VIDEOS_LOADED, payload
});

export const listVideoLoading = () => ({
  type: LIST_VIDEOS_LOADING
});

export const listVideoLoadingFailed = (payload) => ({
  type: LIST_VIDEOS_LOADING_FAILED, payload
});

export const successDeletedVideo = (payload) => ({
  type: SUCCESS_DELETED_VIDEO, payload
});

export const errorDeletedVideo = (payload) => ({
  type: ERROR_DELETED_VIDEO, payload
});

export const deletingVideo = () => ({
  type: DELETING_VIDEO
});

export const uploadVideo = (video) => async (dispatch, getState) => {

  var bodyFormData = new FormData();
  bodyFormData.append('title', video.title);
  bodyFormData.append('description', video.description);
  bodyFormData.append('file', video.file);
  dispatch(uploadingVideo());
  return await axios({
    method: "post",
    url: "http://localhost:3000/api/videos/",
    data: bodyFormData,
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then(function (response) {
      dispatch(successUploadedVideo(response));
    })
    .catch(function (error) {
      dispatch(errorUploadedVideo(error.response));
    });
};

export const fetchVideos = () => async (dispatch, getState) => {
  dispatch(listVideoLoading());
  const res = await axios({
    method: "get",
    url: "http://localhost:3000/api/videos/",
  })
    .then(function (response) {
      dispatch(listVideoLoaded(response));
    })
    .catch(function (error) {
      dispatch(listVideoLoadingFailed(error.response));
    });
};

export const deleteVideo = (id) => async (dispatch, getState, api) => {
  dispatch(deletingVideo());
  if (id) {
    const res = await axios({
      method: "delete",
      url: "http://localhost:3000/api/videos/" + id,
    })
      .then(function (response) {
        dispatch(successDeletedVideo(id));
      })
      .catch(function (error) {
        dispatch(errorDeletedVideo(error.response));
      });
  }

};
