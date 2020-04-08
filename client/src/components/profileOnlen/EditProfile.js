import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { patchEditProfile } from '../../actions';
import ProfileForm from './ProfileForm';

class EditProfile extends React.Component {
  onSubmit = formValues => {
    this.props.patchEditProfile(this.props.keyId, formValues)
  }
  render(){
    if(!this.props.currentUser) {
      return <div>Loading...</div>;
    }
    
    return (
      <div>
        <h3>Edit Profile</h3>
        <ProfileForm 
          initialValues={_.pick(this.props.currentUser, 'nama', 'username', 'alamat', 'phone')}
          onSubmit={this.onSubmit}
        />
      </div>
    )
  }
}

const mapStateToProps = state =>{
  return {
    currentUser : state.currentUser,
    keyId: state.loggingIn
  }
}

export default connect(mapStateToProps, {
  patchEditProfile
})(EditProfile); 