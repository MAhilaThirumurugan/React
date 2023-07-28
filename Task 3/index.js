import React from 'react';
import ReactDOM from 'react-dom/client';
import Function from "./Function";
import Task4 from'./Task4';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Function/>
    <Task4/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*import ReactDOM from "react-dom";
import React from "react";
import "./index.css"
import App from './App';


import App from "./App";
ReactDOM.render(<App fruit="Apple"/>,document.getElementById("root"));*/
/*import React from"react";
import ReactDOM from"react-dom";
//import styles from"./demo.module.css";
import'./App.css';
import video from './video.mp4';
import rose from './rose.jpg';
import flower from'./flower.jpg';
import jasmine from'./jasmine.jpg';
import image1 from './image1.jpg';
class Reactstyle extends React.Component{
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
      <h3 className={styles.heading}>Take ur seat.</h3>
      <img src={rose}alt="logo" width="200" height="200" padding="10px 0px 6px" style={myimage}></img>
      <img src={flower} width="200"height="200" style={myrose}></img>
      
     
      <center><video src={video} width="300" height="250" ></video></center>
      <img src={jasmine} width="200"height="200" style={myflower}></img>
      <img src={image1} width="200" height="200" style={myrose}></img></div>
    )
    }
  }
ReactDOM.render(<Reactstyle/>,document.getElementById('root'));
export default Reactstyle;*/
/*import React from "react";
import ReactDOM from "react-dom";
import rose from './rose.jpg';
class Reactstyle extends React.Component{
 render(){

const myele={
  width:"200",
  height:"300"

}
return(<div>
  <h1>rose</h1>
  <h2>flavour</h2>
  <img src={rose}alt="logo" width="200" height="200"></img>
</div>)}
}
//ReactDOM.render(<myele/>,document.getElementById('root'));*/
/*import React from'react';
import  ReactDOM from'react-dom';
var a=(x)=>
{
  var a=10;
  if((a%11)==0)
  {
     a="divisible by 11";
  }
  else{
    a="not divisible by 11"
  }
  document.getElementById('root').innerHTML=a;
}
a(30);*/
/*class Demo{
  
  methodone()
  {
    var n=56;
    var m;
    var sum;
    while(n>0)    
    {    
      m=n%10;    
      sum=sum+m;    
      n=n/10;    
    } 
    return sum;
  
       
    document.getElementById('root').innerHTML=n;
  }
}
var mydemo=new Demo();
mydemo.methodone();*/
/*function getSum(n)
{
  var sum = 0;
  while (n != 0) {
    sum = sum + n % 10;
    n = parseInt(n / 10);
  }
  return sum;
}
var n = 156;
document.getElementById('root').innerHTML=getSum(n);*/
/*class Demo{
  method(n)
  {
    var n,re,s=0;
    while(n){
      re=n%10;
      s=s+re;
      n=Math.floor(n/10);

    }
    document.getElementById("root").innerHTML=s;

  }
}
var obj=new Demo();
obj.method(345);*/

  





