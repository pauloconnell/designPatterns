const React = require("react");

class Constructor extends React.Component {
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
      <h1>Constructor</h1>
      

      <br />
      
        <button onClick={e => this.handleClick(e)}>Details:</button>
      
      {this.state.showThis ? (
        <div>
          <h3>Constructor Design Pattern:</h3>
          <h4>
            Control the creation of Objects.
            <br />
            In classical object-oriented programming languages, a constructor is
            a special method used to initialize a newly created object once
            memory has been allocated for it.
            <br />
            In JavaScript, as almost everything is an object, we're most often
            interested in object constructors.
            <br />
            Object constructors are used to create specific types of objects -both:
            <br />
            preparing the object for use <br />
            and accepting arguments which a constructor can use to set the
            values of member properties and methods when the object is first
            created.
            <br />
            <br />
          </h4>
          Can use object prototype to create functions for all objects:
          <code>
            Car.prototype.toString = function () <br />
            return this.model + " has done " + this.miles + " miles";
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
};
}
module.exports = Constructor;
