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
          Nama : {myAkun.nama}
          <br />
          Username : {myAkun.username}
          <br />
          Email : {myAkun.email}
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
  return {myAkun : state.currentUser.data}
}

export default connect(mapStateToProps)(ShowProfile);