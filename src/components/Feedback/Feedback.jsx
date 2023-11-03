import BtnFeedbackList from 'components/BtnFeedbackList/BtnFeedbackList';
import Notification from 'components/Notification/Notification';
import css from './Feedback.module.css';
import SectionComponent from 'components/Section/Section';

const Feedback = ({
  good,
  neutral,
  bad,
  total,
  procentities,
  hendleClickRew
}) => {
  const options ={
      good: "good",
      neutral: "neutral",
      bad: "bad"
  }
  return (
    
    <>
      
        <BtnFeedbackList
        hendleClickRew={hendleClickRew}
        options={options}
        />
      
      <SectionComponent title={"Statistic"}>
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
      </SectionComponent>
    </>
  );
};

export default Feedback;
