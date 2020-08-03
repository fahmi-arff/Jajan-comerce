import React from 'react';
import { connect } from 'react-redux';
import image from '../../blank.png';
// import { Link } from 'react-router-dom';

class JCheckout extends React.Component{
  renderData(){
    if(this.props.userLogin) {
      return this.props.userLogin.pesanan.map(brg => {
        return (
          <div class="item" key={brg._id}>
          <div class="ui tiny image">
            <img src={image}/>
          </div>
          <div class="content">
            <div class="header">
              {brg.barangId.nama}
            </div>
            <div class="extra">
            <div class="ui large blue label">Rp {brg.jumlah * brg.barangId.harga}</div>
            <div class="ui right floated  large tag label">
              {brg.jumlah} X Rp {brg.barangId.harga} 
            </div>
          </div>
          </div>
        </div>
        )
      })
    }
  }
  renderList(){
    return (
      <div class="ui list">
        {this.renderAddress()}
      </div>
    )
  }

  renderShoppingCart(){
    let total = 0
    
    if(this.props.userLogin) {
      for(let brg of this.props.userLogin.pesanan){
        total += (brg.jumlah * brg.barangId.harga)
      }
      return total;
    }else {
      return total;
    }
  }

  renderAddress(){
    if(this.props.userLogin){
      return (
        <div class="ui cards">
          <div class="card">
            <div class="content">
              <div class="header">Alamat Pengiriman</div>
              <div class="description">
                {this.props.userLogin.alamat}
              </div>
            </div>
          </div>
          <div class="card">
            <div class="content">
              <div class="header">Metode Pengiriman : SiKilat</div>
              <div class="description">
                Rp 5000 (Flat Rate)
              </div>
            </div>
          </div>
          <div class="card">
            <div class="content">
              <div class="header">Total Bayar</div>
              <div class="description">
                Rp {this.renderShoppingCart() + 5000}
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
  renderContent(){
    return (
      <div class="ui divided items">
        {this.renderData()}
        <div class="item">
          <div class="extra">
          {this.renderAddress()}
            <div class="ui right floated large blue button">
              Done
            </div>
          </div>
        </div>
      </div>
    )
  }
  render(){
    return (
      <div>
        {this.renderContent()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { 
    userLogin : state.currentUser,
  }
}

export default connect(mapStateToProps)(JCheckout)