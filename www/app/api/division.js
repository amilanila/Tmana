import { API_END_POINT, Division } from '../constants';
import { extractProp, get, disregarder } from './common';
import { pathUrl } from '../config';

export const divisionList = disregarder(() => {
	return get(pathUrl + API_END_POINT + Division.ALL)
		.then(extractProp('divisions'));
});