import React, { Component } from "react";
import NavBar from "./NavBar";
import { connect } from "react-redux";
import { getBackground } from "../Redux/Reducers/pngReducer";
import { postnft, getNft } from "../Redux/Reducers/nftReducer";
import "../Styles/Create.css";


class Background extends Component {
    constructor(){
        super();
        this.state ={
          background :[],
          nft:[]
        }
    }
    componentDidMount(){
        this.props.getBackground();
    }
    getDiv = () => {
      let backid = document.getElementsByClassName("background-container")[0].id;
      this.setState({ background: backid });
      console.log(backid);
    };
    postNft = ()=>{
      const {nft} = this.state
      this.props.postnft({nft})
      console.log('hit')
    }
    checkUploadResult = (error, resultEvent) => {
        if (resultEvent.event === "success") {
          console.log("Picture uploaded successfully");
          // console.log(resultEvent.info.url);
          this.setState({ nft: resultEvent.info.url })
        }
        
      };
    render(){
        const widget = window.cloudinary.createUploadWidget(
            {
              cloudName: "kevin14",
              uploadPreset: "zfjpjtrr",
              sources: ["local", "url", "dropbox", "facebook", "instagram"]
            },
            (error, result) => {
              this.checkUploadResult(error, result);
            }
          );
        
    return (
      <div >
          <h1>background</h1>
            <div className="back">
              <div className="map">
                {this.props.background.map((back) => {
                  return (
                    <div
                      id={back.png}
                      className="background-container"
                      onClick={this.getDiv}
                    >
                      <img className="background-img" src={back.png} />
                      <p>{back.name}</p>
                    </div>
                  );
                })}
              </div>
              <button onClick = {() => widget.open()}  >Upload</button>
              <button onClick= {this.postNft} >sumbit</button>
            </div>
        
      </div>
    );
  }
}
  const mapStateToProps = (reduxState) => {
    return {
      background: reduxState.pngReducer.background,
    };
  };
  
  export default connect(mapStateToProps, {
    getBackground,
    postnft
  })(Background);
  