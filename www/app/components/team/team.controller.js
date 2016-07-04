import { teamList, teamByDivision } from '../../api/team';

class TeamController {
  constructor(factory) {
    this.name = 'Team';
    this.teams = [];
    this.init();    
  }

  init(){
    // let self = this;

    // // loading all teams
    // let teams = this.loadTeams();
    // teams.then(function(tm){
    //   self.teams = tm;
    // });

    // // loading teams for given division
    // let teamsOnDivision = this.loadTeamByDivision('d2');
    // teamsOnDivision.then( tm => {
    //   self.teams = tm;
    // });
  }

  loadTeams() {
    return teamList();
  }

  loadTeamByDivision(divId) {
    return teamByDivision(divId);
  }
}

export default ['team.factory',TeamController];
