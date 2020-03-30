import { combineReducers } from 'redux';

const barang2Reducer = () => {
  return [
    { nama: 'Vaseline Men Face', harga: '22000'},
    { nama: 'Balsem Otot', harga: '7000' },
    { nama: 'Fresh Care Aroma', harga: '15000'},
    { nama: 'Minyak Sania', harga: '5000'}
  ];
};

const barangTerpilihReducer = (barangTerpilih=null, action) => {
  if (action.type === 'BARANG_TERPILIH'){
    return  action.payload;
  }

  return barangTerpilih
}

export default combineReducers({
  barang: barang2Reducer,
  barangTerpilih: barangTerpilihReducer
});