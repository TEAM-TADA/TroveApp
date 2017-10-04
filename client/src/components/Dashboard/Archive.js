// This component will display logged user's history of rented items
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Loading from '../Loading';
import ArchiveItem from './ArchiveItem';

import * as dashboardActions from '../../actions/dashboardActions';

class Archive extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.actions.fetchTrx(this.props.user.id);
  }

  render() {
    return (
      <div>
        <div className='row'>
          {this.props.rentedItems.map(item => 
            <ArchiveItem rentItem={item} key={item.id} /> 
          ).reverse()}
        </div>
      </div>
    );
  }
}

const archiveState = (store) => {
  return {
    user: this.props.user, // UPDATE THIS WHEN AUTH REDUX DONE
    rentedItems: store.dashboard.rentedItems
  };
};

const archiveDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(dashboardActions, dispatch)
  };
};

export default connect(archiveState, archiveDispatch)(Archive);