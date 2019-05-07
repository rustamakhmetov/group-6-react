import React, { Component } from 'react';
import math from '~/src/lib';

class Math extends Component {
  exp(op) {
    switch(op) {
      case '+':
        return math.add;
      case '-':
        return math.sub;
      case '*':
        return math.mul;
      case '/':
        return math.div;
    }
  };

  render() {
    const { v1, op, v2 } = this.props;

    return (
      `${v1} ${op} ${v2} = ${this.exp(op)(v1, v2)}`
    )
  }
}

export default Math;
