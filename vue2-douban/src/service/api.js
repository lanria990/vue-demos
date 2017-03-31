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
  let urls=['mock/hot-notes.json','mock/hot-albums.json','mock/hot-aside.json'];
  return Promise.all(Object.keys(urls).map((key)=>axios.get(urls[key])))
}
// var _li =document.querySelectorAll('#anony-movie .side-links li')
// var aaa = Array.from(_li).map(item=>{console.log(item);return item.querySelector('a')&&{path:item.querySelector('a').href,title:item.querySelector('a').text}})
// JSON.stringify(aaa)
