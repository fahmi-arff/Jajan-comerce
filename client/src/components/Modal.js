import React from 'react';
import ReactDOM from 'react-dom';
import history from '../history';

const Modal = props => {
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active">
      <div className="ui standard modal visible active">
        <div className="header">Login</div>
        <div className="content">
          Do you want to login
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

export default Modal;