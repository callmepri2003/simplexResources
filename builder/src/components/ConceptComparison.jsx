export default function ConceptComparison({ props }) {
  return (
    <div className="avoid-break-inside my-4">
      <h6 className="fw-bold mb-2" style={{ color: '#004aad' }}>
        {props.title}
      </h6>
      <table className="table table-sm">
        <thead>
          <tr style={{ borderBottom: '2px solid #004aad' }}>
            <th className="fw-semibold bg-light" style={{ width: '30%' }}></th>
            <th className="fw-semibold bg-light">{props.concept1}</th>
            <th className="fw-semibold bg-light">{props.concept2}</th>
          </tr>
        </thead>
        <tbody>
          {props.rows && props.rows.map((row, index) => (
            <tr key={index}>
              <td className="fw-semibold text-muted small">{row.aspect}</td>
              <td>{row.concept1Value}</td>
              <td>{row.concept2Value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}