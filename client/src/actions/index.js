import apis from '../api';

export const barangGet = () => async dispatch => {
  const response = await apis.get('/barangs');

  dispatch({type: 'BARANG_GET', payload: response })
}

export const barangId = id => async dispatch => {
  const response = await apis.get(`/barangs/${id}`);

  dispatch({type: 'BARANG_ID', payload: response })
}