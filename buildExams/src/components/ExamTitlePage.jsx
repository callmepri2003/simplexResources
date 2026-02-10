// components/ExamTitlePage.jsx
export default function ExamTitlePage({ props }) {
  return (
    // CHANGE: minHeight is now '100%' (though the CSS is what truly fixes the page height)
    <div className="exam-title-page avoid-break-inside d-flex flex-column justify-content-between" style={{ minHeight: '100%', padding: '60px 40px' }}>
      {/* Logo placeholder at top */}
      <div className="text-center mb-5">
        {props.logoUrl && (
          <img src={props.logoUrl} alt="Logo" style={{ maxWidth: '200px', height: 'auto' }} />
        )}
      </div>

      {/* Center content (No changes needed here) */}
      <div className="text-center flex-grow-1 d-flex flex-column justify-content-center">
        <h1 className="fw-bold mb-4" style={{ fontSize: '2.5rem', letterSpacing: '0.5px' }}>
          {props.examTitle}
        </h1>
        {props.subject && (
          <h2 className="fw-normal mb-3" style={{ fontSize: '1.8rem' }}>
            {props.subject}
          </h2>
        )}
        {props.examType && (
          <h3 className="fw-normal mb-4" style={{ fontSize: '1.3rem' }}>
            {props.examType}
          </h3>
        )}
      </div>

      {/* Bottom instructions (No changes needed here) */}
      <div className="border border-2 border-dark p-4">
        <div className="mb-3">
          <strong>General Instructions</strong>
        </div>
        <ul className="mb-0" style={{ listStylePosition: 'outside', paddingLeft: '20px' }}>
          {props.instructions && props.instructions.map((instruction, index) => (
            <li key={index} className="mb-2">{instruction}</li>
          ))}
        </ul>
        {props.totalMarks && (
          <div className="mt-3 fw-bold">
            Total marks – {props.totalMarks}
          </div>
        )}
        {props.sections && (
          <div className="mt-2">
            {props.sections.map((section, index) => (
              <div key={index}>
                Section {section.section} – {section.marks} marks
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}