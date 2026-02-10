export default function Angle({ props }) {
  const { 
    degrees, 
    showLabel = true, 
    showArc = true, 
    showRays = true,
    rayLength = 80,
    arcRadius = 30,
    labelOffset = 10,
    size = "medium",
    color = "#007bff"
  } = props;

  // Size configurations
  const sizeConfig = {
    small: { width: 120, height: 100, rayLength: 60, arcRadius: 20, labelOffset: 8 },
    medium: { width: 160, height: 120, rayLength: 80, arcRadius: 30, labelOffset: 10 },
    large: { width: 200, height: 150, rayLength: 100, arcRadius: 40, labelOffset: 12 }
  };

  const config = sizeConfig[size] || sizeConfig.medium;
  const actualRayLength = rayLength || config.rayLength;
  const actualArcRadius = arcRadius || config.arcRadius;
  const actualLabelOffset = labelOffset || config.labelOffset;

  // Calculate positions
  const centerX = config.width / 2;
  const centerY = config.height - 20; // Position near bottom for better visibility
  
  // Convert degrees to radians
  const radians = (degrees * Math.PI) / 180;
  
  // Calculate ray endpoints
  const ray1EndX = centerX + actualRayLength; // Horizontal ray (0 degrees)
  const ray1EndY = centerY;
  
  const ray2EndX = centerX + actualRayLength * Math.cos(radians);
  const ray2EndY = centerY - actualRayLength * Math.sin(radians);
  
  // Calculate arc path
  const arcStartX = centerX + actualArcRadius;
  const arcStartY = centerY;
  const arcEndX = centerX + actualArcRadius * Math.cos(radians);
  const arcEndY = centerY - actualArcRadius * Math.sin(radians);
  
  // Determine if arc should be drawn clockwise or counterclockwise
  const largeArcFlag = degrees > 180 ? 1 : 0;
  const sweepFlag = 0; // Always sweep clockwise from horizontal ray
  
  const arcPath = `M ${arcStartX} ${arcStartY} A ${actualArcRadius} ${actualArcRadius} 0 ${largeArcFlag} ${sweepFlag} ${arcEndX} ${arcEndY}`;
  
  // Calculate label position (midpoint of arc)
  const labelAngle = radians / 2;
  const labelDistance = actualArcRadius + actualLabelOffset;
  const labelX = centerX + labelDistance * Math.cos(labelAngle);
  const labelY = centerY - labelDistance * Math.sin(labelAngle);

  return (
    <div className="angle-component avoid-break-inside d-flex justify-content-center align-items-center my-3">
      <div className="text-center">
        <svg 
          width={config.width} 
          height={config.height} 
          viewBox={`0 0 ${config.width} ${config.height}`}
          className="angle-svg"
        >
          {/* Rays */}
          {showRays && (
            <g stroke={color} strokeWidth="2" fill="none">
              {/* Horizontal ray */}
              <line 
                x1={centerX} 
                y1={centerY} 
                x2={ray1EndX} 
                y2={ray1EndY}
              />
              {/* Angled ray */}
              <line 
                x1={centerX} 
                y1={centerY} 
                x2={ray2EndX} 
                y2={ray2EndY}
              />
            </g>
          )}
          
          {/* Arc */}
          {showArc && degrees > 0 && (
            <path
              d={arcPath}
              stroke={color}
              strokeWidth="1.5"
              fill="none"
            />
          )}
          
          {/* Angle label */}
          {showLabel && (
            <text
              x={labelX}
              y={labelY}
              textAnchor="middle"
              dominantBaseline="central"
              fontSize="14"
              fontFamily="Arial, sans-serif"
              fill={color}
              fontWeight="500"
            >
              {degrees}°
            </text>
          )}
          
          {/* Center point */}
          <circle
            cx={centerX}
            cy={centerY}
            r="2"
            fill={color}
          />
        </svg>
        
        {/* Optional caption */}
        {degrees === 90 && (
          <small className="text-muted d-block mt-1">Right Angle</small>
        )}
        {degrees === 180 && (
          <small className="text-muted d-block mt-1">Straight Angle</small>
        )}
        {degrees === 360 && (
          <small className="text-muted d-block mt-1">Complete Angle</small>
        )}
      </div>
    </div>
  );
}