// Uncomment the below line.

function MainBody(props) {
  return (
    <React.Fragment>
      <p>
        {" "}
        Time for a back-to-basics drill! Take the code in the HTML section of
        this Codepen and React-ify it in the JS section. Use at least two
        components. No need for Reactstrap. -{" "}
      </p>
    </React.Fragment>
  );
}

function SecondBody(props) {
  return (
    <React.Fragment>
      <p> {props.para2}</p>
    </React.Fragment>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url1: "https://react-cn.github.io/react/docs/tags-and-attributes.html",
      url2: "https://reactjs.org/docs/thinking-in-react.html",
      paragraph2:
        "And don't worry about the CSS section right now. When you are done, the rendered view with the white background should look the same, but the HTML section should contain nothing but the 'root' div.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/140px-React-icon.svg.png",
    };
  }
  render() {
    return (
      <>
        <div>
          <h1>Instructions</h1>
        </div>
        <p>
          <MainBody para1={this.state.paragraph1} />{" "}
          <a href={this.state.url1} target="_blank">
            use native JSX
          </a>
          <SecondBody para2={this.state.paragraph2} />
        </p>
        <p>
          {" "}
          Are you{" "}
          <a href={this.state.url2} target="_blank">
            Thinking in react yet?
          </a>{" "}
        </p>
        <p>
          {" "}
          <img src={this.state.image} />{" "}
        </p>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
