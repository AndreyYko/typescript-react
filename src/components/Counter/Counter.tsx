import React, { Component } from 'react';

import './Counter.css'

interface IProps {
  current: number
  increase: () => any,
  decrease: () => any
}

interface IState {
  current: number
}

export default class Counter extends Component<IProps, IState> {
  readonly state = {
    current: 0
  };

  increase = (): void => {
    const { current }: any = this.state;
    this.setState({ current: current + 1 })
  };

  decrease = (): void => {
    const { current }: any = this.state;
    if (current) this.setState({ current: current - 1 })
  };

  render () {
    const { current, increase, decrease }  = this.props;
    return (
      <section className='counter-wrapper'>
        <div className='decrease' onClick={decrease}>
          <i className='fas fa-minus' />
        </div>
        <div className="counter">
          <span>{current}</span>
        </div>
        <div className='increase' onClick={increase}>
          <i className="fas fa-plus" />
        </div>
      </section>
    )
  }
}
