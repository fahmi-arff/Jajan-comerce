import React from 'react';
import { connect } from 'react-redux';

const DetailBarang = ({ barang }) => {
  if(!barang){
    return <div>Pilih Barang</div>
  }
  return (
    <div>
      <h3>Detail barang: </h3>
      <p>
        Nama Barang: {barang.nama}
        <br />
        Harga : {barang.harga}
      </p>
    </div>
  )
}

const mapStateToProps = state => {
  return {barang : state.barangTerpilih}
}

export default connect(mapStateToProps)(DetailBarang);