import WeakMap from 'es6-weak-map';

let teamFactory = function ($resource) {
  
  let resources = {};

  return $resource('https://secret-oasis-5061.herokuapp.com/api/Usuario/:url/:id', {}, resources);
};


export default ['$resource', teamFactory];
