// components/SolutionMultipleChoiceAnswer.jsx
export default function SolutionMultipleChoiceAnswer({ props }) {
  return (
    <div className="solution-mc-answer avoid-break-inside mb-4 pb-4 border-bottom">
      <div className="mb-3">
        <span className="fw-bold" style={{ fontSize: '1.1rem' }}>
          Question {props.questionNumber}
        </span>
        {props.marks && (
          <span className="ms-3 badge bg-dark">
            {props.marks} {props.marks === 1 ? 'mark' : 'marks'}
          </span>
        )}
      </div>

      <div className="p-3 bg-light border-start border-4 border-success mb-3">
        <span className="fw-bold">Correct Answer: </span>
        <span className="fs-5 fw-bold text-success">{props.correctAnswer}</span>
      </div>

      {props.explanation && (
        <div className="ms-3">
          <div className="fw-bold mb-2" style={{ color: '#333' }}>Explanation:</div>
          <div dangerouslySetInnerHTML={{ __html: props.explanation }} />
        </div>
      )}

      {props.distractorAnalysis && props.distractorAnalysis.length > 0 && (
        <div className="ms-3 mt-3">
          <div className="fw-bold mb-2" style={{ color: '#333' }}>Why other options are incorrect:</div>
          {props.distractorAnalysis.map((distractor, index) => (
            <div key={index} className="mb-2 ps-3 border-start border-2 border-danger">
              <span className="fw-bold">({distractor.option})</span> {distractor.reason}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}