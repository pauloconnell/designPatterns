const React = require("react");

class Module extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showThis: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      showThis: !this.state.showThis
    });
    console.log("handled ", this.state.showThis);
  }

  
  
  
  
  render(){
  
  return (
    <div>
      <h2> Design Pattern:</h2>
      <h1>Creation-Module</h1>
      

      <br />
      
        <button onClick={e => this.handleClick(e)}>Details:</button>
      
      {this.state.showThis ? (
        <div>
          <h3>Module Design Pattern:</h3>
          <h4>
            
            <br />
            <br />
          </h4>
          JavaScript does not support access modifiers. In a classical OOP language, a user defines a class and determines access rights for its members.<br/>
          Since JavaScript in its plain form supports neither classes nor access modifiers, JavaScript developers figured out a way to mimic this behavior when needed.<br/>
          Before we go into the module pattern specifics, consider the concept of <b>closure</b>.<br/> 
          A closure is a function with access to the parent scope, <b>even after the parent function has closed</b>. <br/>
          They help us <b>mimic the behavior of access modifiers through scoping</b>.<br/>
          Using the closures, we can create objects with private and public parts.<br/>
          These are called <b>modules</b> <br/>
          and are very useful whenever we want to hide certain parts of an object and only expose an interface to the user of the module.
          <code><br/>
            // we  used an immediately invoked function expression<br/>
// to create a private variable, counter<br/>
var counterIncrementer = (function() <br/>
    var counter = 0;<br/>
    return function() <br/>
        return ++counter;<br/>
// prints out 1<br/>
console.log(counterIncrementer());<br/>
          </code>
          <h3>
            This function call now will increment counter and return its value: <br/>
            currentCounterValue=counterIncrementer();
            <br />
            <br />
          </h3>
          <div>
            <br />
            <br />
            <br /><center>
            <button onClick={e => this.handleClick(e)}>Close</button>
            </center>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
          <a href="https://www.tutorialspoint.com/data_structures_algorithms/dynamic_programming.htm">
            This is a great resource for algorithms
          </a>
          <br />
        </div>
      ) : (
        `Click button to show details`
      )}
    </div>
  );
    }
};
module.exports = Module;
