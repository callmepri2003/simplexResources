export default function ExplanationBoxText({ props }) {
  return <p className={"avoid-break-inside"}>{props.children}</p>;
}
