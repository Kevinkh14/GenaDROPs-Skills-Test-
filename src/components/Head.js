import React , {Component} from 'react'
import { connect } from "react-redux";
import { getHead } from "../Redux/Reducers/pngReducer";
import {postnft,getNft} from '../Redux/Reducers/nftReducer'
import "../Styles/Create.css";

class Head extends Component{
    constructor(){
        super()
        this.state ={
          // nft:[],
          head:''
        }
    }
    componentDidMount(){
        this.props.getHead()
      }
    
    getHeadDiv = () => {
        let headid = document.getElementsByClassName("head-container")[0].id;
        this.setState({ head: headid });
        console.log(headid);
      };
      postNft = (e)=>{
        e.preventDefault()
        console.log(this.state.head)
        const {head } = this.state 
        this.props.postnft({head})
        // this.props.getNft()
        
        
      }
      check =()=>{
        console.log(this.props.nft)
      }
    checkUploadResult = (error, resultEvent) => {
        if (resultEvent.event === "success") {
          console.log("Picture uploaded successfully");
          console.log(resultEvent.info.url);
          this.setState({ head: resultEvent.info.url });
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
        return(
          <div>
              
                <h1>Head</h1>
            <div className="head">
              {" "}
              <div className="map">
                {this.props.head.map((head) => {
                  return (
                    <div
                      id={head.png}
                      className="head-container"
                      onClick={this.getHeadDiv}
                    >
                      <img className="head-img" src={head.png} />
                      <p id="p-">{head.name}</p>
                    </div>
                  );
                })}
              </div>
              <button onClick = {() => widget.open()}  >Upload</button>
              <button onClick= {this.postNft} >sumbit</button>
              <button onClick = {this.check} >d</button>
            </div>
            </div>
        )
    }
}
const mapStateToProps = (reduxState) => {
    return {
      head: reduxState.pngReducer.head,
      nft: reduxState.nftReducer.nft
    };
  };
  
  export default connect(mapStateToProps, {
    getHead,
    postnft,
    getNft
  })(Head);
  