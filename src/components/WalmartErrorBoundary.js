import React, { PureComponent } from 'react'

class WalmartErrorBoundary extends PureComponent {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true })
    console.log(`Error : ${error}`)
    console.log(`Info : ${info}`)
  }

  render() {
    if (this.state.hasError) {
      return <div>{this.props.errorMessage}</div>
    }
    return this.props.children
  }
}

export default WalmartErrorBoundary
