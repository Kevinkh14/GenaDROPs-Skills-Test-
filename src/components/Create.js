import React, { Component } from "react";
import NavBar from "./NavBar";
import "../Styles/Create.css";
import axios from "axios";
import { connect } from "react-redux";
import TopNavBar from "./TopNavBar";
import {
  getBackground,
  getHead,
  getOutfit,
} from "../Redux/Reducers/pngReducer";
import Background from "./Background";
import Head from "./Head";
import Outfit from "./Outfit";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import mergeImages from 'merge-images';

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      background: [],
      head: "",
      outfit: "",
      png: "",
      mint :''
    };
  }
  componentDidMount() {
    this.props.getBackground();
    this.props.getHead();
    this.props.getOutfit();

    console.log(this.props.background);
  }
  getDiv = (png) => {
    this.setState({ background: png });
    console.log(png);
  };
  showFile =(file)=>{
   
      const text = (file.target.value)
      console.log(text)
      this.setState({outfit:text})
      alert(text)
    }
  
  getOutfit = (png) => {
    this.setState({ outfit: png});
    console.log(png);

  };
  getFile = (e) => {
    let files = e.target.files;
    console.log(files[0].name);
    this.setState({ background: files[0].name });
  };

  render() {
    const back = this.state.background

// const merge = mergeImages([back])
//   .then(b64 => document.querySelector('img').src = b64);
//   // data:image/png;base64,iVBORw0KGgoAA...

    return (
      <div className="create">
        <NavBar />
        <TopNavBar/>
        <div className="create-container">
          <div className="name-container">
            <p>Colletion Name</p>
            <DragDropContext onDragEnd={this.onDragEnd}>
              <div className="layerOrder-container">
                <p>Layer Orders</p>
                <Droppable droppableId="droppable-1" type="PERSON">
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      
                      {...provided.droppableProps}
                    >
                      <Draggable draggableId="draggable-1" index={0}>
                        {(provided,snapshot) => (
                          <div
                            
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <p>Background</p>
                          </div>
                        )}
                      </Draggable>
                      <Draggable draggableId="draggable-2" index={0}>
                        {(provided, snapshot) => (
                          <div
                            
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <p>Head</p>
                          </div>
                        )}
                      </Draggable>
                     
                      <Draggable draggableId="draggable-3" index={0}>
                        {(provided, snapshot) => (
                          <div
                            
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <p>Outfit</p>
                          </div>
                        )}
                      </Draggable>
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            </DragDropContext>
          </div>
          <div className="layers">
          <h1>background</h1>
            <div className="back">
              <div className="map">
                {this.props.background.map((back,index) => {
                  return (
                    <div
                      key ={index}
                      id={back.png}
                      className="background-container"
                      onClick={() =>this.getDiv(back.png)}
                    >
                      <img className="background-img" src={back.png} />
                      <p>{back.name}</p>
                    </div>
                  );
                })}
              </div>
              <button   >Upload</button>
              <button onClick= {this.postNft} >sumbit</button>
            </div>
            <Head />
            <div><h1>Outfit</h1>
            <div className="body">
              {" "}
              <div className="map">
                {this.props.outfit.map((outfit) => {
                  return (
                    <div
                      id={outfit.png}
                      className="outfit-container"
                      onClick={()=>this.getOutfit(outfit.png)}
                    >
                      <img className="head-img" src={outfit.png} />
                      <p id="p-">{outfit.name}</p>
                    </div>
                  );
                })}
              </div>
            <input type = 'file' onChange={(file) => this.showFile(file)} />
            </div>
          </div>
          </div>
          <div className="nft-container">
           
            <div className="nft">
              <div>
                <img id="nft-png1" src={this.state.background}></img>

                <img id="nft-png2" src={this.state.head}></img>
                <img id="nft-png3" src={this.state.outfit}></img>
              </div>
            </div>
            <div className = 'decription'></div>
            <div className = 'mint-dwnld'>
            <h3 className = 'download-btn'><a href ={this.state.background} download = {this.state.background}>Download</a></h3>
            <h3 className = 'mint'>mint</h3>
            </div>
              <div className = 'mnt-comb'>
                <div className = 'mnt-con'>
                  <p>mint ammount</p>
                  <input type='number'defaultValue ='1000'/>
                  </div>
                  <div className = 'mnt-con'>
                    <p>combinations</p>
                  </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => {
  return {
    background: reduxState.pngReducer.background,
    head: reduxState.pngReducer.head,
    outfit: reduxState.pngReducer.outfit,
  };
};
export default connect(mapStateToProps, {
  getBackground,
  getHead,
  getOutfit,
})(Create);
