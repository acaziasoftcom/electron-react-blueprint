import React from 'react'

export default class Login extends React.Component {
  render () {
    return (
      <div onClick={() => this.props.history.push('/')}>Login1</div>
    )
  }
}
