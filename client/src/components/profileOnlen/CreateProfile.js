import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import { daftarPost } from '../../actions';

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

  onSubmit = (formValues) => {
    console.log(formValues)
    this.props.daftarPost(formValues)
  }

  render() {
    return ( 
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)} 
        className="ui form error"
      >
        <Field name="nama" component={this.renderInput} label="Nama" />
        <Field name="username" component={this.renderInput} label="Usename" />
        <Field name="password" component={this.renderInput} label="Password" />
        <Field name="email" component={this.renderInput} label="Email" />
        <button className="ui button primary">Submit</button>
      </form>
    )
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.nama) {
    errors.nama = 'Nama dibutuhkan';
  }
  
  if (!formValues.username) {
    errors.username = 'Usename dibutuhkan';
  }

  if (!formValues.password) {
    errors.password = 'Password dibutuhkan';
  }

  if (!formValues.email) {
    errors.email = 'Email dibutuhkan';
  }
  
  return errors;
}

const formWrapped = reduxForm ({
  form: 'createProfile',
  validate
})(CreateProfile); 

export default connect(null, { daftarPost })(formWrapped)