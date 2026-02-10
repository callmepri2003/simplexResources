export default function AnswerBox({ props }) {
  const height = props.height || '100px';
  
  return (
    <div className="avoid-break-inside mb-4">
      {props.label && (
        <p className="mb-2"><strong>{props.label}</strong></p>
      )}
      <div 
        className="border border-2 p-2"
        style={{ minHeight: height }}
      >
        {/* Space for student answer */}
      </div>
    </div>
  );
}