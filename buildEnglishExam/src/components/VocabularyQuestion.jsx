export default function VocabularyQuestion({ props }) {
  return (
    <div className="avoid-break-inside mb-4">
      <div className="ps-3">
        <p className="mb-2">
          <strong>{props.questionNumber}.</strong> {props.question}
          {props.marks && <span className="float-end badge bg-secondary">{props.marks} mark{props.marks > 1 ? 's' : ''}</span>}
        </p>
        {props.word && (
          <div className="ps-4 mb-2">
            <strong>Word:</strong> <em>{props.word}</em>
            {props.context && <p className="mt-1 text-muted">"{props.context}"</p>}
          </div>
        )}
      </div>
    </div>
  );
}