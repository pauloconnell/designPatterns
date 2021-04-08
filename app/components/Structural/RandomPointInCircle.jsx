const React = require("react");

class RandomPointInCircle extends React.Component {
  //let code = "{ a - b}"; // curly brackets cause problems in JSX, so just use variable
  //let showThis = true;

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
        <h2> Coding Challenge</h2>
        <h1>Random point in circle</h1>
        <h2>Given radius, x_center, y_center</h2>
        Return a random generated point in this circle
        <br />
        <button
          onClick={e => {
            this.handleClick();
            console.log("clicked", e.target);
          }}
        >
          Click Me
        </button>
        {this.state.showThis}
        {this.state.showThis ? (
          <div><center>
            <h3>Random point in Circle:</h3>

            <h4>
              <br />
              <br />
              Function randPoint returns a size 2 array containing x-position and
              y-position of the random point, in that order. Example 1: Input:
              ["Solution","randPoint","randPoint","randPoint"]
              [[1,0,0],[],[],[]] Output:
              [null,[-0.72939,-0.65505],[-0.78502,-0.28626],[-0.83119,-0.19803]]
            </h4>
            </center>
            <div>
              <br />
              <figure>
                <figcaption>Random Point in Circle</figcaption>
                <pre>
                  <code>
                    var Solution = function(radius, x_center, y_center) <br />
                    this.radius=radius; <br />
                    this.x_center=x_center; <br />
                    this.y_center=y_center;
                    <br />
                    <br />
                    <br /><h4>
                    Solution.prototype.randPoint =function() //generates rand #
                    between o and r for x and y-note: that could create point outside <br />
                    circle depending on y value vise versa x value.   keeps
                    looking until it finds a random point in the circle <br />
                    </h4>
                    while(true) <br />
                      let x_random=(2*Math.random()-1)*this.radius; //num between
                      1 and -1 <br />
                      let y_random=(2*Math.random()-1)*this.radius; <br />
                      let x=this.x_center+x_random; let y=this.y_center+y_random;{" "}
                      <br />
                      console.log(x_diff,x,y); <br />
                      //Pythag: x**2 + y**2 = distance==r**2 <br />
                      //if distance GreaterThan r**2 point==outside circle <br />
                      let distance=(x-this.x_center)**2+(y-this.y_center)**2;
                      if(distance <br />
                        LessThan=this.radius**2) return [x,y]; <br />
                  </code>
                </pre>
              </figure>
            </div>

            <br />
          </div>
        ) : (
          `Click button to show details`
        )}
      </div>
    );
  }
}
module.exports = RandomPointInCircle;
