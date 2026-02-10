export default function MultipleChoiceExam({ props }) {
  return (
    <div className="avoid-break-inside mb-4">
      <div className="ps-3">
        <p className="mb-2">
          <strong>{props.questionNumber}.</strong> {props.question}
          {props.marks && <span className="float-end badge bg-secondary">{props.marks} mark{props.marks > 1 ? 's' : ''}</span>}
        </p>
        <div className="ps-4">
          {props.options.map((option, index) => (
            <div key={index} className="mb-2">
              <span className="me-3">
                <strong>{String.fromCharCode(65 + index)}.</strong>
              </span>
              <span>{option}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}