// components/ExamPageBreak.jsx
export default function ExamPageBreak({ props }) {
  return (
    <div className="exam-page-break" style={{ pageBreakAfter: 'always', height: '0' }}>
      {props.showEndMarker && (
        <div className="text-center py-3 text-muted">
          — End of Section —
        </div>
      )}
    </div>
  );
}