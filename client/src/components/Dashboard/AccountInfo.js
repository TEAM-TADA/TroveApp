import React, { Component } from 'react';
import { connect } from 'react-redux';

class AccountInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { user } = this.props;

    return (
      <div>
        <div className='account-info-title'>
          <span>
            Hello {user.userName}
          </span>
        </div>
        <br/>
        <div className='account-info-description'>
          <span>
            From your My Dashboard you have the ability to view a snapshot of your recent account activity and update your account information. Select link below to view or edit information.
          </span>
        </div>
        <br/>
        <div className='account-section-title'>
          <span>
            Account information
          </span>
        </div>
        <div className='account-info'>
          <div>
            <span>
              {user.userName}
            </span>
          </div>
          <div>
            <span>
              {user.userEmail}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

const accountInfoState = (store) => {
  return {
    user: this.props.userObj, // UPDATE THIS WHEN AUTH REDUX IS DONE
  }
}

export default connect(accountInfoState, null)(AccountInfo);