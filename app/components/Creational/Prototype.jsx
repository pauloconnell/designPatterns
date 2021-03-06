const React = require("react");

class Prototype extends React.Component {
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
      <h1>Prototype</h1>
      

      <br />
      
        <button onClick={e => this.handleClick(e)}>Details:</button>
      
      {this.state.showThis ? (
        <div>
          <h3>Prototype Design Pattern:</h3>
          <h4>
            
            <br />
            <br />
          </h4>

JavaScript does not support classes in its native form. Inheritance between objects is implemented using prototype-based programming.

It enables us to create objects which can serve as a prototype for other objects being created. The prototype object is used as a blueprint for each object the constructor creates.

<br />
          Here is simple example of how this pattern might be used.<br />
    *Take notice how prototype inheritance makes a performance boost as well because both objects contain a reference to the functions which are implemented in the prototype itself, instead of in each of the objects.*
          
          <b>Prototype Pattern</b> <br/>
          
          <code>
var personPrototype = {'{'}
    sayHi: function() {'{'}
        console.log("Hello, my name is " + this.name + ", and I am " + this.age);
    {'}'},
    sayBye: function() {'{'}
        console.log("Bye Bye!");
    {'}'}
{'}'};

function Person(name, age) {'{'}
    name = name || "John Doe";
    age = age || 26;

    function constructorFunction(name, age) {'{'}
        this.name = name;
        this.age = age;
    {'}'};

    constructorFunction.prototype = personPrototype;

    var instance = new constructorFunction(name, age);
    return instance;
{'}'}

var person1 = Person();
var person2 = Person("Bob", 38);

// prints out Hello, my name is John Doe, and I am 26
person1.sayHi();
// prints out Hello, my name is Bob, and I am 38
person2.sayHi();
            
            <br/>
          </code>
          <h3>
    
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
module.exports = Prototype;
