export default function WeeklyTitle({ props }) {
  const { weekNumber, title, description, objectives, parentInfo, studentInfo, resourceType = 'in-class' } = props;

  return (
    <>
    <div className="mb-4">
      {/* Week and Title with Resource Type Toggle */}
      <div className="text-center mb-3">
        <div className="d-flex justify-content-center align-items-center gap-2 mb-2">
          <div className="badge bg-primary">Week {weekNumber}</div>
          
          {/* Resource Type Toggle */}
          <div className="d-flex bg-light rounded-pill p-1" style={{ fontSize: '0.75rem' }}>
            <div 
              className={`px-2 py-1 rounded-pill transition-all ${
                resourceType === 'in-class' 
                  ? 'bg-success text-white shadow-sm' 
                  : 'text-muted'
              }`}
              style={{ 
                fontWeight: resourceType === 'in-class' ? '600' : '400',
                opacity: resourceType === 'in-class' ? 1 : 0.6
              }}
            >
              📚 In-Class
            </div>
            <div 
              className={`px-2 py-1 rounded-pill transition-all ${
                resourceType === 'homework' 
                  ? 'bg-warning text-dark shadow-sm' 
                  : 'text-muted'
              }`}
              style={{ 
                fontWeight: resourceType === 'homework' ? '600' : '400',
                opacity: resourceType === 'homework' ? 1 : 0.6
              }}
            >
              📝 Homework
            </div>
          </div>
        </div>
        
        <h1 className="h2 mb-2">{title}</h1>
        {description && (
          <p className="text-muted">{description}</p>
        )}
      </div>

      {/* Learning Objectives */}
      {objectives && objectives.length > 0 && (
        <div className="mb-3">
          <h3 className="h5 mb-2">Learning Objectives</h3>
          <ul className="small">
            {objectives.map((objective, index) => (
              <li key={index}>{objective}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Information Cards */}
      <div className="row g-3">
        {parentInfo && (
          <div className="col-md-6">
            <div className="card">
              <div className="card-body p-3">
                <h4 className="h6 mb-2">For Parents</h4>
                <p className="small text-muted mb-0">{parentInfo}</p>
              </div>
            </div>
          </div>
        )}

        {studentInfo && (
          <div className="col-md-6">
            <div className="card">
              <div className="card-body p-3">
                <h4 className="h6 mb-2">For Students</h4>
                <p className="small text-muted mb-0">{studentInfo}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
    <div
      style={{
        display: "block",
        height: 0,
        margin: 0,
        padding: 0,
        pageBreakBefore: "always",   // React camelCase for page-break-before
        breakBefore: "page",
        WebkitColumnBreakBefore: "always"
      }}
    />
    </>
  );
}