export default function ShortAnswerQuestion({ props }) {
  return (
    <div className="avoid-break-inside short-answer-question col-6 mb-3">
      <div className="question-number">{props.questionNumber}</div>
      <div className="question-text">
        <p>{props.questionContent}</p>
      </div>
      <div className="short-answer-input">
        <input type="text" />
      </div>
    </div>
  );
}
