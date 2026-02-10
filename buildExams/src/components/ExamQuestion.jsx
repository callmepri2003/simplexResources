// components/ExamQuestion.jsx
export default function ExamQuestion({ props }) {
  return (
    <div className="exam-question avoid-break-inside mb-4">
      <div className="d-flex align-items-start">
        {/* Main Content Area (Question Text & Parts) */}
        <div className="flex-grow-1">
          {props.questionText && (
            <div className="mb-3">
              {/* Combine the Question Number and Text in a single flow */}
              <span className="fw-bold me-2" style={{ whiteSpace: 'nowrap' }}>
                Question {props.questionNumber}
              </span>
              <span dangerouslySetInnerHTML={{ __html: props.questionText }} />
            </div>
          )}
          
          {props.parts && props.parts.length > 0 && (
            <div className="ms-3">
              {props.parts.map((part, index) => (
                <div key={index} className="d-flex align-items-start mb-3">
                  <div className="fw-bold me-3" style={{ minWidth: '30px' }}>
                    {part.partLabel}
                  </div>
                  <div className="flex-grow-1">
                    <div dangerouslySetInnerHTML={{ __html: part.text }} />
                    {part.marks && (
                      <div className="text-end fw-bold mt-1">
                        {part.marks} {part.marks === 1 ? 'mark' : 'marks'}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {props.marks && !props.parts && (
            <div className="text-end fw-bold mt-2">
              {props.marks} {props.marks === 1 ? 'mark' : 'marks'}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}