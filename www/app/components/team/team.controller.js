import { teamList, teamByDivision } from '../../api/team';

class TeamController {
  constructor(factory) {
    this.name = 'Team';
    this.teams = [];
    this.init();    
  }

  init(){
    let self = this;
	  console.log('init team controller');

    // loading all teams
    let teams = this.loadTeams();
    teams.then(function(tm){
      self.teams = tm;
      console.log(JSON.stringify(tm));
    });

    // loading teams for given division
    let teamsOnDivision = this.loadTeamByDivision('d1');
    teamsOnDivision.then((tm) => {
      self.teams = tm;
      console.log(JSON.stringify(tm));
    });
  }

  loadTeams() {
    return teamList();
  }

  loadTeamByDivision(divId) {
    return teamByDivision(divId);
  }
}

export default ['team.factory',TeamController];
