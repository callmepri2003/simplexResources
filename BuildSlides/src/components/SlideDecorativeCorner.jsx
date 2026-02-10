export default function SlideDecorativeCorner({ props }) {
  const { content, corner = "top-left", decorationType = "dots", color = "primary", size = "medium" } = props;
  
  const cornerClass = {
    "top-left": "top-0 start-0",
    "top-right": "top-0 end-0",
    "bottom-left": "bottom-0 start-0",
    "bottom-right": "bottom-0 end-0"
  }[corner];
  
  const decorationSvg = {
    dots: `<svg width="60" height="60" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="3" fill="currentColor" opacity="0.3"/><circle cx="30" cy="10" r="3" fill="currentColor" opacity="0.5"/><circle cx="50" cy="10" r="3" fill="currentColor" opacity="0.7"/><circle cx="10" cy="30" r="3" fill="currentColor" opacity="0.5"/><circle cx="30" cy="30" r="3" fill="currentColor" opacity="0.7"/><circle cx="10" cy="50" r="3" fill="currentColor" opacity="0.7"/></svg>`,
    lines: `<svg width="60" height="60" xmlns="http://www.w3.org/2000/svg"><line x1="0" y1="10" x2="60" y2="10" stroke="currentColor" stroke-width="2" opacity="0.3"/><line x1="0" y1="30" x2="40" y2="30" stroke="currentColor" stroke-width="2" opacity="0.5"/><line x1="0" y1="50" x2="20" y2="50" stroke="currentColor" stroke-width="2" opacity="0.7"/></svg>`,
    triangle: `<svg width="60" height="60" xmlns="http://www.w3.org/2000/svg"><path d="M0,0 L60,0 L0,60 Z" fill="currentColor" opacity="0.1"/></svg>`
  }[decorationType];
  
  const colorClass = `text-${color}`;

  return (
    <div className="avoid-break-inside position-relative mb-3">
      <div className={`position-absolute ${cornerClass} ${colorClass}`} style={{ pointerEvents: 'none' }}>
        <div dangerouslySetInnerHTML={{ __html: decorationSvg }} />
      </div>
      <div className="position-relative" style={{ zIndex: 1 }}>
        {content && content.map((item, index) => {
          const Component = window.componentMap?.[item.type];
          return Component ? <Component key={item.id || index} props={item.props} /> : null;
        })}
      </div>
    </div>
  );
}