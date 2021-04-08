const React = require("react");

const DynamicProgramming = function(props) {
  let code = "{ a - b}"; // curly brackets cause problems in JSX, so just use variable

  return (
    <div>
      <h2> Algorithm:</h2>
      <h1>Dynamic Programming</h1>
      <h2>finding least number of coins</h2>

      <br />
      <button onClick={e => props.handleDp(e)}>Dynamic Programming Details:</button>
      {props.showDp ? (
        <div>
          <h3>Dynamic Programming:</h3>
          <h4>
            Mixture of Mathematics and Computer Science
            <br />
          </h4>
          <h3>
            Minimum number of Coins:
            <br />
            <br />
            Given coins of values coins[] find smallest amount of coins to make
            AMOUNT
          </h3>
          <div>
            Dp[index] holds the solutions of the min number of coins needed to make
            the value of index <br />
            make Dp.length as big as the amount so a space for each number as we build our way up to the final answer <br />
            
            <br />
            initiallize each position in Dp with XL number of amount+1 as we compare
            to lowest number later
            <br />
            Dp at 0 is 0
            <br />
           
            <br />
            basicly double traversal through dp array and coins array
            <br />
            iterate Dp from zero i to the amount <br />
            iterate coins[] from zero y to the coins.length <br />
            check if(coins[y] Less than i) Means we can use one of these coins
            <br />
            dp[i]=Math.min(dp[i], 1+dp[i-coins[y]]); this location is the
            smaller of itself(dp[i]) or 1 more than the result at one coin (coin[y]) ago  <br />
            This is why we initialize dp[] with XL number
            <br />
            This will populate dp with least coins for every index possible or leave as is( XL # = amount+1)
            <br />
            <br />
            We set the empty locations to XL number (to not interfere with our
            Math.min compare) so now return these as -1
            <br />
            return dp[amount] GreaterThan amount?-1:dp[amount]; <br />
          </div>

          <a href="https://www.tutorialspoint.com/data_structures_algorithms/dynamic_programming.htm">
            This is a great resource for DP
          </a>
          <br />
        </div>
      ) : (
        `Click button to show details`
      )}
    </div>
  );
};
module.exports = DynamicProgramming;
