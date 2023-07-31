



/*er"
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


/*import { BrowserRouter as Router, Route, Routes, Link, NavLink, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Joinus from './Joinus';

const routing = (
    <Router>
        <div>
            <h1>Hello</h1>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/a" element={<About/>} />
                <Route path="/j" element={<Joinus/>} />
            </Routes>
        </div>
    </Router>
)

ReactDOM.render(routing,document.getElementById('root'));*/
/*import React,{Component} from "react";
import ReactDOM from"react-dom";
/*class Cartoon extends React.Component{
    constructor(props){
        super(props);
        this.state={like:"Tom"};

    }
    static getDerivedStateFromProps(props,state)
    {
      return{Ilike:props.A};
    }
    render()
    {
        return(
            <h1>this{this. state. Ilike}cartoon is cool</h1>
        );
    }
}
ReactDOM.render(<Cartoon A="jerry"/>,document.getElementById('root'));

export default Cartoon;*/
/*import ReactDOM from 'react-dom';
import React, {Component} from 'react';
//import { BrowserRouter as Router, Route, Routes, Link, NavLink, Switch } from 'react-router-dom';
//import Home from './Home';
//import About from './About';
//import Join from './Joinus';
class Header extends React.Component{
  constructor(props){
    super(props);
    this.state={favoritecolor:"red"};
  }
  shouldComponentUpdate(){
    return false;
  }
  //static getDerivedStateFromProps(props,state){
    //return {favoritecolor:props.favcol};

  //}
  changeColor=()=>
  {
    this.setState({favoritecolor:"blue"});
  }
  
  render(){
    return(
      <div>
      <h1> MY Favorite Color is {this.state. favoritecolor}</h1>
      <button type="button" onClick={this.changeColor}>changeColor</button>
      </div>
    );
  }
}
ReactDOM.render(<Header favcol="pink"/>,document.getElementById('root'));*/
/*import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, Link, NavLink, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Joinus from './Joinus';

const routing = (
    <Router>
        <div>
            <h1>Hello</h1>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/a" element={<About/>} />
                <Route path="/j" element={<Joinus/>} />
            </Routes>
        </div>
    </Router>
)

ReactDOM.render(routing,document.getElementById('root'));*/
import React from 'react';
import ReactDOM from 'react-dom';

//import './App.css';
import BM from './BM.jpg';
import Tennis from './Tennis.jpg';
import Hockey from './Hockey.jpg';
class App extends React.Component{
  constructor(){
    super();
    this.state= {sport:"",name:"",phno:null,add:"",fees:null,refer:null,amount:null,errmsg:"",imgscr:""};
  }
  uservalue=(event)=> {
    let n=event.target.name;
    let v=event.target.value;
    let err=" ";
    if(n==="phno"){
      if(v!==" "&&!Number(v)){
        err=<strong>invalid,This must be number</strong>
      }
      this.setState({errmsg1:err});
    }
    if(n==="fees"){
      if(v!==" "&&!Number(v)){
        err=<strong>invalid,This must be number</strong>
      }
      this.setState({errmsg2:err});
    }
    if(n==="refer"){
      if(v!==" "&&!Number(v)){
        err=<strong>invalid,This must be number</strong>
        this.setState({errmsg3:err});
      }else{
        this.setState({errmsg3:""});
      var r = document.getElementById("Refer").value;
      var f = document.getElementById("Fees").value;
      var t = r*f;
      document.getElementById("Total").value=t;  
      }
    }
    if(n==="sport") {
      if(v==="Tennis"){
        let a = Tennis;
        this.setState({imgscr:a});
      }
      if(v==="BatMinton"){
        let a = BM;
        this.setState({imgscr:a});
      }
      if(v==="Hockey"){
        let a = Hockey;
        this.setState({imgscr:a});
      }
    }
  }
  formSubmit=(event)=> {  
    event.preventDefault();
    alert("Registration is Success");
  }                                                                                            
  render(){
    return(
      <div>
        <img src={this.imgscr} alt='sports' width="300" height="200"/>
      <form onSubmit={this.formSubmit}>
        <h1>Sports registration </h1>

        Select Sport: <select id='image-select' name='sport' onClick={this.uservalue}>
          <option value={0}>Select option</option>
          <option value={"Tennis"}>Tennis</option>
          <option value={"BatMinton"}>Bat Minton</option>
          <option value={"Hockey"}>Hockey</option>
        </select>
        <br /><br />

        Name: <input type="text" name="username" onChange={this.uservalue} /> <br /><br />

        Phone : <input type="text" name="phno" onChange={this.uservalue}/>
        {this.state.errmsg1}<br /><br />

        Address : <input type="text" name="add" onChange={this.uservalue}/><br /><br />

        Fees : <input type="text" id='Fees' name="fees" onChange={this.uservalue}/>
        {this.state.errmsg2}<br /><br />

        References : <input type="text" id="Refer" name="refer" onChange={this.uservalue}/>
        {this.state.errmsg3}<br /><br />

        Total amount :<input type='text' id='Total' disabled /><br />

        <input type='submit' />
      </form>
      </div>  
    );
  }
}
ReactDOM.render(<App/>,document.getElementById('root'));

  




