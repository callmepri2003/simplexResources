import componentMap from "../../componentMap";
import ExplanationBoxFormula from "./ExplanationBoxFormula";
import ExplanationBoxList from "./ExplanationBoxList";
import styled from "styled-components";

const ExplanationBoxWrapper = styled.div``;

export default function ExplanationBox({ props }) {
  return (
    <ExplanationBoxWrapper className="explanation col-12 mb-4">
      <div className="explanation-title fw-bold">{props.title}</div>
      <div className="explanation-content">
        {props.content.map((component) => {
          const Component = componentMap[component.type];
          return <Component key={component.id} props={component.props} />;
        })}
      </div>
    </ExplanationBoxWrapper>
  );
}
