import componentMap from "../componentMap";

export default function Slide({ props }) {
  const { 
    content = [], 
    backgroundColor = 'white',
    backgroundImage = null,
    padding = 'default'
  } = props;

  const paddingClasses = {
    none: 'p-0',
    small: 'p-3',
    default: 'p-4',
    large: 'p-5'
  };

  const style = {
    backgroundColor,
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  return (
    <div 
      className={`slide-container d-flex flex-column ${paddingClasses[padding]} avoid-break-inside`}
      style={style}
    >
      {content.map((item, index) => {
        const Component = componentMap[item.type];
        return Component ? <Component key={item.id || index} props={item.props} /> : null;
      })}
    </div>
  );
}