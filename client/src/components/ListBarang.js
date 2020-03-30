import React from 'react';
import { connect } from 'react-redux';

class ListBarang extends React.Component {
  render() {
    console.log(this.props);
    return <div>ListBarang</div>
  }
}

const mapStateToProps = state => {
  return { barang: state.barang };
}

export default connect(mapStateToProps)(ListBarang);