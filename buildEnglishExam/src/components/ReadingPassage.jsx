export default function ReadingPassage({ props }) {
  return (
    <div className="avoid-break-inside mb-4">
      <div className="border-start border-4 ps-3" style={{ borderColor: '#004aad' }}>
        <h4 className="mb-1" style={{ color: '#004aad' }}>{props.title}</h4>
        {props.author && <p className="text-muted small mb-3">by {props.author}</p>}
        
        {props.image && (
          <div className="text-center mb-3">
            <img 
              src={props.image} 
              alt={props.imageAlt || "Passage illustration"} 
              className="img-fluid"
              style={{ maxHeight: '300px' }}
            />
            {props.imageCaption && (
              <p className="text-muted small mt-2 fst-italic">{props.imageCaption}</p>
            )}
          </div>
        )}
        
        {props.paragraphs.map((paragraph, index) => (
          <p key={index} className="mb-3" style={{ textAlign: 'justify', lineHeight: '1.6' }}>
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}