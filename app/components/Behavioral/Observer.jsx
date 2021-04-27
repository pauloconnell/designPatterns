const React = require("react");

class Observer extends React.Component {
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
        <h1>Observer</h1>

        <br />

        <button onClick={e => this.handleClick(e)}>Details:</button>

        {this.state.showThis ? (
          <div>
            <h3>Observer Design Pattern:</h3>
            <h4>
              <br />
              <br />
            </h4>
            The observer pattern -we need to improve the communication between
            disparate parts of our system in an optimized way. It promotes loose
            coupling between objects. There are various versions of this
            pattern, but in its most basic form, we have two main parts of the
            pattern. <br />
            The first is a subject and <br />
            the second is observers. This design pattern is useful in situations
            when we need to perform multiple operations on a single event being
            fired.
            <br />A subject handles all of the operations regarding a certain
            topic that the observers subscribe to. These operations subscribe an
            observer to a certain topic, unsubscribe an observer from a certain
            topic, and notify observers about a certain topic when an event is
            published. However, there is a variation of this pattern called the
            publisher/subscriber pattern, which I am going to use as an example
            in this section. The main difference between a classical observer
            pattern and the publisher/subscriber pattern is that
            publisher/subscriber promotes even more loose coupling then the
            observer pattern does. In the observer pattern, the subject holds
            the references to the subscribed observers and calls methods
            directly from the objects themselves whereas, in the
            publisher/subscriber pattern, we have channels, which serve as a
            communication bridge between a subscriber and a publisher. The
            publisher fires an event and simply executes the callback function
            sent for that event. I am going to display a short example of the
            publisher/subscriber pattern.
            <b>Observer - Publisher/subscriber Pattern</b> <br />
            <code>
              var publisherSubscriber = {"{"} {"}"};
              <br />
              // we send in a container object which will handle the
              subscriptions and publishings
              <br />
              (function(container) <br />
              // the id represents a unique subscription id to a topic
              <br />
              var id = 0;
              <br />
              // we subscribe to a specific topic by sending in
              <br />
              // a callback function to be executed on event firing
              <br />
              container.subscribe = function(topic, f) <br />
              if (!(topic in container)) <br />
              container[topic] = [];
              <br />
              container[topic].push(
              <br />
              "id": ++id,
              <br />
              "callback": f<br />
              );
              <br />
              return id;
              <br />
              // each subscription has its own unique ID, which we use
              <br />
              // to remove a subscriber from a certain topic
              <br />
              container.unsubscribe = function(topic, id) <br />
              var subscribers = [];
              <br />
              for (var subscriber of container[topic]) <br />
              if (subscriber.id !== id) <br />
              subscribers.push(subscriber);
              <br />
              container[topic] = subscribers;
              <br />
              container.publish = function(topic, data) <br />
              for (var subscriber of container[topic]) <br />
              // when executing a callback, it is usually helpful to read
              <br />
              // the documentation to know which arguments will be
              <br />
              // passed to our callbacks by the object firing the event
              <br />
              subscriber.callback(data);
              <br />
              )(publisherSubscriber);
              <br />
              var subscriptionID1 =
              publisherSubscriber.subscribe("mouseClicked", function(data){" "}
              <br />
              console.log("I am Bob's callback function for a mouse clicked
              event and this is my event data: " + JSON.stringify(data));
              <br />
              var subscriptionID2 =
              publisherSubscriber.subscribe("mouseHovered", function(data){" "}
              <br />
              console.log("I am Bob's callback function for a hovered mouse
              event and this is my event data: " + JSON.stringify(data));
              <br />
              var subscriptionID3 =
              publisherSubscriber.subscribe("mouseClicked", function(data){" "}
              <br />
              console.log("I am Alice's callback function for a mouse clicked
              event and this is my event data: " + JSON.stringify(data));
              <br />
              // NOTE: after publishing an event with its data, all of the
              <br />
              // subscribed callbacks will execute and will receive
              <br />
              // a data object from the object firing the event
              <br />
              // there are 3 console.logs executed
              <br />
              publisherSubscriber.publish("mouseClicked", "data": "data1");
              <br />
              publisherSubscriber.publish("mouseHovered", "data": "data2");
              <br />
              // we unsubscribe from an event by removing the subscription ID
              <br />
              publisherSubscriber.unsubscribe("mouseClicked", subscriptionID3);
              <br />
              // there are 2 console.logs executed
              <br />
              publisherSubscriber.publish("mouseClicked", "data": "data1");
              <br />
              publisherSubscriber.publish("mouseHovered", "data": "data2");
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
module.exports = Observer;
