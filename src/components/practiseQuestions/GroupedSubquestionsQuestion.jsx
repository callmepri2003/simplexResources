export default function GroupedSubquestionsGrid({ props }) {
  return (
    <div className="avoid-break-inside grouped-subquestions-grid mb-4">
      <div className="question-number">{props.questionNumber}</div>
      <div className="question-text mb-3">
        <p>
          <strong>{props.questionContent}</strong>
        </p>
      </div>
      <div className="row">
        {props.subquestions.map((sub, index) => (
          <div key={index} className="col-4 d-flex mb-2">
            <span className="fw-bold me-1">{index + 1}.</span>
            <span>{sub.prompt}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
