export default function result( state= [], action){

	switch(action.type) {
		case 'SET_RESULT':
		return action.payload ? action.payload  : state;
		default:
			return state;

	}
	return state;
}
