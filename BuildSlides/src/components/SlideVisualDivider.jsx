export default function SlideVisualDivider({ props }) {
  const { iconUrl, iconPlaceholder = "✦", style = "solid", color = "secondary", spacing = "default" } = props;
  
  const spacingClass = {
    small: "my-2",
    default: "my-3",
    large: "my-4"
  }[spacing];
  
  const borderStyle = {
    solid: "border-top",
    dashed: "border-top border-dashed",
    dotted: "border-top border-dotted",
    double: "border-top border-3"
  }[style];
  
  const colorClass = `border-${color}`;

  return (
    <div className={`avoid-break-inside ${spacingClass} position-relative`}>
      <hr className={`${borderStyle} ${colorClass} opacity-50`} />
      <div className="position-absolute top-50 start-50 translate-middle bg-white px-3">
        {iconUrl ? (
          <img src={iconUrl} alt="" style={{ width: '30px', height: '30px', objectFit: 'contain' }} />
        ) : (
          <span className="text-muted">{iconPlaceholder}</span>
        )}
      </div>
    </div>
  );
}