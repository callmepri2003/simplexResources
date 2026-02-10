export default function SlideQuoteBox({ props }) {
  const { text, author, style = "default", color = "secondary" } = props;
  
  const styleClasses = {
    default: "border-start border-4 ps-4 py-3",
    card: "card shadow-sm p-4",
    minimal: "ps-4 py-2",
    filled: "p-4 rounded-3"
  }[style];
  
  const colorClass = style === "filled" ? `bg-${color} bg-opacity-10` : `border-${color}`;

  return (
    <div className={`avoid-break-inside ${styleClasses} ${colorClass} mb-3`}>
      <blockquote className="mb-2">
        <p className="fs-5 fst-italic mb-0">&ldquo;{text}&rdquo;</p>
      </blockquote>
      {author && (
        <footer className="text-muted">
          <cite>— {author}</cite>
        </footer>
      )}
    </div>
  );
}