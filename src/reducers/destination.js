export default function destination( state= [], action){
	switch(action.type) {
		case 'NAVIGATE':
		return action.payload ? action.payload : state;
		
		default:
		return state;
	}
	return state;
}
