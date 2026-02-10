export default function HomeworkComment({ props }) {
  return (
    <div className="avoid-break-inside mb-5 mt-5">
      <div className="border-top border-dark pt-4">
        <h6 className="text-muted mb-4">Tutor Feedback</h6>
        
        <div className="mb-4">
          <div className="small text-muted mb-2">Mark:</div>
          <div className="border-bottom border-dark pb-3"></div>
        </div>
        
        <div className="mb-4">
          <div className="small text-muted mb-2">Comment:</div>
          <div className="border-bottom border-dark pb-3 mb-2"></div>
          <div className="border-bottom border-dark pb-3 mb-2"></div>
          <div className="border-bottom border-dark pb-3"></div>
        </div>
        
        <div>
          <div className="small text-muted mb-2">Tutor Signature:</div>
          <div className="border-bottom border-dark pb-3"></div>
        </div>
      </div>
    </div>
  );
}