import React from 'react';
import unSplash from '../API/unSplash'
import SearchBar from './SearchBar';

class App extends React.Component {

    state = {images:[]}
  onSearchSubmit = async(term)=> {
    const response = await unSplash.get('/search/photos', {
      params: { query: term },
      
    })
    
        
    
    console.log(this)
    this.setState({images:response.data.results})
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} Images
      </div>
    );
  }
}

export default App;