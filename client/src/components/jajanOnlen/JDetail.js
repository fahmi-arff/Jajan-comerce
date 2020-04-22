import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../actions';

class JDetail extends React.Component {
  renderButton(){
    return {
      enable : {
        style : "primary",
        text : "Tambah Ke Keranjang"
      },
      disable : {
        style : "disabled",
        text : "Login Please"
      }
    }
  }

  renderDetail(){
    let button = this.renderButton()
    let config;
    (this.props.currentUser) ? config = button.enable : config = button.disable

    const {barang} = this.props
    if(!barang){
      return <div>Pilih Barang</div>
    }
    return (
      <div>
        <h3>Detail barang: </h3>
        <p>
          Jenis Barang: {barang.kategori.name} <br />
          Nama Barang: {barang.nama} <br />
          Harga : {barang.harga} <br />
          Stok  : {barang.stok} <br />
          Asal Kota : {barang.pengiriman.kota}
        </p>
        <button 
          className={`ui button ${config.style} `}
          onClick={() => this.props.addToCart(this.props.barang._id, this.props.keyId)}
        >
          <i className="shop icon"></i>
          {config.text}
        </button>
        
      </div>
    )
  }
  render(){
    return (
      <div className="ui container grid">
        <div className="ui row">
          <div className="column eight wide">
            {this.renderDetail()}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    barang : state.barangId,
    currentUser: state.currentUser,
    keyId : state.loggingIn,
  }
}

export default connect(mapStateToProps, {addToCart})(JDetail);