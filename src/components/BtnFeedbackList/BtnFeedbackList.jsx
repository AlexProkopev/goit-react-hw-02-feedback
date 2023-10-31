import cssBtn from "./BtnFeedbackList.module.css"

const BtnFeedbackList = ({
  hendleClickGood,
  hendleClickNeutral,
  hendleClickBad,
}) => {
  return (
    <ul className={cssBtn.btnList}>
      <li>
        <button type="button" onClick={hendleClickGood}>
          good
        </button>
      </li>
      <li>
        <button type="button" onClick={hendleClickNeutral}>
          neutral
        </button>
      </li>
      <li>
        <button type="button" onClick={hendleClickBad}>
          bad
        </button>
      </li>
    </ul>
  );
};

export default BtnFeedbackList;
