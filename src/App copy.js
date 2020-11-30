import React, { Component } from "react";
import "./App.css";

class App extends Component {
  // foo = () => "Bars";

  render() {
    const name = "John Doe";
    const loading = false;
    const showName = true;

    // if (loading) {
    //   return <h4>Loading...</h4>;
    // }

    return (
      <div className='App'>
        {/* <h1>My App</h1> */}
        {loading ? <h4>Loading...</h4> : <h1>Hello {showName && name}</h1>}
      </div>
      // return React.createElement(
      //   "div",
      //   { className: "App" },
      //   React.createElement("h1", null, "Hello from React")
      // );
      // <Fragment>
      //   <h1>Hello from React</h1>
      //   <h2>Goodbay</h2>
      // </Fragment>
      // <>
      //   <h1>Hello from React</h1>
      //   <h2>Goodbay</h2>
      // </>
    );
  }
}

export default App;
