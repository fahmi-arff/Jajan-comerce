import React from 'react';
import { connect } from 'react-redux';
import { Link} from 'react-router-dom';
import { getAllBarang, getBarangId } from '../../actions';
import image from '../../blank.png';

class JList extends React.Component {
  componentDidMount(){
    this.props.getAllBarang();
  }
  
  renderNominal(nominal){
    let d = nominal.toString()
    let temp=0;
    let price = ""
  
    for(let i=d.length-1; i>=0 ; i--){
      price  = d[i] + price
      temp+=1
      if(temp%3 === 0 && i !== 0) price  = "." + price
    }
    return price
  }

  renderBarang(){
    if (this.props.allBarang.length === 0){
      return <div>No Data</div>
    }
    return this.props.allBarang.map(brg => {
      return (
        <div className="card" key={brg._id}>
          <div className="image">
            <img src={image} alt={brg.nama}/>
          </div>
          <div className="ui red attached disable button" style={{cursor: "default"}}>
              {`Rp ${this.renderNominal(brg.harga)}`}
          </div>
          <Link to= {`/jajan/Detail/${brg._id}` } 
            onClick={() => this.props.getBarangId(brg._id)}
            className="content" 
          >
            <p className="header txt">{brg.nama}</p> 
          </Link>
          <div className="extra content">
            <i className="truck icon"></i>
            {brg.pengiriman.kota}
          </div>
        </div>
      )
    })
  }

  renderCard(){
    return <div className="ui four cards">{this.renderBarang()}</div>
  }

  render(){
    return (
      <div className="ui container grid">
        <div className="ui row">
        {this.renderCard()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { 
    allBarang: state.allBarang,
    keyId: state.loggingIn
   };
}

export default connect(
  mapStateToProps, 
  { getAllBarang, getBarangId }
)(JList)