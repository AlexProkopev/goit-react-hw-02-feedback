import React from 'react';
import Feedback from './Feedback/Feedback';
import SectionComponent from './Section/Section';


export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

 

  hendleClickGood = () => {
    this.setState({ good: this.state.good + 1 });
  }; // + good

  hendleClickNeutral = () => {
    this.setState({ neutral: this.state.neutral + 1 });
  }; // + neutral

  hendleClickBad = () => {
    this.setState({ bad: this.state.bad + 1 });
  }; // + bad

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  }; // + total

  hendleClickRew = (stateValue) => {
    this.setState({ [stateValue]: this.state[stateValue] + 1 });
  }; // + bad


  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    
    if (totalFeedback === 0) {
      return 0;
    }
    return Math.round((this.state.good / totalFeedback) * 100);

    
  };

  render() {
    return (
      <SectionComponent>
      
        <Feedback
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          hendleClickRew={this.hendleClickRew}
          total={this.countTotalFeedback()}
          procentities={this.countPositiveFeedbackPercentage()}
        />
        
      </SectionComponent>
    );
  }
}
