export default function SlideCallout({ props }) {
  const { 
    text = '', 
    title = '',
    type = 'info',
    icon = true,
    size = 'medium'
  } = props;

  const typeClasses = {
    info: 'alert-info',
    success: 'alert-success',
    warning: 'alert-warning',
    danger: 'alert-danger',
    primary: 'alert-primary',
    secondary: 'alert-secondary'
  };

  const sizeClasses = {
    small: 'p-2',
    medium: 'p-3',
    large: 'p-4'
  };

  const icons = {
    info: 'ℹ️',
    success: '✓',
    warning: '⚠️',
    danger: '⚠️',
    primary: '★',
    secondary: '●'
  };

  return (
    <div className={`alert ${typeClasses[type]} ${sizeClasses[size]} mb-3`} role="alert">
      {title && (
        <h5 className="alert-heading mb-2">
          {icon && <span className="me-2">{icons[type]}</span>}
          {title}
        </h5>
      )}
      <p className="mb-0">{text}</p>
    </div>
  );
}