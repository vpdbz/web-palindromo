import React from 'react'

const STYLES = {
  productDetail: {
    width: '200px',
    margin: '10px',
    padding: '10px',
    border: '2px solid rgba(111,41,97,.5)',
    display: 'inline-block',
    verticalAlign: 'middle'
  }
}

class WalmartPageWrapper extends React.PureComponent {
  render() {
    return (
      <div style={STYLES.productDetail}>
        <div className="responsive-holder-xs">
          <div className="product-image">
            <div className="photo-container">
              <img src={'http://' + this.props.image} alt={this.props.description} title={this.props.description} className="img-responsive lazyloaded" />
            </div>
          </div>
        </div>
        <div className="responsive-holder-xs">
          <div className="product-details">
              <span className="product-name">{this.props.brand}</span>
              <br />
              <span className="product-description js-ellipsis">{this.props.description}</span>

            <div className="product-price">
              <span className="price-sell">
                {this.props.discount > 0 ? (
                  <span><b>${Math.trunc(this.props.price * this.props.discount / 100)}</b>&nbsp;&nbsp;&nbsp;{this.props.discount} %<br/><s>${this.props.price}</s></span>
                  ) : ( <b>${this.props.price}</b> )
                }
              </span>
            </div>
          </div>
          <div className="product-action">
            <div className="product-addtocart">
              <button type="button" className="btn btn-info btn-block btn-agregar js-btn-agregar">
                <i className="ico-cart"></i>Agregar
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default WalmartPageWrapper
