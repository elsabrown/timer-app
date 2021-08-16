import React from "react";
import "../App";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0, minutes: 0 };
    this.tick = this.tick.bind(this);
  }

  tick() {
    this.setState((state) => ({
      seconds: state.seconds === 59 ? 0 : state.seconds + 1,
      minutes: state.seconds === 59 ? state.minutes + 1 : state.minutes
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <div><p className="Timer-text">Секунды: {this.state.seconds}</p></div>
        <div><p className="Timer-text">Минуты: {this.state.minutes}</p></div>
      </div>
    );
  }
}

export default Timer;
