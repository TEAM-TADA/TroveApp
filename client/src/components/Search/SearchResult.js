import React, { Component } from 'react';
import SearchResultItem from './SearchResultItem';

class SearchResult extends Component {
  render() {
    return (
      <div className='list-section'>
        <div className='row'>
          {this.props.results.map(item => 
              <SearchResultItem item={item} key={item.id} addToCart={this.props.addToCart}/>
          ).reverse()}
        </div>
      </div>
    );
  }
}

export default SearchResult;