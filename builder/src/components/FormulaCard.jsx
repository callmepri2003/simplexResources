export default function FormulaCard({ props }) {
  const { title, formula, description, variables, whenToUse, examples } = props;

  return (
    <div className="card mb-4 avoid-break-inside">
      <div className="card-header text-white" style={{ backgroundColor: '#004aad' }}>
        <h5 className="h6 mb-0">{title}</h5>
      </div>
      <div className="card-body p-3">
        {/* Main Formula Display */}
        <div className="text-center bg-light p-2 rounded mb-3">
          <div 
            className="fw-bold" 
            style={{ 
              fontFamily: 'monospace',
              color: '#004aad',
              wordBreak: 'break-all',
              overflowWrap: 'anywhere',
              lineHeight: '1.3',
              fontSize: '1rem'
            }}
          >
            {formula}
          </div>
        </div>

        {/* Description */}
        {description && (
          <div className="mb-3">
            <p className="small text-muted mb-0">{description}</p>
          </div>
        )}

        {/* Variables Explained */}
        {variables && variables.length > 0 && (
          <div className="mb-3">
            <h6 className="h6 mb-2">Variables</h6>
            <ul className="list-unstyled small">
              {variables.map((variable, index) => (
                <li key={index} className="mb-1">
                  <span 
                    className="fw-bold" 
                    style={{ 
                      fontFamily: 'monospace',
                      color: '#004aad'
                    }}
                  >
                    {variable.symbol}
                  </span>
                  <span className="mx-2">=</span>
                  <span>{variable.description}</span>
                  {variable.units && (
                    <span className="text-muted ms-2">({variable.units})</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* When to Use */}
        {whenToUse && (
          <div className="mb-3">
            <h6 className="h6 mb-2">When to use</h6>
            <p className="small text-muted mb-0">{whenToUse}</p>
          </div>
        )}

        {/* Examples */}
        {examples && examples.length > 0 && (
          <div className="mb-0">
            <h6 className="h6 mb-2">Examples</h6>
            {examples.map((example, index) => (
              <div key={index} className="border-start border-2 border-info ps-2 mb-2">
                <div className="fw-semibold small mb-1">{example.scenario}</div>
                <div className="text-center bg-light p-2 rounded mb-1">
                  <div 
                    className="small"
                    style={{ 
                      wordBreak: 'break-all',
                      overflowWrap: 'anywhere',
                      lineHeight: '1.3'
                    }}
                  >
                    {example.calculation}
                  </div>
                </div>
                {example.result && (
                  <div className="text-success fw-semibold small">
                    Result: {example.result}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}