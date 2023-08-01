import React, { Component } from 'react';
import Feedback from './Feedback';
import Statistics from './Statistics';
import { Container } from './app.styled.js';

let sum = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export class App extends Component {
  state = {
    ...sum,
  };

  countTotalFeedback = () => {
    const totalValue = Object.values(this.state).reduce((counter, stat) => {
      return counter + stat;
    }, 0);
    return totalValue;
  };

  handleClick = e => {
    const currentValue = e.target.id;
    this.setState(prevState => {
      switch (currentValue) {
        case 'good':
          return {
            good: (prevState.good += 1),
          };
        case 'bad':
          return {
            bad: (prevState.bad += 1),
          };
        case 'neutral':
          return {
            neutral: (prevState.neutral += 1),
          };
      }
    });
  };

  countPositiveFeedbackPercentage() {
    console.log(this.countTotalFeedback());
    console.log(this.state.good);
    const positivePercentage =
      (100 / this.countTotalFeedback()) * this.state.good.toNumber();
    console.log(positivePercentage);
    return positivePercentage;
  }

  render() {
    return (
      <Container>
        <Feedback handleFunc={this.handleClick} />
        <Statistics
          stats={this.state}
          sum={this.countTotalFeedback()}
          positivePercantage={this.countPositiveFeedbackPercentage()}
        />
      </Container>
    );
  }
}
