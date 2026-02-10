// components/SolutionWorkedSteps.jsx
export default function SolutionWorkedSteps({ props }) {
  return (
    <div className="solution-worked-steps avoid-break-inside mb-5 pb-4 border-bottom">
      <div className="mb-3">
        <span className="fw-bold" style={{ fontSize: '1.1rem' }}>
          Question {props.questionNumber}
          {props.partLabel && ` ${props.partLabel}`}
        </span>
        {props.marks && (
          <span className="ms-3 badge bg-dark">
            {props.marks} {props.marks === 1 ? 'mark' : 'marks'}
          </span>
        )}
      </div>

      {props.steps && props.steps.map((step, index) => (
        <div key={index} className="mb-3 ms-3">
          <div className="d-flex align-items-start">
            <div 
              className="badge bg-secondary me-3 mt-1" 
              style={{ minWidth: '30px' }}
            >
              {index + 1}
            </div>
            <div className="flex-grow-1">
              {step.description && (
                <div className="mb-2 fw-bold" style={{ color: '#333' }}>
                  {step.description}
                </div>
              )}
              {step.working && (
                <div 
                  className="mb-2 p-2 bg-light border-start border-3 border-primary"
                  dangerouslySetInnerHTML={{ __html: step.working }}
                />
              )}
              {step.explanation && (
                <div className="text-muted fst-italic small">
                  {step.explanation}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}

      {props.finalAnswer && (
        <div className="mt-4 p-3 bg-light border border-2 border-success">
          <span className="fw-bold">Final Answer: </span>
          <span dangerouslySetInnerHTML={{ __html: props.finalAnswer }} />
        </div>
      )}
    </div>
  );
}