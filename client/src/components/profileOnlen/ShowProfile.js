import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getMyProfile } from '../../actions';

class ShowProfile extends React.Component {
  renderDetail(){
    const {currentUser} = this.props
    if(!currentUser){
      return <div>No Profile</div>
    }
    return (
      <div>
        <h3>Detail currentUser: </h3>
        <p>
          Nama : {currentUser.nama}
          <br />
          Username : {currentUser.username}
          <br />
          Email : {currentUser.email}
          <br />
          Alamat : {currentUser.alamat || ''}
          <br />
          No. Telepon : {currentUser.phone || ''}
        </p>
        <Link to={`/profile/edit/${currentUser._id}`} className="ui button primary">
          Edit Profil
        </Link>
      </div>
    )
  }
  render(){
    return (
      <div className="ui container grid">
        <div className="ui row">
          <div className="column eight wide">
            {this.renderDetail()}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser : state.currentUser,
    keyId : state.loggingIn,
    updated: state.editCurrentUser
  }
}

export default connect(mapStateToProps, { getMyProfile })(ShowProfile);