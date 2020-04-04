import React from 'react';
import ReactDOM from 'react-dom';
import history from '../history';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { loginPost } from '../actions';

class Modal extends React.Component {
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
    this.props.loginPost(formValues)
  }

  render(){
    console.log(this.props)
    return ReactDOM.createPortal(
      <div className="ui dimmer modals visible active">
        <div className="ui standard modal visible active">
          <div className="header">Login</div>
          <div className="content">
            <form
              onSubmit={this.props.handleSubmit(this.onSubmit)} 
              className="ui form error"
            >
              <Field name="email" component={this.renderInput} label="Email" />
              <Field name="password" component={this.renderInput} label="Password" />
              <div className="ui error message">
                {this.props.errorLogin}
              </div>
              <button className="ui button primary">Submit</button>
            </form>
          </div>
          <div className="actions">
            <button className="ui primary button">Login</button>
            <button 
              onClick={() => history.push('/')}
              className="ui button"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>,
      document.querySelector('#modal')
    )
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.email) {
    errors.email = 'Email dibutuhkan';
  }

  if (!formValues.password) {
    errors.password = 'Password dibutuhkan';
  }
  
  return errors;
}

const mapStateToProps = state => {
  console.log(state)
  return {errorLogin : state.daftarLogin}
}

const formWrapped = reduxForm ({
  form: 'loginProfile',
  validate
})(Modal); 

export default connect(mapStateToProps, { loginPost })(formWrapped)