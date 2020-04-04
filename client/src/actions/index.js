import apis from '../api';
import history from '../history';

export const barangGet = () => async dispatch => {
  const response = await apis.get('/barangs');

  dispatch({type: 'BARANG_GET', payload: response })
}

export const barangId = id => async dispatch => {
  const response = await apis.get(`/barangs/${id}`);

  dispatch({type: 'BARANG_ID', payload: response })
}

export const daftarPost = formValues => async dispatch => {
  let data = JSON.stringify({
    nama: formValues.nama,
    username: formValues.username,
    password: formValues.password,
    email: formValues.email,
  })
  let validate;
  await apis.post('/akuns', data, {
    headers: {
    'Content-Type': 'application/json',
    }
  })

  .then(response => { 
    validate = null;    
  })
  .catch(error => {
    validate = error.response.data
  });
  if(typeof validate !== "string") history.push('/');

  dispatch({type: 'AKUN_POST', payload: validate })
} 