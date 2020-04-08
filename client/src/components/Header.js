import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getMyProfile, postLoginProfile } from '../actions';

class Header extends React.Component {
  renderbutton(){
    if(this.props.userLogin === null){
      return (
        <div>
          <Link to={`/profile/create`} className="ui button red">
            Daftar
          </Link>
          <Link to={`/profile/login`} className="ui button primary">
            Login
          </Link>
        </div>
      )
    } else {
      return(
        <div>
          <Link to={`/profile/me`} className="ui button primary">
            Profile
          </Link>
          <Link to={`/`} onClick={() => {
            this.props.getMyProfile(null)
            this.props.postLoginProfile(null)
          }} className="ui red button">
            Logout
          </Link>
        </div>
      )
    }
  }
  render(){
    return (
      <div className="ui secondary pointing menu">
        <Link to="/" className="item">Jajan Onlen</Link>
        <div className="right menu">
          <Link to="/" className="item">Branda</Link>
        </div >
          {this.renderbutton()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { userLogin : state.currentUser}
}

export default connect(mapStateToProps, { getMyProfile, postLoginProfile })(Header)