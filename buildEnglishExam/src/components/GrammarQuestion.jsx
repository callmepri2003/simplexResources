export default function GrammarQuestion({ props }) {
  return (
    <div className="avoid-break-inside mb-4">
      <div className="ps-3">
        <p className="mb-2">
          <strong>{props.questionNumber}.</strong> {props.question}
          {props.marks && <span className="float-end text-muted small">({props.marks} mark{props.marks > 1 ? 's' : ''})</span>}
        </p>
        {props.sentence && (
          <div className="ps-4 mb-2 p-2 border-start border-3" style={{ borderColor: '#004aad', backgroundColor: '#f8f9fa' }}>
            <em>{props.sentence}</em>
          </div>
        )}
        {props.instruction && (
          <p className="ps-4 mb-2 text-muted small fst-italic">{props.instruction}</p>
        )}
      </div>
    </div>
  );
}