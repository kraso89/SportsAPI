import React, {Component} from 'react';

const Sports = ['NHL', "NFL", "NBA"]

class SearchForm extends Component {
	constructor(props) {
	  	super(props);
	  	this.state={
	  		user: localStorage.getItem('user')
	  	}
	}

  	handleLimit(event){
  		this.props.setLimit(event.target.value);
  		this.props.getData()
  	}

	handleStatus(event){
  		this.props.setStatus(event.target.value);
  		this.props.getData()
  	}

	handleDate(event){
  		this.props.setDate(event.target.value);
  		this.props.getData()
  	}

  	setSport(sport){
  	this.props.setSport(sport)
	this.props.getData()
	}

	saveConfig(){
		if(!this.refs.user.value) { 
			alert('Please input Username')
		 } else {
		localStorage.setItem("config",JSON.stringify(this.props.config))
		localStorage.setItem("user",this.refs.user.value)
		this.setState({user:this.refs.user.value})
		}
	}

	loadConfig(){
		this.props.setConfig(JSON.parse(localStorage.getItem('config')))
		this.props.getData()
	}

	render() {
	  	var sportsButtons = Sports.map( ( sport, i ) => 
	  		<button className="btn btn-block btn-success" key={i} onClick={this.setSport.bind(this, sport)}>{sport}</button> )
	    return (
				<div> 
					{this.state.user && <h3>Welcome {this.state.user}</h3>}
						<h4>Choose a sport:</h4> 
						<div className="sportsButtons">
							<div className='pull-left'>
							{sportsButtons}
							</div>
							<div className="pull-left userOptions">
							 <input  className="form-control" placeholder="Username" id="user" ref="user"/>
							 <button className="btn btn-block btn-success" onClick={this.saveConfig.bind(this)}>Save settings</button>
		           	    	 <button className="btn btn-block btn-success" onClick={this.loadConfig.bind(this)}>Load settings</button>
								{this.state.user && <p className="tip">(for user {this.state.user})</p>}
							</div>
						</div>
						<div className="sortFilter" style={{display:'inline-block', width:'100%'}}>
							<label>Show: 
								<select value={this.props.config.limit} onChange={this.handleLimit.bind(this)}>
									<option value="20">20</option>
									<option value="40">40</option>
									<option value="60">60</option>
								</select>
							</label>
							<label>Status: 
								<select value={this.props.config.status} onChange={this.handleStatus.bind(this)}>
									<option value="all">All</option>
									<option value="unplayed">Unplayed</option>
									<option value="in-progress">In-progress</option>
									<option value="postgame-reviewingo">Postgame-reviewing</option>
									<option value="final">Final</option>
								</select>
							</label>
							<label>Since: 
								<select value={this.props.config.date} onChange={this.handleDate.bind(this)}>
									<option value="all">All</option>
									<option value="since-yesterday">Yesterday</option>
									<option value="since-3-days-ago">3 Days ago</option>
									<option value="since-3-weeks-ago">3 Weeks ago</option>
									<option value="since-3-months-ago">3 Months ago</option>
								</select>
							</label>
						</div>
				</div>	
	    );
	}
}

export default SearchForm;
