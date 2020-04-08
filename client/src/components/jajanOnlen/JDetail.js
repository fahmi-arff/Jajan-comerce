import React from 'react';
import { connect } from 'react-redux';

class JDetail extends React.Component {
  renderDetail(){
    const {barang} = this.props
    if(!barang){
      return <div>Pilih Barang</div>
    }
    return (
      <div>
        <h3>Detail barang: </h3>
        <p>
          Jenis Barang: {barang.kategori.name}
          <br />
          Nama Barang: {barang.nama}
          <br />
          Harga : {barang.harga}
          <br />
          Stok  : {barang.stok}
          <br />
          Asal Kota : {barang.pengiriman.kota}
        </p>
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
  return {barang : state.barangId}
}

export default connect(mapStateToProps)(JDetail);