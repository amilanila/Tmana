import { API_END_POINT, Team } from '../constants';
import { extractProp, get, disregarder } from './common';
import { pathUrl } from '../config';

export const teamList = disregarder(() => {
	return get(pathUrl + API_END_POINT + Team.ALL)
		.then(extractProp('teams'));
});

export const teamByDivision = disregarder( divId => {
	return get(pathUrl + API_END_POINT + Team.TEAM_BY_DIVISION + divId)
		.then(extractProp('teams'));
});