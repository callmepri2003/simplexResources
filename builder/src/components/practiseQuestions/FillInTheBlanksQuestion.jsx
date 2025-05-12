export default function FillInTheBlanksQuestion({ props }) {
  return (
    <div className="avoid-break-inside fill-in-the-blanks-section col-6 mb-3">
      <div className="question-number">{props.questionNumber}</div>
      <p>
        {props.leftPart}
        <span className="fill-blank">{props.middlePart}</span>
        {props.rightPart}
      </p>
    </div>
  );
}
