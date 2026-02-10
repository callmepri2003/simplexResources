export default function Heading({ props }) {
  return (
    <h2 
      className="mb-3 mt-4 fw-bold avoid-break-inside" 
      style={{ 
        color: '#004aad',
        borderBottom: '3px solid #004aad',
        paddingBottom: '8px',
        breakAfter: 'avoid'
      }}
    >
      {props.heading}
    </h2>
  );
}