// components/SolutionMarkingCriteria.jsx
export default function SolutionMarkingCriteria({ props }) {
  return (
    <div className="solution-marking-criteria avoid-break-inside mb-4 p-3 border border-2" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="fw-bold mb-3" style={{ fontSize: '1.1rem' }}>
        Marking Criteria - Question {props.questionNumber}
        {props.partLabel && ` (${props.partLabel})`}
      </div>

      {props.criteria && props.criteria.map((criterion, index) => (
        <div key={index} className="mb-3">
          <div className="d-flex align-items-start">
            <div className="badge bg-primary me-3" style={{ minWidth: '50px' }}>
              {criterion.marks} {criterion.marks === 1 ? 'mark' : 'marks'}
            </div>
            <div className="flex-grow-1">
              <div className="mb-1">{criterion.description}</div>
              {criterion.requirements && criterion.requirements.length > 0 && (
                <ul className="small mb-0 mt-2" style={{ paddingLeft: '20px' }}>
                  {criterion.requirements.map((req, rIndex) => (
                    <li key={rIndex} className="mb-1">{req}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      ))}

      {props.totalMarks && (
        <div className="mt-3 pt-3 border-top border-dark fw-bold">
          Total: {props.totalMarks} marks
        </div>
      )}
    </div>
  );
}