import React, {Component} from 'react';

class PlayInteractions extends Component {

  render(){

  return (

  <div>
    <i className="fa fa-play card-play-button " aria-hidden="true" onClick={ (e) => this.props.handleSelectedStation(this.props.station) }></i>
  </div>

);
  }


}

export default PlayInteractions;