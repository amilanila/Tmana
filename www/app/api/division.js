import { API_END_POINT, Division } from '../constants';
import { extractProp, get, disregarder } from './common';

export const divisionList = disregarder(() => {
	console.log('loading divisions');
	return get('http://localhost:8080/api/division')
		.then(extractProp('divisions'));
});