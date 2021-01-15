import React from 'react'
import WalmartErrorBoundary from './WalmartErrorBoundary'
import WalmartPageWrapper from './WalmartPageWrapper'
import WalmartResult from './WalmartResult'
import SearchContext from '../contexts/SearchContext'
import endpointService from '../constants/endpointService'

const STYLES = {
  contentWrapper: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center'
  }
}

class WalmartPage extends React.PureComponent {
  static contextType = SearchContext

  state = {
    searchText: '',
    products: null
  }

  onClickSearchButton = (e) => {
    this.searchProducts();
  }

  searchProducts = () => {
    if (this.state.searchText.length > 0 && this.state.searchText.length <=3 && !isNaN(this.state.searchText)) {
      this.loadData(endpointService.searchById + '/' + this.state.searchText);
    } else if (this.state.searchText.length > 0) {
      this.loadData(endpointService.searchByString + '/' + this.state.searchText);
    }
  }

  loadData = (url) => {
    const requestOptions = {
      mode:'no-cors',
      method: 'GET'
    };
    fetch(url, requestOptions)
      .then(async response => {
        const data = await response.json();

        // check for error response
        if (!response.ok) {
          // get error message from body or default to response status
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        }

        if (data.data) {
          this.setState({products: data.data});
        }
      })
      .catch(error => {
        console.log("Ocurrio un problema al buscar productos");
      });
  }

  onChangeSearchText = (e) => {
    this.setState({ searchText: e.target.value })
  }

  onKeyPressSearchText = (e) => {
    if (e.key === 'Enter'){
      this.searchProducts();
    }
  }

  render() {
    return (
      <WalmartErrorBoundary errorMessage={'Error occurred in loading the requested page.'}>
        <WalmartPageWrapper>
          <div style={STYLES.contentWrapper}>
            <div id="searchBox" className="search-box">
              <input type="text" name="Ntt" placeholder="¿Qué producto buscas hoy?" id="searchText" autoComplete="off" className="form-control search-input"
                onChange={this.onChangeSearchText} value={this.state.searchText} onKeyPress={this.onKeyPressSearchText} />
              <button type="button" id="searchButton" className="search-btn" onClick={this.onClickSearchButton}>
                Buscar
              </button>
            </div>
          </div>
          <WalmartResult products={this.state.products} />
        </WalmartPageWrapper>
      </WalmartErrorBoundary>
    )
  }
}

export default WalmartPage
