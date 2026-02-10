// components/SolutionTitlePage.jsx
export default function SolutionTitlePage({ props }) {
  return (
    <div className="solution-title-page avoid-break-inside d-flex flex-column justify-content-between" style={{ minHeight: '100%', padding: '60px 40px' }}>
      {/* Logo placeholder at top */}
      <div className="text-center mb-5">
        {props.logoUrl && (
          <img src={props.logoUrl} alt="Logo" style={{ maxWidth: '200px', height: 'auto' }} />
        )}
      </div>

      {/* Center content */}
      <div className="text-center flex-grow-1 d-flex flex-column justify-content-center">
        <h1 className="fw-bold mb-4" style={{ fontSize: '2.5rem', letterSpacing: '0.5px' }}>
          {props.examTitle}
        </h1>
        {props.subject && (
          <h2 className="fw-normal mb-3" style={{ fontSize: '1.8rem' }}>
            {props.subject}
          </h2>
        )}
        <h3 className="fw-normal mb-4" style={{ fontSize: '1.5rem', color: '#333' }}>
          WORKED SOLUTIONS
        </h3>
        {props.examType && (
          <h4 className="fw-normal mb-4" style={{ fontSize: '1.3rem' }}>
            {props.examType}
          </h4>
        )}
      </div>

      {/* Bottom information */}
      <div className="border border-2 border-dark p-4">
        <div className="mb-3">
          <strong>Solution Guide Information</strong>
        </div>
        {props.notes && props.notes.length > 0 && (
          <ul className="mb-0" style={{ listStylePosition: 'outside', paddingLeft: '20px' }}>
            {props.notes.map((note, index) => (
              <li key={index} className="mb-2">{note}</li>
            ))}
          </ul>
        )}
        {props.totalMarks && (
          <div className="mt-3 fw-bold">
            Total marks – {props.totalMarks}
          </div>
        )}
      </div>
    </div>
  );
}