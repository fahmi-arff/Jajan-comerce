import React from 'react';
import { connect } from 'react-redux';

const DetailBarang = props => {
  console.log(props);
  return <div>DetailBarang</div>
}

const mapStateToProps = state => {
  return {barang : state.barangTerpilih}
}

export default connect(mapStateToProps)(DetailBarang);