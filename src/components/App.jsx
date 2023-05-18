import React, { Component } from 'react';
import FeedbackOptions from './feedback/FeedbackOptions';
import Section from './section/Section.jsx';
import Statistics from './statistics/Statistics';
import Notification from './notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = state => state.good + state.neutral + state.bad;

  countPositiveFeedbackPercentage = state => {
    const total = state.good + state.neutral + state.bad;
    return Math.round((state.good / total) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = neutral + good + bad;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              countTotalFeedback={this.countTotalFeedback(this.state)}
              countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage(
                this.state
              )}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}

export default App;
