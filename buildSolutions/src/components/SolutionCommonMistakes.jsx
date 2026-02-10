// components/SolutionCommonMistakes.jsx
export default function SolutionCommonMistakes({ props }) {
  return (
    <div className="solution-common-mistakes avoid-break-inside mb-4 p-3 border border-2 border-warning" style={{ backgroundColor: '#fff3cd' }}>
      <div className="fw-bold mb-3 d-flex align-items-center">
        <span className="badge bg-warning text-dark me-2">⚠</span>
        Common Mistakes - Question {props.questionNumber}
        {props.partLabel && ` (${props.partLabel})`}
      </div>

      {props.mistakes && props.mistakes.map((mistake, index) => (
        <div key={index} className="mb-3 pb-3 border-bottom border-warning">
          <div className="fw-bold mb-2" style={{ color: '#856404' }}>
            Mistake {index + 1}: {mistake.title}
          </div>
          <div className="mb-2">
            <span className="fw-bold">What students often do: </span>
            {mistake.description}
          </div>
          {mistake.correction && (
            <div className="text-success">
              <span className="fw-bold">Correct approach: </span>
              {mistake.correction}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}