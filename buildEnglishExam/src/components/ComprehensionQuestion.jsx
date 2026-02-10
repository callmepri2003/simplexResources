export default function ComprehensionQuestion({ props }) {
  return (
    <div className="avoid-break-inside mb-4">
      <div className="ps-3">
        <p className="mb-2">
          <strong>{props.questionNumber}.</strong> {props.question}
          {props.marks && <span className="float-end badge bg-secondary">{props.marks} mark{props.marks > 1 ? 's' : ''}</span>}
        </p>
        {props.subQuestions && props.subQuestions.length > 0 && (
          <div className="ps-4">
            {props.subQuestions.map((subQ, index) => (
              <p key={index} className="mb-2">
                <strong>{String.fromCharCode(97 + index)})</strong> {subQ}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}