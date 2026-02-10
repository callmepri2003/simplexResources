// components/SolutionKeyPoints.jsx
export default function SolutionKeyPoints({ props }) {
  return (
    <div className="solution-key-points avoid-break-inside mb-4 p-3 border border-2 border-info" style={{ backgroundColor: '#d1ecf1' }}>
      <div className="fw-bold mb-3 d-flex align-items-center">
        <span className="badge bg-info text-dark me-2">💡</span>
        Key Points
        {props.questionNumber && ` - Question ${props.questionNumber}`}
      </div>

      {props.points && props.points.length > 0 && (
        <ul className="mb-0" style={{ paddingLeft: '20px' }}>
          {props.points.map((point, index) => (
            <li key={index} className="mb-2">{point}</li>
          ))}
        </ul>
      )}

      {props.formulaReminder && (
        <div className="mt-3 p-2 bg-white border border-info">
          <div className="small fw-bold mb-1">Formula to remember:</div>
          <div dangerouslySetInnerHTML={{ __html: props.formulaReminder }} />
        </div>
      )}
    </div>
  );
}