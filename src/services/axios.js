import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.DEV_TEAM
});

function setTokenHeader(token) {
  if(token) {
    axiosInstance.defaults.headers.common["x-auth"] = `${token}`; 
  } else {
    delete axiosInstance.defaults.headers.common["x-auth"];
  }
};

export { axiosInstance, setTokenHeader };