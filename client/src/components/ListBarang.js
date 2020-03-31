import React from 'react';
import { connect } from 'react-redux';
import { barangGet, barangId } from '../actions';

class ListBarang extends React.Component {
  componentDidMount(){
    this.props.barangGet();
  }
  
  renderList(){
    if (this.props.barang.length === 0){
      return (
        <div>
          No Data
        </div>
      )
    }
    return this.props.barang.data.map(brg => {
      return (
        <div className="item" key={brg._id}>
          <div className="right floated content">
            <button 
              className="ui button primary"
              onClick={() => this.props.barangId(brg._id)}
            >
              Pilih
            </button>
          </div>
          <div className="content">{brg.nama}</div>
        </div>
      )
    })
  }

  render(){
    return <div className="ui relaxed divided list">{this.renderList()}</div>
  }
}

const mapStateToProps = state => {
  return { barang: state.barangGet };
}

export default connect(
  mapStateToProps, 
  { barangGet, barangId }
)(ListBarang)