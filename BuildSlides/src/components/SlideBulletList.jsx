export default function SlideBulletList({ props }) {
  const { 
    items = [], 
    bulletStyle = 'disc',
    fontSize = 'medium',
    spacing = 'default',
    color = 'dark'
  } = props;

  const fontSizeClasses = {
    small: 'fs-6',
    medium: 'fs-5',
    large: 'fs-4',
    xlarge: 'fs-3'
  };

  const spacingClasses = {
    compact: 'mb-2',
    default: 'mb-3',
    relaxed: 'mb-4'
  };

  const bulletStyles = {
    disc: 'list-unstyled',
    circle: 'list-unstyled',
    square: 'list-unstyled',
    numbered: ''
  };

  const getBulletSymbol = (style) => {
    const symbols = {
      disc: '●',
      circle: '○',
      square: '■',
      numbered: null
    };
    return symbols[style];
  };

  const ListTag = bulletStyle === 'numbered' ? 'ol' : 'ul';
  const bulletSymbol = getBulletSymbol(bulletStyle);

  return (
    <ListTag className={`${bulletStyles[bulletStyle]} ${spacingClasses[spacing]}`}>
      {items.map((item, index) => (
        <li key={index} className={`${fontSizeClasses[fontSize]} text-${color} mb-2`}>
          {bulletSymbol && <span className="me-2">{bulletSymbol}</span>}
          {item}
        </li>
      ))}
    </ListTag>
  );
}