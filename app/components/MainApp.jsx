const React = require("react");
const UnorderedList = require("./UnorderedList");
const Singleton = require("./Creational/Singleton");
const Observer = require("./Behavioral/Observer");
const Mediator = require("./Behavioral/Mediator");
const Prototype = require("./Creational/Prototype");
const Constructor = require("./Creational/Constructor");
const Module = require("./Creational/Module");

//const BreadthFirstSearch = require("./Algorithms/BreadthFirstSearch");
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
          <h2>Design Pattern Categorization</h2>
          <br /> Design patterns can be categorized in multiple ways, but the
          most popular one is the following 5 types:
          <br />
          1 'Creational' design patterns
          <br />
          2 'Structural' design patterns,
          <br />
          3 'Behavioral' design patterns,
          <br />
          4 'Concurrency' design patterns,
          <br />5 'Architectural' design patterns
        </div>
        <div className="green">
          <h2>1 Creational Design Patterns</h2> <br />
          These patterns deal with object creation mechanisms which optimize
          object creation compared to a basic approach. The basic form of object
          creation could result in design problems or in added complexity to the
          design. Creational design patterns solve this problem by somehow
          controlling object creation. Some of the popular design patterns in
          this category are: <br />
          Factory method
          <br /> Abstract
          <br /> factory
          <br /> Builder
          <br /> Prototype
          <br />
          Singleton
          <Constructor
            showDp={this.state.showDp}
            handleDp={e => this.handleDp(e)}
          />
          <Module />
          <Singleton />
          <Prototype />
        </div>
        <div className="orange">
          2 Structural Design Patterns <br />
          These patterns deal with object relationships. They ensure that if one
          part of a system changes, the entire system doesn’t need to change
          along with it. The most popular patterns in this category are: <br />
          Adapter Bridge
          <br /> Composite
          <br /> Decorator
          <br /> Facade
          <br /> Flyweight
          <br /> Proxy
          <br />
        </div>
        <div className="blue">
          3 Behavioral Design Patterns <br />
          These types of patterns recognize, implement, and improve
          communication between disparate objects in a system. They help ensure
          that disparate parts of a system have synchronized information.
          Popular examples of these patterns are: <br />
          Chain of responsibility
          <br />
          Command Iterator
          <br /> Mediator <br />
          Memento <br />
          Observer <br />
          State Strategy <br />
          Visitor
          <br />
          <Mediator />
          <Observer />
        </div>
        <div className="green">
          4 Concurrency Design Patterns
          <br /> These types of design patterns deal with multi-threaded
          programming paradigms. Some of the popular ones are: <br />
          Active object
          <br />
          Nuclear reaction Scheduler
        </div>

        <div className="orange">
          5 Architectural Design Patterns <br />
          Design patterns which are used for architectural purposes. Some of the
          most famous ones are: <br />
          MVC (Model-View-Controller) <br />
          MVP (Model-View-Presenter)
          <br /> MVVM (Model-View-ViewModel)
          <br />
        </div>
      </div>
    );
  }
}

module.exports = MainApp;
