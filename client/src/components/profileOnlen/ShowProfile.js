import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { akunGet } from '../../actions';

class ShowProfile extends React.Component {
  renderDetail(){
    const {myAkun} = this.props
    if(!myAkun){
      return <div>No Profile</div>
    }
    return (
      <div>
        <h3>Detail myAkun: </h3>
        <p>
          Nama : {myAkun.nama}
          <br />
          Username : {myAkun.username}
          <br />
          Email : {myAkun.email}
          <br />
          Alamat : {myAkun.alamat || ''}
          <br />
          No. Telepon : {myAkun.phone || ''}
        </p>
        <Link to={`/profile/edit/${myAkun._id}`} className="ui button primary">
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
    myAkun : state.currentUser,
    keyId : state.daftarLogin,
    updated: state.editUser
  }
}

export default connect(mapStateToProps, { akunGet })(ShowProfile);