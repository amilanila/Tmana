import { divisionList } from '../../api/division';

class HomeController {
  constructor(factory) {
    this.name = 'Division';
    this.divisions = [];
    this.init();
  }

  init(){
    let self = this;
    let resData = this.loadDivisions();

    resData.then(div => {
      self.divisions = div;
    });
  }

  loadDivisions() {
    return divisionList();
  }
}

export default ['home.factory',HomeController];
