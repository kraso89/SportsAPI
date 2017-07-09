import React, {Component} from 'react';
import SingleGame from './SingleGame'

class ListOfGames extends Component {

  render() {
	var games = this.props.games && this.props.games.gameentry ? 
	 this.props.games.gameentry.map( (game,i) =>{ return <SingleGame key={i} game={game}/> } )
	 :null;
    return (
    	<div>
			<h4>{this.props.games && <span>Game list last updated on  + {this.props.games.lastUpdatedOn}</span> }</h4>
			<div>{games}</div>
		</div>			
    );	
  }
}

export default ListOfGames;
