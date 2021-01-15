import React from 'react';
import SearchContext from './contexts/SearchContext';

class Provider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      key: null
    };
  }

  render() {
    return (
      <SearchContext.Provider value={this.state}>
        {this.props.children}
      </SearchContext.Provider>
    );
  }
}

export default Provider
