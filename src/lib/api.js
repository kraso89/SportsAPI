import axios from 'axios';
var credentials = 'krasi:123456';
axios.defaults.headers.common['Authorization'] ='Basic '+btoa(credentials);
axios.defaults.headers.common['WWW-Authenticate'] ='Basic '+ btoa(credentials);
class Api {
  static get(sport, route, sort) {
    return this.xhr(sport,route,sort);
  }

  static put(route, params) {
    return this.xhr(route, params, 'PUT')
  }

  static post(route, params) {
    return this.xhrPost(route, params)
  }

  static delete(route, params) {
    return this.xhr(route, params, 'DELETE')
  }

  static xhr(sport,route,sort) {
    const host = 'http://www.mysportsfeeds.com/api/feed/pull/';
    const url = `${host}${sport}${route}${sort}`


    return axios(url).then( resp => {
               if (resp) {
                  return resp;
                }
      return resp.data.then(err => {throw err});
        }).then( json => json.data )
    .catch( ex => {
        alert('An error occured, please try again!');
      });
  }
}
export default Api
