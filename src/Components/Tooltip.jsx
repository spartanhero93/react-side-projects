import React, { Component } from 'react'
import DeleteIcon from '@material-ui/icons/Delete'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import styled from 'styled-components'

class ToolTip extends Component {
  state = {
    open: false,
    text: 'Hello there'
  }

  handleTooltipClose = () => {
    this.setState({ open: false })
  }

  handleTooltipOpen = () => {
    this.setState({ open: true })
  }

  render () {
    return (
      <Wrapper>
        <Tooltip
          onClose={this.handleTooltipClose}
          onOpen={this.handleTooltipOpen}
          open={this.state.open}
          title={this.state.text}
        >
          <IconButton aria-label='Delete'>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  font-size: 3rem;
`

export default ToolTip
