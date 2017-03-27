import  axios from 'axios';
// axios.defaults.headers.post['Content-Type']='application/json';

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  console.log(response.status)
  if (response.status!=200){
    return Promise.reject(response.data);
  }
  return response.data;
}, function (error) {
  return Promise.reject(error);
});


export function hotNotes() {
  let url = 'mock/hot-notes.json';
  return axios.get(url)
}
export function hotAlbums() {
  let url = 'mock/hot-albums.json';
  return axios.get(url)
}

export function hotInit() {
  let urls=['mock/hot-notes.json','mock/hot-albums.json'];
  return Promise.all(Object.keys(urls).map((key)=>axios.get(urls[key])))
}
