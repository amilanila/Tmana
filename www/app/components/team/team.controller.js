import { teamList } from '../../api/team';

class TeamController {
  constructor(factory) {
    this.name = 'Team';
    this.teams = [];
    this.init();    
  }

  init(){
    let self = this;
	  console.log('init team controller');
    let resData = this.loadTeams();
    resData.then(function(d){
      self.teams = d;
      console.log(JSON.stringify(d));
    });
  }

  loadTeams() {
    return teamList();
  }
}

export default ['team.factory',TeamController];
