import { divisionList } from '../../api/division';

class HomeController {
  constructor(factory) {
    this.name = 'Division';
    this.divisions = [];
    this.init();
  }

  init(){
	  console.log('init home controller ...');
    this.divisions = this.loadDivisions();
  }

  loadDivisions() {
    return divisionList();
  }

}

export default ['home.factory',HomeController];
