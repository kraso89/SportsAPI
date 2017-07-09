import React, {Component} from 'react';

class SingleGame extends Component {
  render() {
	const {homeTeam, awayTeam , date,time , location} = this.props.game;
    return (
  	<div className="card text-center col-md-4 col-sm-6">
	  <div className="card-header">
	    {homeTeam.Abbreviation} VS {awayTeam.Abbreviation}
	  </div>
	  <div className="card-block">
	    <h4 className="card-title">
	    {homeTeam.Name}<span style={{fontSize:".7em"}}>({homeTeam.City})</span> vs. {awayTeam.Name}<span style={{fontSize:".7em"}}>({awayTeam.City})</span>
	    </h4>
	    <p className="card-text">{location}</p>
	  </div>
	  <div className="card-footer text-muted">
	   {date} <span style={{fontSize:'1.1em'}}>{time}</span>
	  </div>
	</div>
    );	
  }
}

export default SingleGame;
