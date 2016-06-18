import { API_END_POINT, Division } from '../constants';
// imp/ort { extractAll, get, disregarder } from './common';

// export const divisionList = disregarder(() => {
// 	console.log('load divisions - rest service');
// 	return get(API_END_POINT + Division.LIST)
// 		.then(extractAll());
// });

export const divisionList = () => {
	console.log('load divisions - local >>>>>> ');

	return [
		{'name': 'div1', 'title': 'Division 1'},
		{'name': 'div2', 'title': 'Division 2'},
		{'name': 'div3', 'title': 'Division 3'}
	];
};