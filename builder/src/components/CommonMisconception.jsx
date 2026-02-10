export default function CommonMisconception({ props }) {
  return (
    <div className="avoid-break-inside mb-4">
      <div className="card border-warning">
        <div className="card-header bg-warning">
          <h5 className="mb-0">Common Misconception</h5>
        </div>
        <div className="card-body">
          <p className="mb-2"><strong>Students often think:</strong> {props.misconception}</p>
          <p className="mb-2"><strong>But actually:</strong> {props.reality}</p>
          {props.explanation && <p className="mb-0"><strong>Because:</strong> {props.explanation}</p>}
        </div>
      </div>
    </div>
  );
}