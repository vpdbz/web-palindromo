import React from 'react'

const STYLES = {
  contentWrapper: {
    // backgroundColor: 'rgb(63, 90, 114)',
    minHeight: '100vh',
    width: '100%'
  }
}

class WalmartPageWrapper extends React.PureComponent {
  render() {
    return (
      <div style={STYLES.contentWrapper}>
        {this.props.children}
      </div>
    )
  }
}

export default WalmartPageWrapper
