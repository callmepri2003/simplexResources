export default function SlideCard({ props }) {
  const { content, elevation = "medium", padding = "default", borderColor = "light", backgroundColor = "white" } = props;
  
  const elevationClass = {
    none: "",
    low: "shadow-sm",
    medium: "shadow",
    high: "shadow-lg"
  }[elevation];
  
  const paddingClass = {
    none: "p-0",
    small: "p-3",
    default: "p-4",
    large: "p-5"
  }[padding];
  
  const bgClass = `bg-${backgroundColor}`;
  const borderClass = borderColor !== "none" ? `border border-${borderColor}` : "";

  return (
    <div className={`avoid-break-inside rounded ${elevationClass} ${paddingClass} ${bgClass} ${borderClass} mb-3`}>
      {content && content.map((item, index) => {
        const Component = window.componentMap?.[item.type];
        return Component ? <Component key={item.id || index} props={item.props} /> : null;
      })}
    </div>
  );
}