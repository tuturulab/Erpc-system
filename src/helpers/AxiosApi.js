/*
    Common Api Methods
*/
import Axios, { create } from 'axios';

const baseurl = process.env.NODE_ENV === 'production' ? "https://erpc-system-backend20191006012202.azurewebsites.net"
  : "http://localhost:5001";

console.log(process.env.NODE_ENV);

var AxiosApi = create({
  baseURL: baseurl
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
