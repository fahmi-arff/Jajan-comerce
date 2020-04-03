import React from 'react';
import { Field, reduxForm } from 'redux-form'

class CreateProfile extends React.Component {
  renderInput({ input, label, meta }){
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
        <div>{meta.error}</div>
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
        <Field name="namaDepan" component={this.renderInput} label="Nama Depan" />
        <Field name="namaBelakang" component={this.renderInput} label="Nama Belakang" />
        <button className="ui button primary">Submit</button>
      </form>
    )
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.namaDepan) {
    errors.namaDepan = 'Wajib mengisi nama Depan';
  }
  
  if (!formValues.namaBelakang) {
    errors.namaBelakang = 'Wajib mengisi nama Belakang';
  }
  
  return errors;
}

export default reduxForm ({
  form: 'createProfile',
  validate
})(CreateProfile); 