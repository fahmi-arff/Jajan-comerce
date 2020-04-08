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

const daftarPostReducer = (state=null, action) => {
  if (action.type === 'AKUN_POST'){
    return  action.payload;
  }

  return state
}

const daftarLoginReducer = (state=null, action) => {
  if (action.type === 'AKUN_LOGIN'){
    return  action.payload;
  }

  return state
}

const currentUserReducer = (state=null, action) => {
  if (action.type === 'AKUN_GET'){
    return  action.payload;
  }

  return state
}

const editUserReducer = (state=null, action) => {
  if (action.type === 'AKUN_EDIT'){
    return  action.payload;
  }

  return state
}

export default combineReducers({
  allBarang: getAllBarangReducer,
  barangId : getBarangIdReducer,
  daftarPost : daftarPostReducer,
  daftarLogin : daftarLoginReducer,
  currentUser : currentUserReducer,
  editUser : editUserReducer,
  form: reducer
});