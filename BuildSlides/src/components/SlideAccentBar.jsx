export default function SlideAccentBar({ props }) {
  const { content, accentColor = "primary", position = "left", thickness = "medium" } = props;
  
  const thicknessClass = {
    thin: "border-start border-2",
    medium: "border-start border-4",
    thick: "border-start border-5"
  }[thickness];
  
  const colorClass = `border-${accentColor}`;
  const paddingClass = position === "left" ? "ps-3" : "pe-3";

  return (
    <div className={`avoid-break-inside ${thicknessClass} ${colorClass} ${paddingClass} mb-3`}>
      {content && content.map((item, index) => {
        const Component = window.componentMap?.[item.type];
        return Component ? <Component key={item.id || index} props={item.props} /> : null;
      })}
    </div>
  );
}