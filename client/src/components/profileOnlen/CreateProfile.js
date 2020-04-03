import React from 'react';
import { Field, reduxForm } from 'redux-form'

class CreateProfile extends React.Component {
  renderInput({ input, label }){
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
      </div>
    )
  }

  onSubmit(formValues) {
    console.log(formValues)
  }

  render() {
    return ( 
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)} 
        className="ui form"
      >
        <Field name="Nama Depan" component={this.renderInput} label="Nama Depan" />
        <Field name="Nama Belakang" component={this.renderInput} label="Nama Belakang" />
        <button className="ui button primary">Submit</button>
      </form>
    )
  }
}

export default reduxForm ({
  form: 'createProfile'
})(CreateProfile); 