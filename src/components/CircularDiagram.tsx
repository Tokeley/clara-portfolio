"use client";

import { motion } from "framer-motion";

interface CircularDiagramProps {
  heading: string;
  nodes: { label: string; image: string }[];
  className?: string;
}

export function CircularDiagram({ heading, nodes, className = "" }: CircularDiagramProps) {
  const centerX = 400;
  const centerY = 350;
  const radius = 240;
  const nodeRadius = 65;
  const svgWidth = 800;
  const svgHeight = 700;

  const angleOffset = -Math.PI / 2;
  const positions = nodes.map((_, i) => {
    const angle = angleOffset + (2 * Math.PI * i) / nodes.length;
    return {
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle),
    };
  });

  function arrowPath(from: { x: number; y: number }, to: { x: number; y: number }) {
    const dx = to.x - from.x;
    const dy = to.y - from.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const nx = dx / dist;
    const ny = dy / dist;

    const startX = from.x + nx * (nodeRadius + 8);
    const startY = from.y + ny * (nodeRadius + 8);
    const endX = to.x - nx * (nodeRadius + 8);
    const endY = to.y - ny * (nodeRadius + 8);

    const midX = (startX + endX) / 2;
    const midY = (startY + endY) / 2;

    const perpX = -ny * 30;
    const perpY = nx * 30;

    const cx = midX + perpX;
    const cy = midY + perpY;

    return `M ${startX} ${startY} Q ${cx} ${cy} ${endX} ${endY}`;
  }

  return (
    <section className={`py-20 bg-white ${className}`}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center">
          <motion.h2
            className="text-5xl font-black leading-tight lg:w-64"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {heading}
          </motion.h2>

          <div className="flex-1 overflow-x-auto">
            <svg
              viewBox={`0 0 ${svgWidth} ${svgHeight}`}
              className="mx-auto"
              style={{ maxWidth: svgWidth, width: "100%" }}
            >
              <motion.circle
                cx={centerX}
                cy={centerY}
                r={radius - 40}
                fill="none"
                stroke="#d4d4d4"
                strokeWidth={1.5}
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.4 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
              />

              {positions.map((from, i) => {
                const to = positions[(i + 1) % positions.length];
                const d = arrowPath(from, to);
                return (
                  <motion.path
                    key={`arrow-${i}`}
                    d={d}
                    fill="none"
                    stroke="#b0b0b0"
                    strokeWidth={2}
                    markerEnd="url(#arrowhead)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                  />
                );
              })}

              <defs>
                <marker
                  id="arrowhead"
                  markerWidth="8"
                  markerHeight="6"
                  refX="7"
                  refY="3"
                  orient="auto"
                >
                  <polygon points="0 0, 8 3, 0 6" fill="#b0b0b0" />
                </marker>
                <clipPath id="circle-clip">
                  <circle cx="0" cy="0" r={nodeRadius - 4} />
                </clipPath>
              </defs>

              {positions.map((pos, i) => {
                const node = nodes[i];
                return (
                  <motion.g
                    key={i}
                    initial={{ opacity: 0, scale: 0.6 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <circle
                      cx={pos.x}
                      cy={pos.y}
                      r={nodeRadius}
                      fill="#e8e8e8"
                      stroke="#ccc"
                      strokeWidth={2}
                    />
                    <clipPath id={`clip-${i}`}>
                      <circle cx={pos.x} cy={pos.y} r={nodeRadius - 3} />
                    </clipPath>
                    <image
                      href={node.image}
                      x={pos.x - nodeRadius + 3}
                      y={pos.y - nodeRadius + 3}
                      width={(nodeRadius - 3) * 2}
                      height={(nodeRadius - 3) * 2}
                      clipPath={`url(#clip-${i})`}
                      preserveAspectRatio="xMidYMid slice"
                    />
                    <text
                      x={pos.x}
                      y={pos.y + nodeRadius + 20}
                      textAnchor="middle"
                      className="fill-charcoal text-[11px] font-bold uppercase"
                    >
                      {node.label.split("\n").length > 1
                        ? node.label.split("\n").map((line, li) => (
                            <tspan key={li} x={pos.x} dy={li === 0 ? 0 : 14}>
                              {line}
                            </tspan>
                          ))
                        : node.label}
                    </text>
                  </motion.g>
                );
              })}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
