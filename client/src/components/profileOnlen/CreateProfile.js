import React from 'react';
import { Field, reduxForm } from 'redux-form'

class CreateProfile extends React.Component {
  renderError({ error, touched }){
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      )
    }
  }

  renderInput = ({ input, label, meta }) => {
    const inputError = `field ${meta.error && meta.touched ? 'error': '' }`;
    return (
      <div className={inputError}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
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
        className="ui form error"
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