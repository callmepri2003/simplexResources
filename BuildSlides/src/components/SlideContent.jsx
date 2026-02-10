import componentMap from '../componentMap';

export default function SlideContent({ props }) {
  const { 
    content = [], 
    layout = 'default',
    verticalAlign = 'top',
    horizontalAlign = 'start'
  } = props;

  const alignClasses = {
    top: 'align-items-start',
    center: 'align-items-center',
    bottom: 'align-items-end'
  };

  const horizontalClasses = {
    start: 'justify-content-start',
    center: 'justify-content-center',
    end: 'justify-content-end'
  };

  return (
    <div className={`slide-content flex-grow-1 d-flex flex-column ${alignClasses[verticalAlign]} ${horizontalClasses[horizontalAlign]}`}>
      {content.map((item, index) => {
        const Component = componentMap[item.type];
        return Component ? <Component key={item.id || index} props={item.props} /> : null;
      })}
    </div>
  );
}