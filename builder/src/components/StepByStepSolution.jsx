export default function StepByStepSolution({ props }) {
  const { title, steps } = props;
  return (
    <div className="avoid-break-inside my-3">
      <h6 className="fw-bold mb-2" style={{ color: '#004aad' }}>
        {title}
      </h6>
      <div className="border-start border-3 ps-3" style={{ borderColor: '#004aad' }}>
        {steps.map((step, index) => (
          <div key={step.id} className="mb-3">
            {/* Step number and description */}
            <div className="d-flex align-items-baseline mb-1">
              <span 
                className="fw-bold me-2" 
                style={{ color: '#004aad', minWidth: '1.5rem' }}
              >
                {index + 1}.
              </span>
              {step.description && (
                <span className="text-muted small">{step.description}</span>
              )}
            </div>
            
            {/* Mathematical work */}
            <div 
              className="ms-4 mb-1"
              dangerouslySetInnerHTML={{ __html: step.work }}
            />
            
            {/* Explanation */}
            {step.explanation && (
              <div className="ms-4 small text-muted fst-italic">
                → {step.explanation}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}