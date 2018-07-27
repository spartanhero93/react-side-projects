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
      console.log('2: Inside of setInterval')
      let timeLeft = this.state.timeLeft - 1
      if (timeLeft == 0) clearInterval(timer)
      this.setState({ timeLeft })
    }, 1000)
    console.log('1: After setInterval')
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
          <TimerBtn
            time={5}
            startTimer={this.startTimer}
            onClick={this.handleClick}
          >
            5 seconds
          </TimerBtn>
          <TimerBtn
            time={10}
            startTimer={this.startTimer}
            onClick={this.handleClick}
          >
            10 seconds
          </TimerBtn>
          <TimerBtn
            time={15}
            startTimer={this.startTimer}
            onClick={this.handleClick}
          >
            15 seconds
          </TimerBtn>
        </Wrapper>

        <Timer timeLeft={this.state.timeLeft} />
      </React.Fragment>
    )
  }
}

const Timer = props => {
  return <h1>Time Left: {this.props.timeLeft}</h1>
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
