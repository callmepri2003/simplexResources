export default function KeyTakeaway({ props }) {
  return (
    <div className="col-12 key-takeaways avoid-break-inside">
      <h3>Key Concepts</h3>
      <ul>
        {props.keyTakeaways.map((keyTakeaway, index) => {
          return <li key={index}>{keyTakeaway}</li>;
        })}
      </ul>
    </div>
  );
}
