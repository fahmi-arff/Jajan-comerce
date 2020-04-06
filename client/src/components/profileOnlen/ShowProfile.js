import React from 'react';
import { connect } from 'react-redux';

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
        </p>
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