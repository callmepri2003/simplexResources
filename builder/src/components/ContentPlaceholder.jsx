export default function ContentPlaceholder({ props }) {
  const { placeholderText, suggestedContent, height = "300px" } = props;

  return (
    <div className="avoid-break-inside">
      <div 
        className="border border-2 border-dashed rounded-3 d-flex flex-column align-items-center justify-content-center text-center p-4 mb-4 bg-light position-relative"
        style={{ 
          minHeight: height,
          borderColor: '#004aad !important',
          backgroundColor: '#f8f9ff !important'
        }}
      >
        {/* Main placeholder icon */}
        <div className="mb-3">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#004aad" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
            <polyline points="21,15 16,10 5,21"/>
          </svg>
        </div>
        
        {/* Placeholder text */}
        <h5 className="text-muted mb-3" style={{ color: '#004aad !important' }}>
          Content Placeholder
        </h5>
        
        {/* Custom placeholder message */}
        {placeholderText && (
          <p className="text-muted mb-3 fw-medium">
            {placeholderText}
          </p>
        )}
        
        {/* Suggested content type */}
        {suggestedContent && (
          <div className="mb-3" style={{ width: '100%', maxWidth: '400px' }}>
            <small className="text-muted d-block mb-1">Suggested content:</small>
            <div className="badge rounded-pill px-3 py-2" style={{ backgroundColor: '#004aad', color: 'white', wordWrap: 'break-word', whiteSpace: 'normal', display: 'inline-block', width: '100%', textAlign: 'center' }}>
              {suggestedContent}
            </div>
          </div>
        )}
        
        {/* Instructions for replacement */}
        <div className="mt-3 p-3 bg-white rounded border" style={{ maxWidth: '400px' }}>
          <h6 className="mb-2" style={{ color: '#004aad' }}>
            <small>📝 Instructions for replacement:</small>
          </h6>
          <ol className="small text-muted mb-0 text-start">
            <li>Create or source the required content</li>
            <li>Save as image file (PNG/JPG recommended)</li>
            <li>Replace this placeholder with an image component</li>
            <li>Or use GeneralPurpose component for custom HTML</li>
          </ol>
        </div>
        
        {/* Corner label for easy identification */}
        <div 
          className="position-absolute top-0 end-0 badge rounded-pill m-2"
          style={{ backgroundColor: '#dc3545', color: 'white' }}
        >
          Needs Attention
        </div>
      </div>
    </div>
  );
}