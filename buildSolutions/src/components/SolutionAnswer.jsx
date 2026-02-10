// components/SolutionAnswer.jsx
export default function SolutionAnswer({ props }) {
  return (
    <div className="solution-answer avoid-break-inside mb-5 pb-4 border-bottom">
      <div className="mb-3">
        <span className="fw-bold" style={{ fontSize: '1.1rem' }}>
          Question {props.questionNumber}
        </span>
        {props.marks && (
          <span className="ms-3 badge bg-dark">
            {props.marks} {props.marks === 1 ? 'mark' : 'marks'}
          </span>
        )}
      </div>

      {props.parts && props.parts.length > 0 ? (
        <div>
          {props.parts.map((part, index) => (
            <div key={index} className="mb-4">
              <div className="fw-bold mb-2" style={{ color: '#333' }}>
                Part ({part.partLabel})
                {part.marks && (
                  <span className="ms-2 badge bg-secondary">
                    {part.marks} {part.marks === 1 ? 'mark' : 'marks'}
                  </span>
                )}
              </div>
              <div className="ms-3">
                {part.answer && (
                  <div className="mb-2">
                    <span className="fw-bold">Answer: </span>
                    <span dangerouslySetInnerHTML={{ __html: part.answer }} />
                  </div>
                )}
                {part.explanation && (
                  <div className="text-muted fst-italic mb-2">
                    <span dangerouslySetInnerHTML={{ __html: part.explanation }} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          {props.answer && (
            <div className="mb-2">
              <span className="fw-bold">Answer: </span>
              <span dangerouslySetInnerHTML={{ __html: props.answer }} />
            </div>
          )}
          {props.explanation && (
            <div className="text-muted fst-italic">
              <span dangerouslySetInnerHTML={{ __html: props.explanation }} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}