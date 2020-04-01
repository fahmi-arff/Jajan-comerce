import React from 'react';
import { connect } from 'react-redux';
import { barangGet, barangId } from '../../actions';

class JList extends React.Component {
  componentDidMount(){
    this.props.barangGet();
  }
  
  renderBarang(){
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

  renderList(){
    return <div className="ui relaxed divided list">{this.renderBarang()}</div>
  }

  render(){
    return (
      // <div>Bisa dong</div>
      <div className="ui container grid">
        TESAJA
        <div className="ui row">
          <div className="column eight wide">
            {this.renderList()}
          </div>
          {/* <div className="column eight wide">
            <DetailBarang />
          </div> */}
        </div>
        {/* <Link to="/jajan/Detail">Navigate to page two</Link> */}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { barang: state.barangGet };
}

export default connect(
  mapStateToProps, 
  { barangGet, barangId }
)(JList)