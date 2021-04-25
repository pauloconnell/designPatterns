const React = require("react");

class Mediator extends React.Component {
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
        <h1>Mediator</h1>

        <br />

        <button onClick={e => this.handleClick(e)}>Details:</button>

        {this.state.showThis ? (
          <div>
            <h3>Mediator Design Pattern:</h3>
            <h4>
              <br />
              <br />
            </h4>
            This pattern is also very useful when talking about decoupled
            systems. <br />
            When we have a scenario where multiple parts of a system need to
            communicate and be coordinated, perhaps a good solution would be to
            introduce a mediator.
            <br />A <b>mediator</b> is an object which is used as a central
            point for communication between disparate parts of a system and
            handles the workflow between them. <br />
            <h4>Mediator manages workflow-</h4> Why is this important?
            <br />
            Because there is a large similarity with the publisher/subscriber
            pattern. <br />
            These two patterns both help implement better communication between
            objects… What is the difference?
            <br />
            The difference is that a{" "}
            <b>
              mediator <i>handles the workflow</i>
            </b> so can reduce redundant data collection in UI and more...
            ,<br />
            whereas the <u>publisher/subscriber uses something called a “fire and
            forget” type of communication.</u> <br />
            The publisher/subscriber is simply an event aggregator, meaning it
            simply takes care of firing the events and letting the correct
            subscribers know which events were fired. The event aggregator does
            not care what happens once an event was fired, which is not the case
            with a mediator. A nice example of a mediator is a wizard type of
            interface. Let’s say you have a large registration process for a
            system you have worked on. Oftentimes, when a lot of information is
            required from a user, it is a good practice to break this down into
            multiple steps. This way, the code will be a lot cleaner (easier to
            maintain) and the user isn’t overwhelmed by the amount of
            information which is requested just in order to finish the
            registration. A mediator is an object which would handle the
            registration steps, taking into account different possible workflows
            that might happen due to the fact that each user could potentially
            have a unique registration process. The obvious benefit from this
            design pattern is improved communication between different parts of
            a system, which now all communicate through the mediator and cleaner
            codebase. A downside would be that now we have introduced a single
            point of failure into our system, meaning if our mediator fails, the
            entire system could stop working.
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
module.exports = Mediator;
