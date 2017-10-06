import React, { Component } from 'react';
import WomenItem from './WomenItem';
import Loading from '../../components/Loading';

class Women extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='list-section'>
        <div className='list-section-title'>
          <span>WOMEN</span>
        </div>
        <div className='row'>
          {!this.props.items ? <Loading /> : this.props.items.map(item => 
            { if(item.sex === 'F') {
              return <WomenItem 
              item={item} 
              addToCart={this.props.addToCart} 
              checkUser={this.props.checkUser}
              key={item.id}/>}
            }
          ).reverse()}
        </div>
      </div>
    );
  }
}

export default Women;