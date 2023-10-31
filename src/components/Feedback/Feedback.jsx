import BtnFeedbackList from 'components/BtnFeedbackList/BtnFeedbackList';
import Notification from 'components/Notification/Notification';
import css from './Feedback.module.css';

const Feedback = ({
  good,
  neutral,
  bad,
  hendleClickGood,
  hendleClickNeutral,
  hendleClickBad,
  total,
  procentities,
}) => {
  return (
    <>
      
        <BtnFeedbackList
          hendleClickGood={hendleClickGood}
          hendleClickNeutral={hendleClickNeutral}
          hendleClickBad={hendleClickBad}
        />
      
      <h2>Statistic</h2>
      {total === 0 ? (
        <Notification message={'There is no feedback'} />
      ) : (
        <ul className={css.feedbackList}>
          <li>
            <p>good: {good}</p>
          </li>
          <li>
            <p>neutral: {neutral}</p>
          </li>
          <li>
            <p>bad: {bad}</p>
          </li>
          <li>
            <p>total:{total}</p>
          </li>
          <li>
            <p>Positive feedback: {procentities}%</p>
          </li>
        </ul>
      )}
    </>
  );
};

export default Feedback;
