import React from "react";
import Timer from "./components/Timer";
import Button from "./components/Button";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Timer />
        <Button />
      </div>
    );
  }
}
export default App;
