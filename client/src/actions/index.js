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

export const loginPost = formValues => async dispatch => {
  let validate;
  if(formValues === null){
    validate = null
  } else {
    let data = JSON.stringify({
      email: formValues.email,
      password: formValues.password,
    })
    await apis.post('/login', data, {
      headers: {
      'Content-Type': 'application/json',
      }
    })
  
    .then(response => { 
      const key = response.data
      validate = key;    
    })
    .catch(error => {
      validate = error.response.data
    });
  }
  if(typeof validate === "string" && validate.length >= 149) history.push('/');

  dispatch({type: 'AKUN_LOGIN', payload: validate })
} 

export const akunGet = key => async dispatch => {
  let response;
  if(key === null) {
    response = null
  }else {
    response = await apis.get('/akuns/me',{
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': key
      }
    });
  }

  dispatch({type: 'AKUN_GET', payload: response })
}