export default function SlideGradientBox({ props }) {
  const { content, gradientStart = "primary", gradientEnd = "secondary", direction = "to-right", textColor = "white", padding = "default" } = props;
  
  const paddingClass = {
    none: "p-0",
    small: "p-3",
    default: "p-4",
    large: "p-5"
  }[padding];
  
  const gradientDirection = {
    "to-right": "to right",
    "to-left": "to left",
    "to-bottom": "to bottom",
    "to-top": "to top",
    "diagonal-down": "135deg",
    "diagonal-up": "45deg"
  }[direction];
  
  const gradientStyle = {
    background: `linear-gradient(${gradientDirection}, var(--bs-${gradientStart}), var(--bs-${gradientEnd}))`
  };
  
  const textColorClass = `text-${textColor}`;

  return (
    <div className={`avoid-break-inside rounded ${paddingClass} ${textColorClass} mb-3`} style={gradientStyle}>
      {content && content.map((item, index) => {
        const Component = window.componentMap?.[item.type];
        return Component ? <Component key={item.id || index} props={item.props} /> : null;
      })}
    </div>
  );
}