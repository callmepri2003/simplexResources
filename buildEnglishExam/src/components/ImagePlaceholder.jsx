export default function ImagePlaceholder({ props }) {
  const hasImage = props.imageUrl && props.imageUrl.trim() !== "";
  
  return (
    <div className="avoid-break-inside mb-4">
      <div className="text-center">
        {hasImage ? (
          <div>
            <img 
              src={props.imageUrl} 
              alt={props.alt || "Exam image"} 
              className="img-fluid border"
              style={{ 
                maxWidth: props.maxWidth || '100%', 
                maxHeight: props.maxHeight || '400px' 
              }}
            />
            {props.caption && (
              <p className="text-muted small mt-2 fst-italic">{props.caption}</p>
            )}
          </div>
        ) : (
          <div 
            className="border border-2 border-dashed bg-light d-flex align-items-center justify-content-center"
            style={{ 
              minHeight: props.height || '250px',
              backgroundColor: '#f8f9fa'
            }}
          >
            <div className="text-center p-3">
              <svg 
                width="64" 
                height="64" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="#6c757d" 
                strokeWidth="1.5"
                className="mb-2"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
              </svg>
              <p className="text-muted mb-0">
                <strong>Image Placeholder</strong>
                {props.description && <><br/><small>{props.description}</small></>}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}