import React from 'react';
import { connect } from 'react-redux';

class ListBarang extends React.Component {
  renderList() {
    return this.props.barang.map(brg => {
      return (
        <div className="item" key={brg.nama}>
          <div className="right floated content">
            <button className="ui button primary">
              Pilih
            </button>
          </div>
          <div className="content">{brg.nama}</div>
        </div>
      )
    })
  }

  render() {
  return <div className="ui divided list">{this.renderList()}</div>
  }
}

const mapStateToProps = state => {
  return { barang: state.barang };
}

export default connect(mapStateToProps)(ListBarang);