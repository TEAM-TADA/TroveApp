import React, { Component } from 'react';
import UserWardrobeItem from './UserWardrobeItem';
import { connect } from 'react-redux';

class UserWardrobe extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { user, items } = this.props;

    return (
      <div className='list-section'>
      <div className='list-section-title'>
          <span>{user.username}</span>
        </div>
        <div className='row'>
          {items.map(item => 
            {if(item.rentee_id === user.id) {
              return <UserWardrobeItem passItem={item} key={item.id} /> }
            }
          ).reverse()}
        </div>
      </div>
    );
  }
}

const userWardrobeState = (store) => {
  return {
    user: this.props.user, // UPDATE!
    items: this.props.items // UPDATE!
  };
};

export default connect(userWardrobeState, null)(UserWardrobe);