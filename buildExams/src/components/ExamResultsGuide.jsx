// components/ExamResultsGuide.jsx
export default function ExamResultsGuide({ props }) {
  const { title, totalMarks, markRanges, generalAdvice } = props;

  return (
    <div className="avoid-break-inside mb-4">
      <div className="border border-dark p-3">
        <h5 className="border-bottom border-dark pb-2 mb-3">
          {title || "Guide for Parents: Understanding Your Child's Results"}
        </h5>
        
        {totalMarks && (
          <p className="mb-3">
            <strong>Total Marks:</strong> {totalMarks}
          </p>
        )}

        {markRanges && markRanges.length > 0 && (
          <div className="mb-3">
            <table className="table table-bordered table-sm">
              <thead>
                <tr>
                  <th style={{ width: '20%' }}>Mark Range</th>
                  <th style={{ width: '15%' }}>Level</th>
                  <th style={{ width: '65%' }}>Interpretation & Next Steps</th>
                </tr>
              </thead>
              <tbody>
                {markRanges.map((range, index) => (
                  <tr key={index}>
                    <td className="text-center">
                      <strong>
                        {range.minMark}
                        {range.maxMark ? `–${range.maxMark}` : "+"}
                      </strong>
                      {totalMarks && (
                        <div className="text-muted" style={{ fontSize: '0.85em' }}>
                          ({Math.round((range.minMark / totalMarks) * 100)}
                          {range.maxMark
                            ? `–${Math.round((range.maxMark / totalMarks) * 100)}`
                            : "+"}%)
                        </div>
                      )}
                    </td>
                    <td>
                      <strong>{range.level}</strong>
                    </td>
                    <td>
                      {range.description && (
                        <div className="mb-1">{range.description}</div>
                      )}
                      {range.advice && (
                        <div style={{ fontSize: '0.9em' }}>
                          <em>→ {range.advice}</em>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {generalAdvice && (
          <div className="border-top border-dark pt-2">
            <p className="mb-0"><strong>Note:</strong> {generalAdvice}</p>
          </div>
        )}
      </div>
    </div>
  );
}