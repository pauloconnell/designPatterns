const React = require("react");
//const styles = require(".../index.css");  CSS Loaders in package.json :)

const Set = function(props) {
  return (
    <div>
      <h2> Data Structure:</h2>
      <h1>Set</h1>
      <b>Set is like an array but with NO duplicate elements.</b>
      <br />
      <button onClick={e => props.handleSet(e)}>Set Details:</button>
      {props.showSet ? (
        <div class="pink">
          <h3>Constructor:</h3>
          let mySet = new Set(); It has the following <strong>methods:</strong>
          <br />
          <code>mySet.add(value)</code>
          <br></br>
          appends value to the Set and returns the new Set<br></br>
          <code>mySet.clear()</code>
          <br></br>
          removes ALL elements from the set<br></br>
          <code>mySet.delete(value)</code>
          <br></br>
          removes value and returns true or false for success/fail<br></br>
          <code>mySet.has(value)</code>
          <br></br>
          returns true if value in Set/false if not<br></br>
          Iteration Methods:<br></br>
          <code>mySet.keys()</code>
          <br></br>
          <code>mySet.values()</code>
          <br></br>
          <code>mySet.entries()</code>
          <br></br>
          <code>mySet.forEach(callback[,thisArg])</code>
          <br></br>
        </div>
      ) : (
        `Click button to show details`
      )}
    </div>
  );
};
module.exports = Set;
