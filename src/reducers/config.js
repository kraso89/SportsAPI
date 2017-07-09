export default function config( state={period:'latest'}, action){

	switch(action.type) {
		case 'SET_SPORT':
		return {...state, sport:action.payload}
		case 'SET_LIMIT':
		return {...state, limit:action.payload}
		case 'SET_STATUS':
		return {...state, status:action.payload}
		case 'SET_DATE':
		return {...state, date:action.payload}
		case 'SET_CONFIG':
		return Object.assign({},...state, action.payload)
		default:
			return state;

	}
	return state;

}
