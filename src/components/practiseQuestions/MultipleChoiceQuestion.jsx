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
            <div className="mcq-option col-6" key={index}>
              {option}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
