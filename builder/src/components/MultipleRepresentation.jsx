export default function MultipleRepresentation({ props }) {
  return (
    <div className="avoid-break-inside mb-4">
      <div className="border-start border-dark border-3 ps-3">
        <h6 className="text-muted mb-3">{props.title}</h6>
        <div className="row g-3">
          {props.numerical && (
            <div className="col-md-6">
              <div className="small text-muted mb-1">Numerical</div>
              <div>{props.numerical}</div>
            </div>
          )}
          {props.algebraic && (
            <div className="col-md-6">
              <div className="small text-muted mb-1">Algebraic</div>
              <div>{props.algebraic}</div>
            </div>
          )}
          {props.graphical && (
            <div className="col-md-6">
              <div className="small text-muted mb-1">Graphical</div>
              <div>{props.graphical}</div>
            </div>
          )}
          {props.verbal && (
            <div className="col-md-6">
              <div className="small text-muted mb-1">Verbal</div>
              <div>{props.verbal}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}