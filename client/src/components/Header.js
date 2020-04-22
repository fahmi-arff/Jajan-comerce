import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getMyProfile, postLoginProfile } from '../actions';

class Header extends React.Component {
  renderbutton(){
    if(this.props.userLogin === null){
      return (
        <div>
          <Link to={`/profile/create`} className="ui button red">
            Daftar
          </Link>
          <Link to={`/profile/login`} className="ui button primary">
            Login
          </Link>          
        </div>
      )
    } else {
      return(
        <div>
          <Link to={`/profile/me`} className="ui button primary">
            Profile
          </Link>
          <Link to={`/`} onClick={() => {
            this.props.getMyProfile(null)
            this.props.postLoginProfile(null)
          }} className="ui red button">
            Logout
          </Link>
        </div>
      )
    }
  }

  renderShoppingCart(){
    return (this.props.userLogin) ? this.props.userLogin.pesanan.length : 0;
  }

  renderIconCart(){
    let {userLogin} = this.props
    return (userLogin && userLogin.pesanan.length > 0) ? '' : 'disabled';
  }

  render(){
    let style = this.renderIconCart()
    return (
      <div className="ui menu" style = {{marginTop: "10px"}} >
        <Link to="/" className="item">Jajan Onlen</Link>
        <div className="right menu">
          <Link to={`/`} style={{marginTop : "auto", marginBottom: "auto", paddingRight: "auto"}}>
            <label className={`ui right pointing basic ${style} label`}>
              {this.renderShoppingCart()}
            </label>
            <i className={`large cart arrow down ${style} icon`}></i> 
          </Link>
          {this.renderbutton()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { 
    userLogin : state.currentUser,
  }
}

export default connect(mapStateToProps, { getMyProfile, postLoginProfile })(Header)