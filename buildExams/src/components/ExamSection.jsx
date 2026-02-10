// components/ExamSection.jsx
export default function ExamSection({ props }) {
  return (
    <div className="exam-section avoid-break-inside mb-5">
      <div className="border-top border-bottom border-2 border-dark py-3 mb-4">
        <h2 className="fw-bold mb-2" style={{ fontSize: '1.5rem' }}>
          Section {props.sectionNumber}
        </h2>
        {props.sectionTitle && (
          <h3 className="fw-normal mb-2" style={{ fontSize: '1.2rem' }}>
            {props.sectionTitle}
          </h3>
        )}
        {props.marks && (
          <div className="fw-bold">
            {props.marks} marks
          </div>
        )}
        {props.instructions && (
          <div className="mt-2 fst-italic">
            {props.instructions}
          </div>
        )}
      </div>
    </div>
  );
}