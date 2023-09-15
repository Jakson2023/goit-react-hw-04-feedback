import { Buttons } from '../feedback/Feedback.styled';

export const FeedbackOptions = ({ onClick, options }) => {
  return (
    <Buttons>
      {options.map(option => (
        <button key={option} type="button" onClick={() => onClick(option)}>
          {option}
        </button>
      ))}
    </Buttons>
  );
};
