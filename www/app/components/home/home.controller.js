import { divisionList } from '../../api/division';

class HomeController {
  constructor(factory) {
    this.name = 'Division';
    this.divisions = [];
    this.init();
  }

  init(){
    let self = this;
	  console.log('init home controller');
    let resData = this.loadDivisions();
    resData.then(function(d){
      self.divisions = d;
      console.log(JSON.stringify(d));
    });
  }

  loadDivisions() {
    return divisionList();
  }
}

export default ['home.factory',HomeController];
