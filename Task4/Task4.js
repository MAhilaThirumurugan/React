import React from"react";
import ReactDOM from"react-dom";
//import styles from"./demo.module.css";
import'./App.css';
import video from './video.mp4';
import rose from './rose.jpg';
import flower from'./flower.jpg';
import jasmine from'./jasmine.jpg';
import image1 from './image1.jpg';
class Task4 extends React.Component{
  render()
  {
    const mystyle={
      fontfamily:"Arial",
      textAlign:"center"
    };
    const myimage={
      float:"left",
      padding:" 20px"
   

    };
    const myrose={
      float:"right",
      
      marginright:"10px 0px 0px 620px",
     
      
    }
    const myflower={
      marginleft:"160px"
      
    }
    return(
      <div><h1 style={{color:'blue',textAlign:'left'}}> HEY BUDDY...</h1>
      <h2 style={mystyle}>welcome</h2>
      <h3 >Take ur seat.</h3>
      <img src={rose}alt="logo" width="200" height="200" padding="10px 0px 6px" style={myimage}></img>
      <img src={flower} width="200"height="200" style={myrose}></img>
      
     
      <center><video src={video} width="300" height="250" ></video></center>
      <img src={jasmine} width="200"height="200" style={myflower}></img>
      <img src={image1} width="200" height="200" style={myrose}></img></div>
    )
    }
  }
ReactDOM.render(<Task4/>,document.getElementById('root'));
export default Task4;