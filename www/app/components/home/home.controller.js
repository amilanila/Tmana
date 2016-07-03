import { divisionList } from '../../api/division';
import { teamByDivision } from '../../api/team';

class HomeController {
  constructor(factory) {
    this.name = 'Division';
    this.divisions = [];    
    this.teams = [];
    
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

  loadTeamByDivision(divId) {
    let self = this;

    // loading teams for given division
    let teamsOnDivision = teamByDivision(divId);
    teamsOnDivision.then( tm => {
      self.teams = tm;
      console.log('teams inside = ' + JSON.stringify(self.teams));
    });    
  }
 }

export default ['home.factory',HomeController];
