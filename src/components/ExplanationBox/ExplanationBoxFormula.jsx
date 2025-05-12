export default function ExplanationBoxFormula({ props }) {
  return (
    <div className="avoid-break-inside formula-box my-3">
      <p className="math-formula">{props.children}</p>
    </div>
  );
}
