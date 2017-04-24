import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import PropTypes from 'prop-types';

export class NavDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.onClickProfile = this.onClickProfile.bind(this);
    this.onClickLogout = this.onClickLogout.bind(this);
  }

  onClickProfile() {
    this.props.dispatch(push('/profile'));
    this.props.onClickMenu();
  }

  onClickLogout() {
    this.props.onClickMenu();
    localStorage.removeItem('reflective_token');
    this.props.dispatch(push('/'));
    location.reload(true);
  }

  render() {
    return (
      <div>
        <div className="ui inverted vertical menu nav-dropdown">
          <a
            className="item"
            onClick={this.onClickProfile}
          >Profile</a>
          <a
            className="item"
            onClick={this.onClickLogout}
          >Logout</a>
        </div>
      </div>
    );
  }

}

const mapStateToProps = state => (
  {
    ...state
  }
);

NavDropdown.propTypes = {
  dispatch: PropTypes.func.isRequired,
  onClickMenu: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(NavDropdown);
