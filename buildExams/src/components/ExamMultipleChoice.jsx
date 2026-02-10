// components/ExamMultipleChoice.jsx
export default function ExamMultipleChoice({ props }) {
  return (
    <div className="exam-multiple-choice avoid-break-inside mb-4">
      <div className="d-flex align-items-start">
        <div className="fw-bold me-3" style={{ minWidth: '40px' }}>
          {props.questionNumber}
        </div>
        <div className="flex-grow-1">
          <div className="mb-3" dangerouslySetInnerHTML={{ __html: props.questionText }} />
          
          <div className="ms-4">
            {props.options && props.options.map((option, index) => (
              <div key={index} className="d-flex align-items-start mb-2">
                <div className="me-3 fw-bold" style={{ minWidth: '30px' }}>
                  ({option.label})
                </div>
                <div dangerouslySetInnerHTML={{ __html: option.text }} />
              </div>
            ))}
          </div>

          {props.marks && (
            <div className="text-end fw-bold mt-2">
              {props.marks} {props.marks === 1 ? 'mark' : 'marks'}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}