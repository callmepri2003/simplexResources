export default function MultipleChoiceQuestion({ props }) {
  return (
    <div className="avoid-break-inside multiple-choice-question col-6 mb-3">
      <div className="question-number">{props.questionNumber}</div>
      <div className="question-text">
        <p>{props.questionContent}</p>
      </div>
      <div className="mcq-options">
        <div className="row">
          {props.options.map((option, index) => (
          <label className="col-6 paper-mcq-option" key={index}>
            <input type="radio" name={`q${props.questionNumber}`} />
            <span className="bubble" />
            <span className="option-text">{option}</span>
          </label>
        ))}
        </div>
      </div>
    </div>
  );
}
