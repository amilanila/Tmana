import { divisionList } from '../../api/division';
import { teamByDivision } from '../../api/team';

class HomeController {
  constructor(factory) {
    this.name = 'Division';
    this.divisions = [];
    this.init();
    this.teams = [];
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

  loadTeamByDivision() {
    let self = this;

    // loading teams for given division
    let teamsOnDivision = teamByDivision('d2');
    teamsOnDivision.then( tm => {
      self.teams = tm;
      console.log('teams inside = ' + JSON.stringify(self.teams));
    });    
  }
 }

export default ['home.factory',HomeController];
