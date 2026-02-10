export default function WritingPrompt({ props }) {
  return (
    <div className="avoid-break-inside mb-4">
      <div className="border-start border-4 ps-3 py-2" style={{ borderColor: '#004aad' }}>
        <h5 className="mb-2" style={{ color: '#004aad' }}>{props.title}</h5>
        <p className="mb-3">{props.prompt}</p>
        
        {props.stimulusImage && (
          <div className="text-center mb-3">
            <img 
              src={props.stimulusImage} 
              alt={props.stimulusImageAlt || "Writing stimulus"} 
              className="img-fluid"
              style={{ maxHeight: '250px' }}
            />
          </div>
        )}
        
        {props.requirements && props.requirements.length > 0 && (
          <div className="mb-2">
            <strong>Requirements:</strong>
            <ul className="mb-0 mt-1">
              {props.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>
        )}
        
        {props.wordCount && (
          <p className="mb-1 text-muted small">
            <em>Suggested word count: {props.wordCount} words</em>
          </p>
        )}
        
        {props.marks && (
          <p className="mb-0 text-muted small">({props.marks} marks)</p>
        )}
      </div>
    </div>
  );
}