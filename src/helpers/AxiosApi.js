/*
    Common Api Methods
*/
import Axios, { create } from 'axios';


var AxiosApi = create({
  baseURL: 'https://127.0.0.1:5001'
});

var token = localStorage.getItem('jwt');

var settings = {
  headers : {
    "Content-Type": "application/json",
    "Accept" : "application/json",
    "Authorization": 'Bearer ' + token
  }
}

var settingsFormData = {
  headers : {
    "Content-Type" : "multipart/form-data",
    "Accept" : "application/json",
    "Authorization": 'Bearer ' + token
  }
}

export function AxiosApiGet(url) {
  return AxiosApi.get(url,settings);
}


export function AxiosApiPost (url, params) {
  return AxiosApi.post(url , params, settings);
}

export function AxiosFormData (url , params ) {
  return AxiosApi.post (url, params , settingsFormData );
}
