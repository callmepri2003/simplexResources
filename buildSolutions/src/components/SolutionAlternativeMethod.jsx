// components/SolutionAlternativeMethod.jsx
export default function SolutionAlternativeMethod({ props }) {
  return (
    <div className="solution-alternative-method avoid-break-inside mb-4 p-3 border border-2" style={{ backgroundColor: '#e7f3ff', borderColor: '#0066cc' }}>
      <div className="fw-bold mb-3" style={{ color: '#0066cc' }}>
        Alternative Method - Question {props.questionNumber}
        {props.partLabel && ` (${props.partLabel})`}
      </div>

      {props.methodName && (
        <div className="mb-2 fw-bold" style={{ color: '#333' }}>
          Method: {props.methodName}
        </div>
      )}

      {props.description && (
        <div className="mb-3 fst-italic">
          {props.description}
        </div>
      )}

      {props.steps && props.steps.map((step, index) => (
        <div key={index} className="mb-3 ms-2">
          <div className="d-flex align-items-start">
            <div className="badge bg-info me-3 mt-1" style={{ minWidth: '30px' }}>
              {index + 1}
            </div>
            <div className="flex-grow-1">
              {step.description && (
                <div className="mb-1 fw-bold">{step.description}</div>
              )}
              {step.working && (
                <div 
                  className="mb-1 p-2 bg-white border-start border-3"
                  style={{ borderColor: '#0066cc' }}
                  dangerouslySetInnerHTML={{ __html: step.working }}
                />
              )}
            </div>
          </div>
        </div>
      ))}

      {props.finalAnswer && (
        <div className="mt-3 p-2 bg-white border border-2" style={{ borderColor: '#0066cc' }}>
          <span className="fw-bold">Result: </span>
          <span dangerouslySetInnerHTML={{ __html: props.finalAnswer }} />
        </div>
      )}

      {props.comparison && (
        <div className="mt-3 small fst-italic" style={{ color: '#0066cc' }}>
          <strong>Note: </strong>{props.comparison}
        </div>
      )}
    </div>
  );
}