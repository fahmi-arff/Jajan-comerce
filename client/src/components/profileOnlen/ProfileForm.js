import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

class ProfileForm extends React.Component {
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
    this.props.onSubmit(formValues)
  }

  render() {
    if(!this.props.keyId){
      return ( 
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)} 
          className="ui form error"
        >
          <Field name="nama" component={this.renderInput} label="Nama" />
          <Field name="username" component={this.renderInput} label="Usename" />
          <Field name="password" component={this.renderInput} label="Password" />
          <Field name="email" component={this.renderInput} label="Email" />
          <div className="ui error message">
            {this.props.errorPost}
          </div>
          <button className="ui button primary">Submit</button>
        </form>
      )
    } else {
      return ( 
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)} 
          className="ui form error"
        >
          <Field name="nama" component={this.renderInput} label="Nama" />
          <Field name="username" component={this.renderInput} label="Usename" />
          <Field name="alamat" component={this.renderInput} label="alamat" />
          <Field name="phone" component={this.renderInput} label="phone" />
          <div className="ui error message">
            {this.props.errorEdit}
          </div>
          <button className="ui button primary">Submit</button>
        </form>
      )
    }
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
  
  if (!formValues.alamat) {
    errors.alamat = 'Alamat dibutuhkan';
  }

  if (!formValues.phone) {
    errors.phone = 'Phone dibutuhkan';
  }
  
  return errors;
}
const mapStateToProps = state => {
  return {
    errorPost : state.register,
    errorEdit : state.editCurrentUser,
    keyId : state.loggingIn
  }
}

const formWrapped = reduxForm ({
  form: 'profileForm',
  validate
})(ProfileForm); 

export default connect(mapStateToProps)(formWrapped)
