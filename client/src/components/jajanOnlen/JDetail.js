import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../actions';
import image from '../../blank.png';

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

  renderNominal(nominal){
    let d = nominal.toString()
    let temp=0;
    let price = ""
  
    for(let i=d.length-1; i>=0 ; i--){
      price  = d[i] + price
      console.log(d[i])
      temp+=1
      if(temp%3 === 0 && i !== 0) price  = "." + price
    }
    return price
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
      <div className="ui grid">
        <div className="sixteen wide column">
          <h3>Detail barang: </h3>
        </div>
        <div className="eight wide column">
          <div className="ui image">
            <div class="ui teal right ribbon label">
              Stok  : {barang.stok}
            </div>
            <img src={image} alt=""/>
          </div>
        </div>
        <div className="eight wide column">
          <div class="content">
            <h3 class="header">{barang.nama}</h3>
            <div class="description">
              <div class="ui tag labels">
                <a class="ui red big large label">
                  Rp {this.renderNominal(barang.harga)}
                </a>
              </div>
            </div>
            <div class="extra">
              <br/>
              <div class="ui label"><i class="tags icon"></i>{barang.kategori.name}</div>
              <div class="ui label"><i class="truck icon"></i>{barang.pengiriman.kota}</div>
            </div>
          </div>
          <div class="ui bottom right attached basic items label">
            <button style={{right: "5px"}}
              className={`ui button ${config.style} `}
              onClick={() => this.props.addToCart(this.props.barang._id, this.props.keyId)}
            >
              <i className="shop icon"></i>
              {config.text}
            </button>
          </div>
        </div>
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