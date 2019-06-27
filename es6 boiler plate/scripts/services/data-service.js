var moduleName='app.services';
 
const HTTP = new WeakMap();
 
class DataService {
  constructor($http) {
    HTTP.set(this, $http);
  }
 
  fetch(){
    return HTTP.get(this).get('/api/activeBooks').then(result => result.data );
  }

  update(col, id, data){
    return HTTP.get(this).put(`/api/${col}/${id}`, data);
  }

  add(col, data){
    return HTTP.get(this).post(`/api/${col}`, data);
  }
 
  static factory($http){
    return new DataService($http);
  }
}
 
DataService.factory.$inject = ['$http'];
 
angular.module(moduleName, []).factory('DataService', DataService.factory);
 
export default moduleName;