import React, { Component, PropTypes } from 'react'

export default class Tile extends Component {
  static propTypes = {
    boardPosition: PropTypes.object,
    squareLayout: PropTypes.array,
  }
  render() {
    const { boardPosition, squareLayout } = this.props;
    return (<div> {
    squareLayout.map((row, y) => {
        return <div key={y}> {
                row.map((squareStatus, x) => {
                  let color = ''
                  if(squareStatus === -1) {
                    color = 'rgba(0,0,0,0.5)';
                  }
                  return <div key={x} style={{border:'1px solid black', marginBottom: '-4px', height: '30', width: '30', display: 'inline-block', backgroundColor: color}}></div>
                })}
              </div>
      })
    } </div>);
    }
}
