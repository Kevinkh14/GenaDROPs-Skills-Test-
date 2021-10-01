import React, { Component } from "react";
import NavBar from "./NavBar";
import "../Styles/Create.css";
import axios from 'axios'
import { connect } from "react-redux";
import {getBackground,getHead, getOutfit} from '../Redux/Reducers/pngReducer'

class Create extends Component {
  constructor() {
    super()
    this.state = {
      png: [],
    };
  }
  componentDidMount() {
    this.props.getBackground();
    this.props.getHead();
    this.props.getOutfit();

    console.log(this.props.background);
  }
  render() {
    {var backGround = this.props.background[0].map((backGround)=>{
      return(
      <div>{backGround}</div>
      )
    })}
    return (
      <div className="create">
        <NavBar />
        <div className="create-container">
          <div className="name-container">
            <p>Colletion Name</p>
            <div className="layerOrder-container">
              <p>Layer Orders</p>
            </div>
          </div>
          <div className="layers">
            <div className="back">
              <div><img src = {this.props.background[0].png}/></div>
            </div>
            <div className="head"></div>
            <div className="body"></div>
          </div>
          <section className="nft-container">
            <div className="connect">
              <h1>connect wallet</h1>
            </div>
            <div className="nft"></div>
          </section>
        </div>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    background:reduxState.pngReducer.background,
  };
};
export default connect(mapStateToProps, {
  getBackground,getHead,getOutfit
})(Create);