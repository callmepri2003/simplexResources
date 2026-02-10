import "./App.css";
import componentMap from "./componentMap";
import KeyTakeaway from "./components/KeyTakeaway";
import GroupedSubquestionsGrid from "./components/practiseQuestions/GroupedSubquestionsQuestion";
import GroupedSubquestionsQuestion from "./components/practiseQuestions/GroupedSubquestionsQuestion";
import data from "./data.json";

function App() {

  return (
    <>
      <div className="row">
        {/* <GroupedSubquestionsGrid props={testProps} /> */}
        {data.props.content.map((component) => {
          const Component = componentMap[component.type];

          return <Component key={component.id} props={component.props} />;
        })}
      </div>
    </>
  );
}

export default App;
