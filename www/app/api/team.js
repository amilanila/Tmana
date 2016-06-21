import { API_END_POINT, Team } from '../constants';
import { extractProp, get, disregarder } from './common';

export const teamList = disregarder(() => {
	console.log('loading teams');
	return get('http://localhost:8080/api/team')
		.then(extractProp('teams'));
});