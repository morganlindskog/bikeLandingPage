import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselMain from './carousel';
import NavbarMain from './navbar';
import Details from './details';
import More from './more';
import Options from './options';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="navbar">
          <NavbarMain />
        </div>
        <div className="details">
          <Details />
        </div>
        <div className="carousel">
          <CarouselMain />
        </div>
        <div>
          <Options />
          <More />
        </div>
      </div>
    )
  }
}

export default App;
