// components/SolutionPageBreak.jsx
export default function SolutionPageBreak({ props }) {
  return (
    <div className="solution-page-break" style={{ pageBreakAfter: 'always', height: '0' }}>
      {props.showEndMarker && (
        <div className="text-center py-3 text-muted">
          — End of Section Solutions —
        </div>
      )}
    </div>
  );
}