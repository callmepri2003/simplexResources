import componentMap from '../componentMap';

export default function SlideTwoColumn({ props }) {
  const { 
    leftContent = [], 
    rightContent = [],
    leftWidth = '50',
    gap = 'default',
    verticalAlign = 'top'
  } = props;

  const gapClasses = {
    none: 'g-0',
    small: 'g-2',
    default: 'g-3',
    large: 'g-4'
  };

  const alignClasses = {
    top: 'align-items-start',
    center: 'align-items-center',
    bottom: 'align-items-end'
  };

  const rightWidth = 100 - parseInt(leftWidth);

  return (
    <div className={`row ${gapClasses[gap]} ${alignClasses[verticalAlign]}`}>
      <div className={`col-${Math.round(parseInt(leftWidth) / 100 * 12)}`}>
        {leftContent.map((item, index) => {
          const Component = componentMap[item.type];
          return Component ? <Component key={item.id || index} props={item.props} /> : null;
        })}
      </div>
      <div className={`col-${Math.round(rightWidth / 100 * 12)}`}>
        {rightContent.map((item, index) => {
          const Component = componentMap[item.type];
          return Component ? <Component key={item.id || index} props={item.props} /> : null;
        })}
      </div>
    </div>
  );
}