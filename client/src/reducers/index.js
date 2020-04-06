import { combineReducers } from 'redux';
import { reducer } from 'redux-form';

const barangGetReducer = (state= [], action) => {
  switch (action.type) {
    case 'BARANG_GET':
      return  action.payload;
    default:
      return state
    }
  }

const barangIdReducer = (state=null, action) => {
  if (action.type === 'BARANG_ID'){
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

export default combineReducers({
  barangGet: barangGetReducer,
  barangId : barangIdReducer,
  daftarPost : daftarPostReducer,
  daftarLogin : daftarLoginReducer,
  currentUser : currentUserReducer,
  form: reducer
});