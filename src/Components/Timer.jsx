import React, { Component } from 'react'
import styled from 'styled-components'

class TimerWrapper extends Component {
  state = {
    timeLeft: null,
    timer: null
  }

  startTimer = timeLeft => {
    clearInterval(this.state.timer)
    let timer = setInterval(() => {
      let timeLeft = this.state.timeLeft - 1
      if (timeLeft == 0) clearInterval(timer)
      this.setState({ timeLeft })
    }, 1000)
    return this.setState({ timeLeft, timer })
  }

  handleClick = e => {
    this.setState({ currentTime: this.state.currentTime + e.target.value })
  }

  render () {
    return (
      <React.Fragment>
        <h1>Timer</h1>
        <Wrapper>
          <Button
            time={5}
            startTimer={this.startTimer}
            onClick={this.startTimer}
          >
            5 seconds
          </Button>
          <Button
            time={10}
            startTimer={this.startTimer}
            onClick={this.startTimer}
          >
            10 seconds
          </Button>
          <Button
            time={15}
            startTimer={this.startTimer}
            onClick={this.startTimer}
          >
            15 seconds
          </Button>
        </Wrapper>

        <Timer timeLeft={this.state.timeLeft} />
      </React.Fragment>
    )
  }
}

class Button extends Component {
  startTimer = event => {
    return this.props.startTimer(this.props.time)
  }

  render () {
    return (
      <TimerBtn onClick={this.startTimer}>
        {this.props.time} seconds
      </TimerBtn>
    )
  }
}

const Timer = props => {
  if (props.timeLeft == null || props.timeLeft == 0) return <h1>Time: 0</h1>
  return <h1>Time Left: {props.timeLeft}</h1>
}

const Wrapper = styled.div`
  display: flex;
  font-weight: 200;
`

const TimerBtn = styled.div`
  background: #4EB1BA;
  height: 4rem;
  width: 12rem;
  border-radius: 1rem;
  color: white;
  outline: none;
  text-align: center;
  line-height: 4rem;
  margin-right: 1rem;

  transition: all .3s;
  &:hover {
    background: #207278;
  }
  &:active {
    transform: scale(1.2)
  }

`

export default TimerWrapper
