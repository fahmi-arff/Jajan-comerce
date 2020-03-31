import { combineReducers } from 'redux';

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

export default combineReducers({
  barangGet: barangGetReducer,
  barangId : barangIdReducer
});