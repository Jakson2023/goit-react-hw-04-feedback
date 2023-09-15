import { Notification } from 'components/Notification/Notification';
import { Counter } from '../feedback/Feedback.styled';
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  if (total === 0) {
    return <Notification message="There is no feedback" />;
  }
  return (
    <Counter>
      <span>Good: {good}</span>
      <span>Neutral:{neutral}</span>
      <span>Bad:{bad}</span>
      <span>Total:{total}</span>
      <span>
        PositiveFeedback:{positivePercentage}
        {`%`}
      </span>
    </Counter>
  );
};
