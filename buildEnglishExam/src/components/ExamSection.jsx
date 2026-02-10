export default function ExamSection({ props }) {
  return (
    <div className="avoid-break-inside mb-4">
      <div className="bg-light p-3 border-start border-5 border-primary">
        <h3 className="mb-1">{props.title}</h3>
        {props.instructions && (
          <p className="mb-0 fst-italic">{props.instructions}</p>
        )}
        {props.marks && (
          <p className="mb-0 fw-bold">Total Marks: {props.marks}</p>
        )}
      </div>
    </div>
  );
}