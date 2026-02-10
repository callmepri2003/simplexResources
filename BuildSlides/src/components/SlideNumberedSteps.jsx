export default function SlideNumberedStep({ props }) {
  const { content, stepNumber, stepColor = "primary", size = "medium" } = props;
  
  const sizeMap = {
    small: { circle: '40px', font: 'fs-6' },
    medium: { circle: '50px', font: 'fs-5' },
    large: { circle: '60px', font: 'fs-4' }
  };
  
  const { circle, font } = sizeMap[size];
  const bgClass = `bg-${stepColor}`;

  return (
    <div className="avoid-break-inside d-flex gap-3 mb-3">
      <div className={`${bgClass} text-white rounded-circle d-flex align-items-center justify-content-center fw-bold ${font}`}
           style={{ width: circle, height: circle, minWidth: circle }}>
        {stepNumber}
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