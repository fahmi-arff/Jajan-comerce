import React from 'react';
import { connect } from 'react-redux';
import { postCreateProfile } from '../../actions';
import ProfileForm   from './ProfileForm';

class CreateProfile extends React.Component {
  onSubmit = (formValues) => {
    this.props.postCreateProfile(formValues)
  }

  render() {
    return (
      <div>
        <h3>Create Your Profile</h3>
        <ProfileForm onSubmit={this.onSubmit} />
      </div>
    )
  }
}

export default connect(null, { postCreateProfile })(CreateProfile)