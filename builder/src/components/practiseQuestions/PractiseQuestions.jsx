import componentMap from "../../componentMap";

export default function PractiseQuestions({ props }) {
  return (
    <div className="practise-questions mb-4">
      <div className="row">
        {props.content.map((component, index) => {
          const Component = componentMap[component.type];
          return <Component key={index} props={component.props} />;
        })}
      </div>
    </div>
  );
}
