import Api from '../lib/api'

export function getData() {
	return (dispatch, getState) => {
		var route = [
		'/'+getState().config.period,
		'full_game_schedule.json'
		].join('/');

		var statusParam = getState().config.status == 'all' ?''  : '&status='+getState().config.status ;
		var dateParam = getState().config.date  == 'all' ?''  : '&date='+getState().config.date ;

		var sort =[
		'?limit='+getState().config.limit,
		statusParam,
		dateParam,
		].join('');
		
		var sport = getState().config.sport; 
		return Api.get(sport,route,sort).then(resp => {
	    	  dispatch(setResult(resp));
		    }).catch( (ex) => {
		       alert('An error occured, please try again!');
		    });



	}
}

export function setLimit(payload) {
  return{
    type: 'SET_LIMIT',
    payload,
  }
}

export function setDate(payload) {
  return{
    type: 'SET_DATE',
    payload,
  }
}


export function setStatus(payload) {
  return{
    type: 'SET_STATUS',
    payload,
  }
}

export function setSport(payload) {
  return {
    type: 'SET_SPORT',
    payload,
  }
}


export function setResult(payload) {
  return {
    type: 'SET_RESULT',
    payload,
  }
}



export function setConfig(payload) {
  return{
    type: 'SET_CONFIG',
    payload,
  }
}
