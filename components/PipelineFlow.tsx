import { pipeline } from "@/lib/data";

export default function PipelineFlow() {
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[560px] md:min-w-0">
        <svg
          viewBox="0 0 920 120"
          className="w-full h-auto"
          aria-hidden="true"
          style={
            {
              ["--flow-path" as string]: "none",
            } as React.CSSProperties
          }
        >
          <defs>
            <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#5ec8d8" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#e8a33d" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#e8a33d" stopOpacity="0.9" />
            </linearGradient>
          </defs>

          {/* base line */}
          <line x1="60" y1="60" x2="860" y2="60" stroke="#232a35" strokeWidth="1.5" />
          <line x1="60" y1="60" x2="860" y2="60" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="2 0" />

          {pipeline.map((stage, i) => {
            const x = 60 + (i * 800) / (pipeline.length - 1);
            return (
              <g key={stage.label}>
                <circle cx={x} cy={60} r={5} fill="#0a0d12" stroke={i === pipeline.length - 1 ? "#e8a33d" : "#5ec8d8"} strokeWidth="2" />
                <text x={x} y={36} textAnchor="middle" fill="#e7e9ec" fontSize="13" fontFamily="var(--font-mono)" fontWeight={500}>
                  {stage.label}
                </text>
                <text x={x} y={88} textAnchor="middle" fill="#5c6573" fontSize="11" fontFamily="var(--font-mono)">
                  {stage.tech}
                </text>
              </g>
            );
          })}

          {/* flowing dots along the path */}
          {[0, 1, 2].map((i) => (
            <circle key={i} r="3.5" fill="#e8a33d">
              <animateMotion
                dur="3.2s"
                repeatCount="indefinite"
                begin={`${i * 1.07}s`}
                path="M 60,60 L 860,60"
              />
              <animate
                attributeName="opacity"
                values="0;1;1;0"
                keyTimes="0;0.08;0.92;1"
                dur="3.2s"
                repeatCount="indefinite"
                begin={`${i * 1.07}s`}
              />
            </circle>
          ))}
        </svg>
      </div>
    </div>
  );
}
