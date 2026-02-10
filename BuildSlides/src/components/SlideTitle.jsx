export default function SlideTitle({ props }) {
  const { 
    text = '', 
    align = 'left',
    size = 'large',
    color = 'dark',
    marginBottom = 'default'
  } = props;

  const sizeClasses = {
    small: 'h4',
    medium: 'h3',
    large: 'h2',
    xlarge: 'h1'
  };

  const marginClasses = {
    none: 'mb-0',
    small: 'mb-2',
    default: 'mb-3',
    large: 'mb-4'
  };

  return (
    <h2 className={`${sizeClasses[size]} text-${align} text-${color} ${marginClasses[marginBottom]}`}>
      {text}
    </h2>
  );
}