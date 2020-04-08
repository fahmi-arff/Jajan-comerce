import React from 'react';
import { connect } from 'react-redux';
import { Link} from 'react-router-dom';
import { getAllBarang, getBarangId, loginPost, akunGet } from '../../actions';

class JList extends React.Component {
  componentDidMount(){
    this.props.getAllBarang();
  }
  
  renderBarang(){
    if (this.props.barang.length === 0){
      return <div>No Data</div>
    }
    return this.props.barang.data.map(brg => {
      return (
        <div className="item" key={brg._id}>
          <div className="right floated content">
            <Link to= {`/jajan/Detail/${brg._id}`} >
              <button 
                className="ui button primary"
                onClick={() => this.props.getBarangId(brg._id)}
              >
                Pilih
              </button>
            </Link>
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
      <div className="ui container grid">
        <div className="ui row">
          <div className="column eight wide">
            {this.renderList()}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { 
    barang: state.allBarang,
    keyId: state.daftarLogin
   };
}

export default connect(
  mapStateToProps, 
  { getAllBarang, getBarangId, loginPost, akunGet }
)(JList)