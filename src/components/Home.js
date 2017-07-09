import React, {Component} from 'react';
import SearchForm from './SearchForm';
import ListOfGames from './ListOfGames';

class Home extends Component {

constructor(props){
	super(props);
	this.state = {
	
	}
}

componentWillMount(){
	this.props.getData();
}

  render() {
    return (
		<div> 
			<h3 className="text-center">{this.props.config.sport}</h3>
			<SearchForm
			{...this.props}
			 setSport={this.props.setSport.bind(this)}
			 getData={this.props.getData.bind(this)}
			 setLimit={this.props.setLimit.bind(this)}
			 setDate={this.props.setDate.bind(this)}
			 setConfig={this.props.setConfig.bind(this)}/>
			<ListOfGames games={this.props.result.fullgameschedule} />
		</div>	
    );
  }
}

export default Home;
