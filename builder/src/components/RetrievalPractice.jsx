export default function RetrievalPractice({ props }) {
  return (
    <div className="avoid-break-inside my-3">
      <div className="border-start border-3 ps-3 py-2" style={{ borderColor: '#004aad' }}>
        <p className="text-muted small mb-2 fw-semibold">WARM-UP</p>
        {props.subtitle && (
          <p className="mb-2 small">{props.subtitle}</p>
        )}
        <div className="mt-2">
          {props.questions && props.questions.map((question, index) => (
            <p key={index} className="mb-2">
              <span className="fw-semibold" style={{ color: '#004aad' }}>{index + 1}.</span> {question}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}