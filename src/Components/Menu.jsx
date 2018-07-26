import React, { Component } from 'react'

class Menu extends Component {
  render () {
    let menus = ['Home', 'About', 'Services', 'Portfolio', 'Contact us']
    return (
      <div>
        {menus.map((link, index) => {
          return (
            <div key={index}>
              <Link label={link} />
            </div>
          )
        })}
      </div>
    )
  }
}

class Link extends Component {
  render () {
    const url = '/' + this.props.label.toLowerCase().trim().replace(' ', '-')
    return (
      <div>
        <a href={url}>
          {this.props.label}
        </a>
        <br />
      </div>
    )
  }
}

export default Menu
