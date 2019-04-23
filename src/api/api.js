import axios from 'axios';
import qs from 'qs';
 let base = 'http://localhost:53089/api/DtInfo';
// let base = '';

var instance = axios.create({
    headers: {'content-type': 'application/x-www-form-urlencoded'}
});
// instance .post(`url`, params).then(res => res.data);

//登录连接
 export const requestLogin = params => { return instance.post(`${base}/Login`,JSON.stringify(params)).then(res => res.data); };
//查询停机信息
export const getDTInfo = params => { return instance.post(`${base}/Login`, params).then(res => res.data); };

//更新停机信息
export const updateDTInfo = params => { return axios.post(`${base}/Login`, params).then(res => res.data); };

//删除停机信息
export const delDTInfo = params => { return axios.post(`${base}/Login`, params).then(res => res.data); };



// export const requestLogin = params => { return axios.post(`${base}/login`, params).then(res => res.data); };

export const getUserList = params => { return axios.get(`${base}/user/list`, { params: params }); };

export const getUserListPage = params => { return axios.get(`${base}/user/listpage`, { params: params }); };

export const removeUser = params => { return axios.get(`${base}/user/remove`, { params: params }); };

export const batchRemoveUser = params => { return axios.get(`${base}/user/batchremove`, { params: params }); };

export const editUser = params => { return axios.get(`${base}/user/edit`, { params: params }); };

export const addUser = params => { return axios.get(`${base}/user/add`, { params: params }); };