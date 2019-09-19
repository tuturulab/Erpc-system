/*
    Common Api Methods
*/
import Axios, { create } from 'axios';


var AxiosApi = create({
    baseURL: 'http://127.0.0.1:5000'
});

var token = localStorage.getItem('jwt');

var settings = {
  headers : {
      "Content-Type": "application/json",
      "Accept" : "application/json",
      "Authorization": 'Bearer ' + token
  }
}

export function AxiosApiGet(url) {

  return AxiosApi.get(url,settings);
}


export function AxiosAPiPost (url, params) {

}
