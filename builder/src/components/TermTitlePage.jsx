export default function TermTitlePage({props}) {
  return (
    <div className="mb-4">
      {/* Term Header */}
      <div className="text-center mb-3">
        <div className="badge bg-primary mb-2">Term {props.termNumber}</div>
        <h1 className="h2 mb-2">{props.termTitle}</h1>
        <p className="text-muted">{props.subject} • {props.academicYear}</p>
        {props.termDescription && (
          <p className="small text-muted mt-2">{props.termDescription}</p>
        )}
      </div>

      {/* Term Objectives and Assessment */}
      <div className="row g-3 mb-3">
        {props.termObjectives && props.termObjectives.length > 0 && (
          <div className="col-md-6">
            <div className="card">
              <div className="card-body p-3">
                <h3 className="h6 mb-2">Learning Objectives</h3>
                <ul className="small mb-0">
                  {props.termObjectives.map((objective, index) => (
                    <li key={index}>{objective}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {props.assessmentInfo && (
          <div className="col-md-6">
            <div className="card">
              <div className="card-body p-3">
                <h3 className="h6 mb-2">Assessment Overview</h3>
                <div className="small text-muted mb-0">
                  {props.assessmentInfo.split('\n').map((line, index) => (
                    <p key={index} className="mb-1">{line}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Force page break after assessments */}
      <div style={{ pageBreakAfter: 'always' }}></div>

      {/* Weekly Overview */}
      {props.weeklyBreakdown && props.weeklyBreakdown.length > 0 && (
        <div className="mb-3">
          <h3 className="h5 mb-2">Weekly Overview</h3>
          <div className="row g-2">
            {props.weeklyBreakdown.map((week, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="card">
                  <div className="card-body p-2">
                    <div className="d-flex justify-content-between align-items-center mb-1">
                      <span className="badge bg-secondary small">Week {week.weekNumber}</span>
                    </div>
                    <h4 className="small fw-bold mb-1">{week.title}</h4>
                    {week.description && (
                      <p className="small text-muted mb-1">{week.description}</p>
                    )}
                    {week.topics && week.topics.length > 0 && (
                      <div className="small text-muted">
                        Topics: {week.topics.join(', ')}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Important Dates */}
      {props.importantDates && props.importantDates.length > 0 && (
        <div className="mb-3">
          <h3 className="h5 mb-2">Important Dates</h3>
          <div className="row g-2">
            {props.importantDates.map((dateInfo, index) => (
              <div key={index} className="col-md-4 col-sm-6">
                <div className="small d-flex justify-content-between">
                  <span>{dateInfo.event}</span>
                  <span className="text-muted">{dateInfo.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}