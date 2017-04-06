import  axios from 'axios';
// axios.defaults.headers.post['Content-Type']='application/json';

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  console.log(response.status)
  if (response.status != 200) {
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
  let urls = ['mock/hot-notes.json', 'mock/hot-albums.json', 'mock/hot-aside.json'];
  return Promise.all(Object.keys(urls).map((key) => axios.get(urls[key])))
}

export function movieInit() {
  let urls = [ 'mock/movie-list.json','mock/movie-tag.json','mock/movie-charts.json'];
  return Promise.all(Object.keys(urls).map((key) => axios.get(urls[key])))
}
// var _li = document.querySelectorAll('.movie-list li')
// var aaa = Array.from(_li).map(item => {
//   return item.querySelector('a') && {
//       path: item.querySelector('.pic').querySelector('a').href,
//       pathImg: item.querySelector('img').src,
//       title: item.querySelector('img').alt,
//       pathTicket: item.querySelector('.bn-ticket').href,
//       rating: item.querySelector('.rating').text
//     }
// })
// JSON.stringify(aaa)
