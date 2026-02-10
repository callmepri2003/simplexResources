export default function SlideIconBox({ props }) {
  const { content, iconUrl, iconPlaceholder = "📌", iconPosition = "top", iconSize = "medium", iconBackground = "primary" } = props;
  
  const iconSizeClass = {
    small: "fs-4",
    medium: "fs-2",
    large: "fs-1"
  }[iconSize];
  
  const bgClass = `bg-${iconBackground}`;
  const isTopOrBottom = iconPosition === "top" || iconPosition === "bottom";
  const flexDirection = iconPosition === "left" ? "flex-row" : iconPosition === "right" ? "flex-row-reverse" : "flex-column";
  const alignItems = isTopOrBottom ? "align-items-center" : "align-items-start";

  return (
    <div className={`avoid-break-inside d-flex ${flexDirection} ${alignItems} gap-3 mb-3`}>
      <div className={`${bgClass} rounded-circle d-flex align-items-center justify-content-center`} 
           style={{ width: '60px', height: '60px', minWidth: '60px' }}>
        {iconUrl ? (
          <img src={iconUrl} alt="" className="w-75 h-75" style={{ objectFit: 'contain' }} />
        ) : (
          <span className={iconSizeClass}>{iconPlaceholder}</span>
        )}
      </div>
      <div className="flex-grow-1">
        {content && content.map((item, index) => {
          const Component = window.componentMap?.[item.type];
          return Component ? <Component key={item.id || index} props={item.props} /> : null;
        })}
      </div>
    </div>
  );
}