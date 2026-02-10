// components/CoverPage.jsx
export default function CoverPage({ props }) {
  const {
    yearLevel,
    subject = "Mathematics",
    subtitle,
    academicYear,
    logoAlt = "Tutoring Centre Logo"
  } = props;

  return (
    <div 
      className="c-page d-flex flex-column justify-content-between align-items-center text-center p-5"
      style={{
        backgroundColor: "white"
      }}
    >
      {/* Top Section - Logo */}
      <div className="w-100 d-flex justify-content-end pt-3">
        <img 
          src="/assets/images/logo.png" 
          alt={logoAlt}
          className="cover-logo"
          style={{ maxWidth: "150px", height: "auto" }}
        />
      </div>

      {/* Center Section - Main Content */}
      <div className="cover-content flex-grow-1 d-flex flex-column justify-content-center">
        {/* Math-themed decorative elements */}
        <div className="math-decoration mb-4" style={{ fontSize: "3rem", opacity: 0.2, color: "#004aad" }}>
          π ∑ ∫ √ ∞
        </div>

        {/* Main Title */}
        <h1 className="display-1 fw-bold mb-3" style={{ fontSize: "4.5rem", color: "#004aad" }}>
          {subject}
        </h1>
        
        <h2 className="display-4 fw-semibold mb-4" style={{ color: "#004aad" }}>
          {yearLevel}
        </h2>

        {/* Subtitle/Value Proposition */}
        <p className="lead fs-3 mb-4 px-4" style={{ maxWidth: "800px", margin: "0 auto", color: "#333" }}>
          {subtitle}
        </p>

        {/* Academic Year */}
        {academicYear && (
          <div className="mt-4">
            <p className="fs-4 fw-light" style={{ color: "#666" }}>
              {academicYear}
            </p>
          </div>
        )}

        {/* Math-themed decorative elements bottom */}
        <div className="math-decoration mt-4" style={{ fontSize: "2.5rem", opacity: 0.2, color: "#004aad" }}>
          ÷ × ² ³ ±
        </div>
      </div>

      {/* Bottom Section - Tagline */}
      <div className="w-100 pb-3">
        <p className="mb-0 fs-5 fw-light" style={{ color: "#666" }}>
          Complete Year Resource • Self-Paced Learning • Parent-Friendly
        </p>
      </div>
    </div>
  );
}