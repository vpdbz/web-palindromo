import React, { PureComponent } from 'react'
import WalmartPage from '../../components/WalmartPage'

class Error extends PureComponent {
  onRetry = (e) => {
    this.props.history.goBack();
  }

  render() {
    const { classes } = this.props

    return (
      <WalmartPage>
        <div className={classes.instructions}>
          {this.props.location.message}
        </div>

        <div className={classes.buttonDiv}>
          <button type="button" id="searchsubmitbutton" class="search-btn" onClick={this.onRetry}>
            Reintentar
          </button>
        </div>
      </WalmartPage>
    )
  }
}

export default Error
