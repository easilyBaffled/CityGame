import React, { Component, PropTypes } from 'react'

export default class Tile extends Component {
  render() {
    Array(3).map((cell) => {
      console.log(cell);
      return 1;
    })
    return (
      <div>
      {
        Array(3).fill().map((cell, y) => {
          console.log(y);
          return  <div key={y}>
                  {
                    Array(3).fill().map((cell, x) => {
                      return <div key={x} style={{border:'1px solid black', marginBottom: '-4px', height: '30', width: '30', display: 'inline-block'}}></div>
                    })
                  }
                  </div>
        })
      }
      </div>
    );
  }
}
