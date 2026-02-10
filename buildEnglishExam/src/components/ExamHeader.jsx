export default function ExamHeader({ props }) {
  return (
    <div className="avoid-break-inside mb-4">
      <div className="text-center border-bottom border-2 border-dark pb-3">
        <h1 className="mb-2">{props.title}</h1>
        {props.subtitle && <h4 className="text-muted">{props.subtitle}</h4>}
        <div className="row mt-3">
          <div className="col-4 text-start">
            <strong>Student Name:</strong> _________________________
          </div>
          <div className="col-4 text-center">
            <strong>Date:</strong> _________________________
          </div>
          <div className="col-4 text-end">
            <strong>Time Allowed:</strong> {props.timeAllowed || "60 minutes"}
          </div>
        </div>
      </div>
    </div>
  );
}