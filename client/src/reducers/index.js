import { combineReducers } from 'redux';
import { reducer } from 'redux-form';

const getAllBarangReducer = (state= [], action) => {
  switch (action.type) {
    case 'GET_ALL_BARANG':
      return  action.payload;
    default:
      return state
    }
  }

const getBarangIdReducer = (state=null, action) => {
  if (action.type === 'GET_BARANG_ID'){
    return  action.payload;
  }

  return state
}

const postCreateProfileReducer = (state=null, action) => {
  if (action.type === 'POST_CREATE_PROFILE'){
    return  action.payload;
  }

  return state
}

const postLoginProfileReducer = (state=null, action) => {
  if (action.type === 'POST_LOGIN_PROFILE'){
    return  action.payload;
  }

  return state
}

const getMyProfileReducer = (state=null, action) => {
  if (action.type === 'GET_MY_PROFILE'){
    return  action.payload;
  }

  return state
}

const patchEditProfileReducer = (state=null, action) => {
  if (action.type === 'PATCH_EDIT_PROFILE'){
    return  action.payload;
  }

  return state
}

export default combineReducers({
  allBarang: getAllBarangReducer,
  barangId : getBarangIdReducer,
  register : postCreateProfileReducer,
  loggingIn : postLoginProfileReducer,
  currentUser : getMyProfileReducer,
  editCurrentUser : patchEditProfileReducer,
  form: reducer
});