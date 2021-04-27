const React = require("react");

class Command extends React.Component {
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

  render() {
    return (
      <div>
        <h2> Design Pattern:</h2>
        <h1>Command</h1>

        <br />

        <button onClick={e => this.handleClick(e)}>Details:</button>

        {this.state.showThis ? (
          <div>
            <h3>Command Design Pattern:</h3>
            <h4>
              <br />
              <br />
            </h4>
            The command pattern is useful in cases when we want to decouple
            objects executing the commands from objects issuing the commands.
            <br />
            For example, imagine a scenario where our application is using a
            large number of API service calls. Then, let’s say that the API
            services change. We would have to modify the code wherever the APIs
            that changed are called. <br />
            <b>
              This would be a great place to implement an abstraction layer,
              which would separate the objects calling an API service from the
              objects which are telling them when to call the API service.
            </b>
            <br /> This way, we avoid modification in all of the places where we
            have a need to call the service, but rather have to{" "}
            <b>change only the objects which are making the call itself</b>,
            which Command pattern dictates is only in one place. <br /> As with
            any other pattern, we have to know when exactly is there a real need
            for such a pattern. We need to be aware of the
            <b>tradeoff we are making</b>, as we are adding an additional
            abstraction layer over the API calls,{" "}
            <b>
              which will reduce performance but potentially save a lot of time
            </b>{" "}
            when we need to modify objects executing the commands.
            <b>Command Pattern</b> <br />
            <code>
              // the object which knows how to execute the command <br />
              var invoker = {"{"}
              <br />
              add: function(x, y) {"{"}
              <br />
              return x + y;
              <br />
              {"}"}, subtract: function(x, y) {"{"}
              <br />
              return x - y;
              <br />
              {"}"}
              <br />
              {"}"}
              <br />
              // the object which is used as an abstraction layer when <br />
              // executing commands; it represents an interface
              <br />
              // toward the invoker object <br />
              var manager = {"{"}
              <br />
              execute: function(name, args) {"{"}
              <br />
              if (name in invoker){"{"}
              <br />
              return invoker[name].apply(invoker, [].slice.call(arguments, 1));
              <br />
              {"}"}
              <br />
              return false;
              <br />
              {"}"}
              <br />
              {"}"}
              <br />
            </code>
            <h3>
              <br />
              <br />
            </h3>
            <div>
              <br />
              <br />
              <br />
              <center>
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
}
module.exports = Command;
