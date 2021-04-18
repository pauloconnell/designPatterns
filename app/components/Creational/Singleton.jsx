const React = require("react");

class Singleton extends React.Component {
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
      <h1>Singleton</h1>
      

      <br />
      
        <button onClick={e => this.handleClick(e)}>Details:</button>
      
      {this.state.showThis ? (
        <div>
          <h3>Singleton Design Pattern:</h3>
          <h4>
            
            <br />
            <br />
          </h4>
         The singleton pattern is used in scenarios when we need exactly one instance of a class.<br/>
          For example, we need to have an object which contains some configuration for something. In these cases, it is not necessary to create a new object whenever the configuration object is required somewhere in the system.<br/>
          This is called <b>Singleton Pattern</b> <br/>
          
          <code>
            var singleton = (function() <br/>
    // private singleton value which gets initialized only once<br/>
    var config;<br/>

    function initializeConfiguration(values)<br/>
        this.randomNumber = Math.random();<br/>
        values = values || {};<br/>
        this.number = values.number || 5;<br/>
        this.size = values.size || 10;<br/>
    

    // we export the centralized method for retrieving the singleton value<br/>
    return <br/>
        getConfig: function(values) <br/>
            // we initialize the singleton value only once<br/>
            if (config === undefined) <br/>
                config = new initializeConfiguration(values);<br/>
            

            // and return the same config value wherever it is asked for<br/>
            return config;<br/>
        
var configObject = singleton.getConfig( "size": 8 );<br/>
// prints number: 5, size: 8, randomNumber: someRandomDecimalValue<br/>
console.log(configObject);<br/>
var configObject1 = singleton.getConfig( "number": 8 );<br/>
// prints number: 5, size: 8, randomNumber: same randomDecimalValue as in first config<br/>
console.log(configObject1);<br/>
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
module.exports = Singleton;
