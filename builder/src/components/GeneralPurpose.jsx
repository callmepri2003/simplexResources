export default function GeneralPurpose({ props }) {
  return (
    <div
      className={props.componentName + " avoid-break-inside"}
      dangerouslySetInnerHTML={{ __html: props.html }}
    />
  );
}
