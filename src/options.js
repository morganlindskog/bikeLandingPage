import React from 'react';

class Options extends React.Component {
  render() {
    return (
      <div className="options">
        <div className="optionsPrice">
          Creo SL Model<br/>
          $4999.99<br/>
          <p className="sh">plus shipping and handling</p>
        </div>
        <div className="ui compact menu" id="colorPicker">
          <div className="ui simple dropdown item">
            Color options
            <i className="dropdown icon"></i>
            <div className="menu">
              <div className="item">Sunburst</div>
              <div className="item">Charcoal Grey</div>
              <div className="item">Obsidian Black</div>
              <div className="item">Foliage Green</div>
              <div className="item">Artemis Blue</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Options;
