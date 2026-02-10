export default function BadgeLabel({ props }) {
  const { 
    text,
    variant = "primary",
    size = "medium"
  } = props;

  const sizeClass = size === "large" ? "fs-5" : 
                    size === "small" ? "fs-6" : "";

  return (
    <span className={`badge bg-${variant} ${sizeClass} me-2`}>
      {text}
    </span>
  );
}