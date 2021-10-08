import React , {Component} from 'react'
import { connect } from "react-redux";
import { getOutfit } from "../Redux/Reducers/pngReducer";
import "../Styles/Create.css";

class Outfit extends Component{
    constructor(){
        super()
    }
    componentDidMount(){
        this.props.getOutfit()
    }
    getOutfitDiv = () => {
        let outid = document.getElementsByClassName("outfit-container")[0].id;
        this.setState({ outfit: outid });
      };
    checkUploadResult = (error, resultEvent) => {
        if (resultEvent.event === "success") {
          console.log("Picture uploaded successfully");
          console.log(resultEvent.info.url);
          this.setState({ background: resultEvent.info.url });
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
            <div><h1>Outfit</h1>
            <div className="body">
              {" "}
              <div className="map">
                {this.props.outfit.map((outfit) => {
                  return (
                    <div
                      id={outfit.png}
                      className="outfit-container"
                      onClick={this.getOutfitDiv}
                    >
                      <img className="head-img" src={outfit.png} />
                      <p id="p-">{outfit.name}</p>
                    </div>
                  );
                })}
              </div>
            <input type = 'file'/>
            </div>
          </div>
        )
    }
}
const mapStateToProps = (reduxState) => {
    return {
      outfit: reduxState.pngReducer.outfit,
    };
  };
  
  export default connect(mapStateToProps, {
    getOutfit,
    
  })(Outfit);
  