// components/SolutionSection.jsx
export default function SolutionSection({ props }) {
  return (
    <div className="solution-section avoid-break-inside mb-5">
      <div className="border-top border-bottom border-2 border-dark py-3 mb-4">
        <h2 className="fw-bold mb-2" style={{ fontSize: '1.5rem' }}>
          Section {props.sectionNumber} Solutions
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
      </div>
    </div>
  );
}