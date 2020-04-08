import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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
          Nama : {myAkun.data.nama}
          <br />
          Username : {myAkun.data.username}
          <br />
          Email : {myAkun.data.email}
          <br />
          Alamat : {myAkun.data.alamat || ''}
          <br />
          No. Telepon : {myAkun.data.phone || ''}
        </p>
        <Link to={`/profile/edit/${myAkun.data._id}`} className="ui button primary">
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
  return {myAkun : state.currentUser}
}

export default connect(mapStateToProps)(ShowProfile);