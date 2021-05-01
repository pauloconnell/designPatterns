const React = require("react");

class Facade extends React.Component {
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
        <h1>Facade</h1>

        <br />

        <button onClick={e => this.handleClick(e)}>Details:</button>

        {this.state.showThis ? (
          <div>
            <h3>Facade Design Pattern:</h3>
            <h4>
              <br />
              <br />
            </h4>
            <b>Facade Pattern</b> <br />
            The facade pattern is used when we want to{" "}
            <b>
              create an abstraction layer between what is shown publicly and
              what is implemented behind the curtain.
            </b>{" "}
            <br />
            It is used when an easier or simpler interface to an underlying
            object is desired. A great example of this pattern would be
            selectors from DOM manipulation libraries such as jQuery, Dojo, or
            D3. <br />
            These libraries have very powerful selector features; you can write
            in complex queries such as: jQuery(".parent .child div.span") It
            simplifies the selection features a lot, and even though it seems
            simple on the surface, there is an entire complex logic implemented
            under the hood in order for this to work. We also need to be aware
            of the performance-simplicity tradeoff. It is desirable to avoid
            extra complexity if it isn’t beneficial enough. In the case of the
            aforementioned libraries, the tradeoff was worth it, as they are all
            very successful libraries.
            <code>
              jQuery
              <br />
              $( "#target" ).click(function() {"{"}
              <br />
              <div class="indent">alert( "Handler for .click() called." );</div>
              <br />
              {"}"});
              <br />
              <br />
              {"{"}
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
module.exports = Facade;
