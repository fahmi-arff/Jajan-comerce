import apis from '../api';
import history from '../history';

function contentType(id, route, data, key){
  if(id === 'post'){
    return apis.post(route, data, {
      headers: { 'Content-Type': 'application/json' }
    })
  } else if(id === 'get'){
    return apis.get(route,{
      headers: { 'Content-Type': 'application/json', 'x-auth-token': key }
    })
  } else if(id === 'patch'){
    return apis.patch(route, data, {
      headers: { 'Content-Type': 'application/json', 'x-auth-token': key }
    })
  }
}

async function exec(type, route, data, resp, key){
  let result = {}

  await contentType(type, route, data, key)
    .then(response => { 
      (resp) ? result.response = response.data : result.response = null 
      result.status = response.status  
    })
    .catch(error => {
      result.response = error.response.data
      result.status = error.response.status 
    });

  return result
}

export const getAllBarang = () => async dispatch => {
  const response = await apis.get('/barangs');

  dispatch({type: 'GET_ALL_BARANG', payload: response.data })
}

export const getBarangId = id => async dispatch => {
  const response = await apis.get(`/barangs/${id}`);

  dispatch({type: 'GET_BARANG_ID', payload: response.data })
}

export const postCreateProfile = formValues => async dispatch => {
  let data = JSON.stringify(formValues);

  let fetch = await exec('post', '/akuns', data, false, '');

  if(typeof fetch.response !== "string") history.push('/');

  dispatch({type: 'POST_CREATE_PROFILE', payload: fetch.response })
} 

export const postLoginProfile = formValues => async dispatch => {
  let response, fetch, status;

  if(formValues === null){
    response = null
  } else {
    let data = JSON.stringify(formValues)
    fetch = await exec('post', '/login', data, true, '');
    response = fetch.response
    status = fetch.status
  }

  if(status === 200) {
    await dispatch(getMyProfile(response))
    history.push('/')
  }
  dispatch({type: 'POST_LOGIN_PROFILE', payload: response })
} 

export const getMyProfile = key => async dispatch => {
  let response, fetch;

  if(key === null) {
    response = null
  }else {
    fetch = await exec('get', '/akuns/me', '', true, key);
    response = fetch.response

  }
  dispatch({type: 'GET_MY_PROFILE', payload: response })
}

export const patchEditProfile = (key, formValues) => async dispatch => {
  let data = JSON.stringify(formValues)

  let fetch = await exec('patch', '/akuns/me', data, false, key)
  
  if(fetch.status === 200) {
    history.push('/profile/me');
    await dispatch(getMyProfile(key))
  };

  dispatch({type: 'PATCH_EDIT_PROFILE', payload: fetch.response })
}

export const addToCart = (barang, key) => async dispatch => {
  let result;
  let raw = {
    barangId : barang,
    jumlah : 1
  }
  let data = JSON.stringify(raw)

  await apis.patch('/akuns/keranjang', data, {
    headers: { 'Content-Type': 'application/json' , 'x-auth-token': key }
  })
  .then(response => { 
    result = response.status  
  })
  .catch(error => {
    console.log(error)
  });
  
  if(result === 200) await dispatch(getMyProfile(key));
}