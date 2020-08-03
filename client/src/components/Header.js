import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dropdown, Menu} from 'semantic-ui-react'
import { getMyProfile, postLoginProfile } from '../actions';
import image from '../blank.png';

class Header extends React.Component {
  renderbutton(){
    if(this.props.userLogin === null){
      return (
        <div className = 'ui menu'>
          <div className = 'ui item'>
            <Link to={`/profile/create`} className="ui button red">
              Daftar
            </Link>
          </div>
          <div className = 'ui item'>
            <Link to={`/profile/login`} className="ui button primary">
              Login
            </Link> 
          </div>        
        </div>
      )
    } else {
      return(
        <div className = 'ui menu'>
          <div className = 'ui item'>
            <Link to={`/profile/me`} className="ui button primary">
              Profile
            </Link>
          </div>
          <div className = 'ui item'>
            <Link to={`/`} onClick={() => {
              this.props.getMyProfile(null)
              this.props.postLoginProfile(null)
            }} className="ui red button">
              Logout
            </Link>
          </div>
        </div>
      )
    }
  }

  renderDropdownCart(){
    if(this.props.userLogin) {
      return this.props.userLogin.pesanan.map(brg => {
        return (
          <Dropdown.Item key={brg._id} style={{cursor: "default"}} >
            <div className="ui cards">
              <div className="card">
                <div className="content"> 
                  <img className="left floated mini ui image" alt="" src={image}/>
                  {brg.barangId.nama}
                  <div className="ui bottom right attached label">
                    {brg.jumlah} X Rp {brg.barangId.harga} = Rp {brg.jumlah * brg.barangId.harga}
                  </div>
                </div>
              </div>
            </div>
          </Dropdown.Item>
          )
        })
    }else {
      return ( 
        <Dropdown.Item>
          <div className="ui items">
            <div className="ui bottom attached label"><h3>Keranjang Kosong</h3></div>
          </div>
        </Dropdown.Item>
      )
    } 
  }

  renderShoppingCart(){
    let total = {
      harga: 0,
      barang: 0
    };
    if(this.props.userLogin) {
      for(let brg of this.props.userLogin.pesanan){
        total.harga += (brg.jumlah * brg.barangId.harga)
        total.barang += brg.jumlah
      }
      return total;
    }else {
      return total;
    }
  }

  renderIconCart(){
    let {userLogin} = this.props
    return (userLogin && userLogin.pesanan.length > 0) ? '' : 'disabled';
  }

  render(){
    let style = this.renderIconCart()
    return (
      <div className="ui menu" style = {{marginTop: "15px"}} >
        <Link to="/" className="item header">
          <h3>Jajan Onlen</h3>
        </Link>
          <div className="right menu">
            <Menu>
              <div className="ui item">
                <label className={`ui right pointing blue basic ${style} label`}>
                  {this.renderShoppingCart().barang}
                </label>
              </div>
              <Dropdown item icon={`large cart arrow down primary ${style}`}>
                <Dropdown.Menu>
                  {this.renderDropdownCart()}
                  <Dropdown.Item style={{cursor: "default"}} >
                    <div className="ui items" style={{margin: "auto"}}>
                      <Link to="/jajan/checkout" className="ui button primary">
                        Checkout
                      </Link>
                      <label className="ui tag label"><p className="ui label">Rp {this.renderShoppingCart().harga}</p></label>
                    </div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu>
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