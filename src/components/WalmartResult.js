import React from 'react'
import WalmartProductDetail from './WalmartProductDetail'

class WalmartResult extends React.PureComponent {
  render() {
    if (this.props.products) {
      if (Array.isArray(this.props.products)) {
        return (
          <div>
            {this.props.products.length > 0 && this.props.products.map(product =>
              <WalmartProductDetail key={product.id}
                brand={product.brand}
                description={product.description}
                image={product.image}
                price={product.price}
                discount={product.discount}/>
            )}
          </div>
        )
      } else {
        return (
          <WalmartProductDetail
            brand={this.props.products.brand}
            description={this.props.products.description}
            image={this.props.products.image}
            price={this.props.products.price}
            discount={this.props.products.discount}/>
        )
      }
    } else {
      return (
        <hr></hr>
      )
    }
  }
}

export default WalmartResult
