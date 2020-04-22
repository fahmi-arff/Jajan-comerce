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

  renderField(data){
    return data.map(a => {
      return (
        <Field key= {a} name= {a} component={this.renderInput} label={a.slice(0,1).toUpperCase() + a.slice(1)} />
      )
    })
  }

  renderForm(data, error){
    return ( 
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)} 
        className="ui form error"
      >
        {this.renderField(data)}
        <div className="ui error message">
          {error}
        </div>
        <button className="ui button primary">Submit</button>
      </form>
    )
  }
  

  render() {
    if(!this.props.keyId){
      return this.renderForm(['nama', 'username','password', 'email'], this.props.errorPost)
    } else {
      return this.renderForm(['nama', 'username','alamat', 'phone'], this.props.errorEdit)
    }
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.nama) errors.nama = 'Nama dibutuhkan';
  
  if (!formValues.username) errors.username = 'Usename dibutuhkan';
  
  if (!formValues.password) errors.password = 'Password dibutuhkan';

  if (!formValues.email) errors.email = 'Email dibutuhkan';
  
  if (!formValues.alamat) errors.alamat = 'Alamat dibutuhkan';

  // if (!formValues.phone) errors.phone = 'Phone dibutuhkan';
  
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
