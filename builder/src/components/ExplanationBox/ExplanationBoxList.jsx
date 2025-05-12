export default function ExplanationBoxList({ props }) {
  console.log(props.items);
  return (
    <ul className={"avoid-break-inside"}>
      {props.items.map((element, index) => {
        return <li key={index}>{element}</li>;
      })}
    </ul>
  );
}
