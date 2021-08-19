import React from "react";
import "../App";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0, minutes: 0 };
    this.work = { isWork: true };
    // this.tick = this.tick.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  startTimer() {
    console.log(this.work.isWork);
    if (this.work.isWork) {
      this.interval = setInterval(() => this.tick(), 1000);
    } 
  }

  stopTimer() {
    clearInterval(this.interval);
  }

  resetTimer() {
    this.setState((state) => ({
      seconds: 0,
      minutes: 0,
    }));
  }

  tick() {
    this.setState((state) => ({
      seconds: state.seconds === 59 ? 0 : state.seconds + 1,
      minutes: state.seconds === 59 ? state.minutes + 1 : state.minutes,
    }));
  }

  // componentDidMount() {
  //   this.interval = setInterval(() => this.tick(), 1000);
  // }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="timer">
          <h2>Stopwatcher</h2>
        <div>
          <p className="Timer-text">Секунды: {this.state.seconds}</p>
        </div>
        <div>
          <p className="Timer-text">Минуты: {this.state.minutes}</p>
        </div>
        <div>
          <button name="Start" className="b-start button" onClick={this.startTimer}>
            Start
          </button>
        </div>
        <br />
        <div>
          <button name="Stop" className="b-stop button" onClick={this.stopTimer}>
            Stop
          </button>
        </div>
        <br />
        <div>
          <button name="Reset" className="b-reset button" onClick={this.resetTimer}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default Timer;
