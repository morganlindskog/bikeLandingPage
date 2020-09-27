import React from 'react';
import { Carousel } from 'react-bootstrap';


class CarouselMain extends React.Component {
  render() {
    return (
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={require('./img/one.jpg')} alt="First slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={require('./img/two.jpg')} alt="Second slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={require('./img/three.jpg')} alt="Third slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={require('./img/four.jpg')} alt="Third slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={require('./img/five.jpg')} alt="Third slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={require('./img/six.jpg')} alt="Third slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={require('./img/seven.jpg')} alt="Third slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={require('./img/eight.jpg')} alt="Third slide"/>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    )
  }
}

export default CarouselMain;
