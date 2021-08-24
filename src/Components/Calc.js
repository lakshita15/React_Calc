import React, { Component } from 'react'

export default class Calc extends Component {
    constructor(){

        super();
        this.state={
            input:"",
            prevnumber:"",
            currnumber:"",
            opener:""
        }
    }
    addToInput=(e)=>{
        this.setState({
            input:(this.state.input.concat(e.target.name))
        })
        console.log(this.state.input);
    }
 
   
    clearInput=()=>{
        this.setState({
            input:"0"
        })
    }
    Backspace=()=>{
this.setState({
    input: this.state.input.slice(0, this.state.input.length-1)
})
    }
    calculate=()=>{
        this.setState({
            input:(eval(this.state.input).toString())
        })
    }
    render() {
        return (
            <div className="App">
              <div className="row">
               <input value={this.state.input}></input>
              </div>
            <div className="calc-wrapper">
              
                <button  name ="7" onClick={this.addToInput}>7</button>
                <button  name ="8" onClick={this.addToInput}>8</button>
                <button name ="9" onClick={this.addToInput}>9</button>
                <button className="highlight" name ="/" onClick={this.addToInput}>/</button>
             
              
                <button name ="4" onClick={this.addToInput}>4</button>
                <button name ="5" onClick={this.addToInput}>5</button>
                <button name ="6" onClick={this.addToInput}>6</button>
                <button className="highlight" name ="*" onClick={this.addToInput}>*</button>
             
              
                <button name ="1" onClick={this.addToInput}>1</button>
                <button name ="2" onClick={this.addToInput}>2</button>
                <button name ="3" onClick={this.addToInput}>3</button>
                <button className="highlight" name ="+" onClick={this.addToInput}>+</button>
             
              
                <button className="highlight" name ="." onClick={this.addDecimal}>.</button>
                <button name ="0" onClick={this.clearInput}>0</button>
                <button className="highlight" name ="=" onClick={this.calculate}>=</button>
                <button className="highlight" name ="-" onClick={this.addToInput}>-</button>
             
              
                <button className="highlight" id="clear" onClick={this.clearInput}>Clear</button>
                <button className="highlight" onClick={this.Backspace}>C</button>
             
            </div>
          </div>
        )
    }
}
