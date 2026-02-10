export default function SlideImage({ props }) {
  const { 
    src = '', 
    alt = '',
    caption = '',
    width = '100',
    align = 'center',
    borderRadius = 'none',
    shadow = false
  } = props;

  const alignClasses = {
    left: 'text-start',
    center: 'text-center',
    right: 'text-end'
  };

  const radiusClasses = {
    none: '',
    small: 'rounded',
    medium: 'rounded-2',
    large: 'rounded-3',
    circle: 'rounded-circle'
  };

  return (
    <div className={`slide-image ${alignClasses[align]} mb-3`}>
      <img 
        src={src} 
        alt={alt}
        className={`img-fluid ${radiusClasses[borderRadius]} ${shadow ? 'shadow' : ''}`}
        style={{ maxWidth: `${width}%` }}
      />
      {caption && (
        <p className="text-muted small mt-2 mb-0">{caption}</p>
      )}
    </div>
  );
}