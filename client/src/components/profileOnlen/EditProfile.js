import React from 'react';
import { connect } from 'react-redux';
import { editProfile } from '../../actions';
import ProfileForm from './ProfileForm';

class EditProfile extends React.Component {
  onSubmit = formValues => {
    this.props.editProfile(this.props.keyId, formValues)
  }
  render(){
    console.log(this.props.akun)
    if(!this.props.akun) {
      return <div>Loading...</div>;
    }
    
    return (
      <div>
        <h3>Edit Profile</h3>
        <ProfileForm 
          initialValues={this.props.akun.data}
          onSubmit={this.onSubmit}
        />
      </div>
    )
  }
}

const mapStateToProps = state =>{
  return {
    akun : state.currentUser,
    keyId: state.daftarLogin
  }
}

export default connect(mapStateToProps, {
  editProfile
})(EditProfile); 