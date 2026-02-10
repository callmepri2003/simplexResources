import React, { useEffect, useRef } from 'react';
import functionPlot from 'function-plot';

export default function ExamGraph({ props }) {
  const graphRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    try {
      // Clear any existing graph
      containerRef.current.innerHTML = '';

      const options = {
        target: containerRef.current,
        width: props.width || 600,
        height: props.height || 400,
        xAxis: {
          label: props.xAxisLabel || 'x',
          domain: props.xDomain || [-10, 10]
        },
        yAxis: {
          label: props.yAxisLabel || 'y',
          domain: props.yDomain || [-10, 10]
        },
        grid: props.showGrid !== false,
        data: props.equations.map((eq, index) => ({
          fn: eq.equation,
          color: eq.color || ['#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6'][index % 5],
          graphType: eq.graphType || 'polyline',
          ...(eq.range && { range: eq.range }),
          ...(eq.closed && { closed: eq.closed }),
          ...(eq.skipTip && { skipTip: eq.skipTip })
        })),
        ...(props.disableZoom && { disableZoom: true })
      };

      functionPlot(options);
    } catch (error) {
      console.error('Error rendering graph:', error);
      if (containerRef.current) {
        containerRef.current.innerHTML = `<div class="alert alert-danger">Error rendering graph: ${error.message}</div>`;
      }
    }
  }, [props]);

  return (
    <div className="avoid-break-inside mb-4">
      {props.title && (
        <h5 className="mb-3">{props.title}</h5>
      )}
      {props.description && (
        <p className="text-muted mb-3">{props.description}</p>
      )}
      <div 
        ref={containerRef}
        className="d-flex justify-content-center"
        style={{ minHeight: props.height || 400 }}
      />
      {props.caption && (
        <p className="text-center text-muted mt-2 small">
          <em>{props.caption}</em>
        </p>
      )}
      {props.equations && props.equations.length > 1 && (
        <div className="mt-3">
          <strong>Equations:</strong>
          <ul className="mb-0 mt-2">
            {props.equations.map((eq, index) => (
              <li key={index}>
                <span style={{ 
                  color: eq.color || ['#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6'][index % 5],
                  fontWeight: 'bold'
                }}>
                  ●
                </span>
                {' '}
                <code>{eq.equation}</code>
                {eq.label && ` - ${eq.label}`}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}