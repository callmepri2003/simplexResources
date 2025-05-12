import "./App.css";
import componentMap from "./componentMap";
import KeyTakeaway from "./components/KeyTakeaway";
import GroupedSubquestionsGrid from "./components/practiseQuestions/GroupedSubquestionsQuestion";
import GroupedSubquestionsQuestion from "./components/practiseQuestions/GroupedSubquestionsQuestion";
import data from "./data.json";

function App() {
  // useEffect(() => {
  // const validationResult = validateJsonSchema();

  // if (validationResult !== true) {
  //   // If validation fails, throw a critical error with the validation errors
  //   throw new Error(
  //     `JSON Validation Failed: ${JSON.stringify(validationResult, null, 2)}`
  //   );
  // }

  // If validation is successful, you can log it or proceed as normal
  //   console.log("Data is valid!");
  // }, []);
  // const testProps = {
  //   questionNumber: "1",
  //   questionContent: "Find the value of each expression.",
  //   subquestions: [
  //     { prompt: "9 + 3 - 5" },
  //     { prompt: "10 - 3 + 9" },
  //     { prompt: "(26 + 5) × 2 − 15" },
  //     { prompt: "18 ÷ (2 + 7) × 2 + 1" },
  //     { prompt: "5² + 8 ÷ 2" },
  //     { prompt: "19 − (3² + 4) + 6" },
  //     { prompt: "9 + 3 - 5" },
  //     { prompt: "10 - 3 + 9" },
  //     { prompt: "(26 + 5) × 2 − 15" },
  //     { prompt: "18 ÷ (2 + 7) × 2 + 1" },
  //     { prompt: "5² + 8 ÷ 2" },
  //     { prompt: "19 − (3² + 4) + 6" },
  //     { prompt: "9 + 3 - 5" },
  //     { prompt: "10 - 3 + 9" },
  //     { prompt: "(26 + 5) × 2 − 15" },
  //     { prompt: "18 ÷ (2 + 7) × 2 + 1" },
  //     { prompt: "5² + 8 ÷ 2" },
  //     { prompt: "19 − (3² + 4) + 6" },
  //     { prompt: "9 + 3 - 5" },
  //     { prompt: "10 - 3 + 9" },
  //     { prompt: "(26 + 5) × 2 − 15" },
  //     { prompt: "18 ÷ (2 + 7) × 2 + 1" },
  //     { prompt: "5² + 8 ÷ 2" },
  //     { prompt: "19 − (3² + 4) + 6" },
  //     { prompt: "9 + 3 - 5" },
  //     { prompt: "10 - 3 + 9" },
  //     { prompt: "(26 + 5) × 2 − 15" },
  //     { prompt: "18 ÷ (2 + 7) × 2 + 1" },
  //     { prompt: "5² + 8 ÷ 2" },
  //     { prompt: "19 − (3² + 4) + 6" },
  //     { prompt: "9 + 3 - 5" },
  //     { prompt: "10 - 3 + 9" },
  //     { prompt: "(26 + 5) × 2 − 15" },
  //     { prompt: "18 ÷ (2 + 7) × 2 + 1" },
  //     { prompt: "5² + 8 ÷ 2" },
  //     { prompt: "19 − (3² + 4) + 6" },
  //     { prompt: "9 + 3 - 5" },
  //     { prompt: "10 - 3 + 9" },
  //     { prompt: "(26 + 5) × 2 − 15" },
  //     { prompt: "18 ÷ (2 + 7) × 2 + 1" },
  //     { prompt: "5² + 8 ÷ 2" },
  //     { prompt: "19 − (3² + 4) + 6" },
  //   ],
  // };

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
