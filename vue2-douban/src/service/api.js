import  axios from 'axios';

export function hotNotes() {
  let url = 'mock/hot-notes.json';
  return axios.get(url)
}
export function hotAlbums() {
  let url = 'mock/hot-albums.json';
  return axios.get(url)
}
