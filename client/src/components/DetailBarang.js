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

const mapStateToProps = state => {
  return {barang : state.barangId}
}

export default connect(mapStateToProps)(DetailBarang);