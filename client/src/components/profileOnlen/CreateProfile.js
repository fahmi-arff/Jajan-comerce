import React from 'react';
import { connect } from 'react-redux';
import { daftarPost } from '../../actions';
import ProfileForm   from './ProfileForm';


class CreateProfile extends React.Component {
  onSubmit = (formValues) => {
    this.props.daftarPost(formValues)
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

export default connect(null, { daftarPost })(CreateProfile)