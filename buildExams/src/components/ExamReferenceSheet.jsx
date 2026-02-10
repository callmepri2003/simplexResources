// components/ExamReferenceSheet.jsx
export default function ExamReferenceSheet({ props }) {
  return (
    <div className="exam-reference-sheet avoid-break-inside p-4 border border-2 border-dark mb-4">
      <h3 className="fw-bold text-center mb-4" style={{ fontSize: '1.3rem' }}>
        {props.title || 'Reference Sheet'}
      </h3>
      
      {props.sections && props.sections.map((section, sIndex) => (
        <div key={sIndex} className="mb-4">
          {section.sectionTitle && (
            <h4 className="fw-bold mb-3" style={{ fontSize: '1.1rem' }}>
              {section.sectionTitle}
            </h4>
          )}
          {section.formulas && section.formulas.map((formula, fIndex) => (
            <div key={fIndex} className="mb-2 d-flex align-items-center">
              {formula.label && <span className="me-3 fw-bold">{formula.label}:</span>}
              <span dangerouslySetInnerHTML={{ __html: formula.formula }} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}