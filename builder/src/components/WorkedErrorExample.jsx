export default function WorkedErrorExample({ props }) {
  return (
    <div className="avoid-break-inside mb-4">
      <div className="card border-danger">
        <div className="card-header bg-danger text-white">
          <h5 className="mb-0">Worked Error Example</h5>
        </div>
        <div className="card-body">
          <p className="fw-bold mb-3">{props.problem}</p>
          
          {props.steps && props.steps.map((step, index) => (
            <div key={index} className="mb-3 p-3 border border-danger rounded">
              <p className="mb-2">{step.incorrectWork}</p>
              <p className="mb-0 text-danger"><strong>Error:</strong> {step.errorExplanation}</p>
            </div>
          ))}

          {props.correctApproach && (
            <div className="mt-3 p-3 border border-success rounded bg-light">
              <p className="mb-0"><strong>Correct approach:</strong> {props.correctApproach}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}