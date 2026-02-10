export default function WritingLines({ props }) {
  const lineCount = props.lines || 10;
  const lineHeight = props.lineHeight || '30px';
  
  return (
    <div className="avoid-break-inside mb-4">
      {props.prompt && (
        <p className="mb-3 fst-italic text-muted">{props.prompt}</p>
      )}
      <div style={{ 
        borderLeft: '2px solid #dee2e6',
        paddingLeft: '10px'
      }}>
        {[...Array(lineCount)].map((_, index) => (
          <div 
            key={index}
            style={{ 
              height: lineHeight,
              borderBottom: '1px solid #dee2e6',
              marginBottom: '0'
            }}
          />
        ))}
      </div>
    </div>
  );
}