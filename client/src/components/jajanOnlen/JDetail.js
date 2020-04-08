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
          Jenis Barang: {barang.data.kategori.name}
          <br />
          Nama Barang: {barang.data.nama}
          <br />
          Harga : {barang.data.harga}
          <br />
          Stok  : {barang.data.stok}
          <br />
          Asal Kota : {barang.data.pengiriman.kota}
        </p>
      </div>
    )
  }
  render(){
    console.log(this.props)
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

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps)
  return {barang : state.barangId}
}

export default connect(mapStateToProps)(JDetail);