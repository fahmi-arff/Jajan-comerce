import React from 'react';
import { Field, reduxForm } from 'redux-form'

class CreateProfile extends React.Component {
  renderInput({ input }){
    return <input {...input}/>
  }
  render() {
    return (
      <form>
        <Field name="Nama Depan" component={this.renderInput} />
        <Field name="Nama Belakang" component={this.renderInput} />
      </form>
    )
  }
}

export default reduxForm ({
  form: 'createProfile'
})(CreateProfile); 