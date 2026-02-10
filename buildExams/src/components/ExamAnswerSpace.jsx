// components/ExamAnswerSpace.jsx
export default function ExamAnswerSpace({ props }) {
  const lines = props.lines || 5;
  const height = props.height || (lines * 30);

  return (
    <div className="exam-answer-space avoid-break-inside mb-4">
      {props.label && (
        <div className="fw-bold mb-2">{props.label}</div>
      )}
      <div 
        className="border border-dark p-2"
        style={{ 
          minHeight: `${height}px`,
          backgroundColor: props.ruled ? 'transparent' : 'white',
          backgroundImage: props.ruled ? 'repeating-linear-gradient(transparent, transparent 29px, #000 29px, #000 30px)' : 'none'
        }}
      >
        {props.prompt && (
          <div className="text-muted fst-italic">{props.prompt}</div>
        )}
      </div>
    </div>
  );
}