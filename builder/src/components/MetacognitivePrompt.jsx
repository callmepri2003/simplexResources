export default function MetacognitivePrompt({ props }) {
  return (
    <div className="avoid-break-inside my-3">
      <div className="border-start border-4 border-primary ps-3 py-2" style={{ borderColor: '#004aad !important' }}>
        <p className="text-muted small mb-1 fw-semibold">REFLECT</p>
        <p className="mb-0 fst-italic">{props.prompt}</p>
      </div>
    </div>
  );
}