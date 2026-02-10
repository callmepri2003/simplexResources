export default function SlideFeatureBox({ props }) {
  const { content, iconUrl, iconPlaceholder = "⭐", title, variant = "default", size = "medium" } = props;
  
  const variantClasses = {
    default: "border border-primary bg-light",
    primary: "bg-primary text-white",
    success: "bg-success text-white",
    info: "bg-info text-white",
    warning: "bg-warning text-dark",
    minimal: "border border-secondary"
  }[variant];
  
  const paddingClass = {
    small: "p-3",
    medium: "p-4",
    large: "p-5"
  }[size];

  return (
    <div className={`avoid-break-inside rounded-3 ${paddingClass} ${variantClasses} mb-3`}>
      <div className="d-flex align-items-center gap-3 mb-3">
        <div className="d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
          {iconUrl ? (
            <img src={iconUrl} alt="" className="w-100 h-100" style={{ objectFit: 'contain' }} />
          ) : (
            <span className="fs-3">{iconPlaceholder}</span>
          )}
        </div>
        {title && <h5 className="mb-0 fw-bold">{title}</h5>}
      </div>
      {content && content.map((item, index) => {
        const Component = window.componentMap?.[item.type];
        return Component ? <Component key={item.id || index} props={item.props} /> : null;
      })}
    </div>
  );
}