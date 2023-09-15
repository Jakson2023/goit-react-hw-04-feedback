import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { useState } from 'react';

export const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const countUpdateState = typeState => {
    setState(prevState => ({
      ...prevState,
      [typeState]: prevState[typeState] + 1,
    }));
  };
  const handleClick = typeState => {
    countUpdateState(typeState);
  };
  const countTotalFeedback = () => {
    return state.good + state.neutral + state.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    if (totalFeedback === 0) {
      return 0;
    }
    return Math.round((state.good / totalFeedback) * 100);
  };

  const keys = Object.keys(state);

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions onClick={handleClick} options={keys} />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={state.good}
          neutral={state.neutral}
          bad={state.bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        ></Statistics>
      </Section>
    </div>
  );
};
