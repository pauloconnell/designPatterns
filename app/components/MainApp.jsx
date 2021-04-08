const React = require("react");
const UnorderedList = require("./UnorderedList");
const Set = require("./DataStructures/Set");
const Array = require("./DataStructures/Array");
const LinkedList = require("./DataStructures/LinkedList");
const DynamicProgramming = require("./Algorithms/DynamicProgramming");
const RandomPointInCircle = require("./CodingChallenges/RandomPointInCircle");
const DepthFirstSearch = require("./Algorithms/DepthFirstSearch");
const BreadthFirstSearch = require("./Algorithms/BreadthFirstSearch");
const styles = require("../index.css");
/* the main page for the index route of this app */
class MainApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSet: false,
      showArray: false,
      showLinkedList: false,
      showDp: false
    };
    this.handleSet = this.handleSet.bind(this);
    this.handleArray = this.handleArray.bind(this);
    this.handleLinkedList = this.handleLinkedList.bind(this);
    this.handleDp = this.handleDp.bind(this);
  }

  componentDidMount() {}

  handleSet(e) {
    console.log("array pressed");
    this.setState({ showSet: !this.state.showSet });
  }

  handleArray(e) {
    console.log("array pressed");
    this.setState({ showArray: !this.state.showArray });
  }

  handleLinkedList(e) {
    console.log("Linked List pressed");
    this.setState({ showLinkedList: !this.state.showLinkedList });
  }

  handleDp(e) {
    console.log("Dp pressed");
    this.setState({ showDp: !this.state.showDp });
  }
  render() {
    return (
      <div id="divOne">
        <div id="div2"></div>
        <center>
          <h1>Design Paterns via React App</h1>

          <h2> React Components added for each: </h2>
        </center>
        <div style={{ backgroundColor: "lightBlue" }}>
          Design Pattern Categorization

Design patterns can be categorized in multiple ways, but the most popular one is the following:

    Creational design patterns
    Structural design patterns
    Behavioral design patterns
    Concurrency design patterns
    Architectural design patterns

        </div>
        <div style={{ backgroundColor: "green" }}>

Creational Design Patterns

These patterns deal with object creation mechanisms which optimize object creation compared to a basic approach. The basic form of object creation could result in design problems or in added complexity to the design. Creational design patterns solve this problem by somehow controlling object creation. Some of the popular design patterns in this category are:

    Factory method
    Abstract factory
    Builder
    Prototype
    Singleton


        </div>
        <div className="orange">
Structural Design Patterns

These patterns deal with object relationships. They ensure that if one part of a system changes, the entire system doesn’t need to change along with it. The most popular patterns in this category are:

    Adapter
    Bridge
    Composite
    Decorator
    Facade
    Flyweight
    Proxy


        </div>
        <div className="blue">
        Behavioral Design Patterns

These types of patterns recognize, implement, and improve communication between disparate objects in a system. They help ensure that disparate parts of a system have synchronized information. Popular examples of these patterns are:

    Chain of responsibility
    Command
    Iterator
    Mediator
    Memento
    Observer
    State
    Strategy
    Visitor


        </div>
      <div className="green">
        Concurrency Design Patterns

These types of design patterns deal with multi-threaded programming paradigms. Some of the popular ones are:

    Active object
    Nuclear reaction
    Scheduler


        </div>        

        <div className="orange">
        Architectural Design Patterns

Design patterns which are used for architectural purposes. Some of the most famous ones are:

    MVC (Model-View-Controller)
    MVP (Model-View-Presenter)
    MVVM (Model-View-ViewModel)

        </div>
        
      </div>
    );
  }
}

module.exports = MainApp;