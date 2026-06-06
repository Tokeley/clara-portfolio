"use client";

import { motion } from "framer-motion";

// ─── SVG primitives ───────────────────────────────────────────────────────────

function Photo({
  x,
  y,
  w,
  h,
  rot = 0,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  rot?: number;
}) {
  const cx = x + w / 2;
  const cy = y + h / 2;
  const transform = rot ? `rotate(${rot} ${cx} ${cy})` : undefined;
  return (
    <g transform={transform}>
      {/* shadow offset */}
      <rect x={x + 3} y={y + 3} width={w} height={h} fill="rgba(0,0,0,0.15)" />
      {/* fill */}
      <rect x={x} y={y} width={w} height={h} fill="#C4C4C4" />
      {/* white border */}
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        fill="none"
        stroke="white"
        strokeWidth="3"
      />
    </g>
  );
}

function Label({
  x,
  y,
  lines,
  size = 11,
}: {
  x: number;
  y: number;
  lines: string[];
  size?: number;
}) {
  return (
    <>
      {lines.map((line, i) => (
        <text
          key={i}
          x={x}
          y={y + i * Math.round(size * 1.32)}
          fontSize={size}
          fontWeight="700"
          fontFamily="Inter, sans-serif"
          fill="#1A1A1A"
          letterSpacing="0.5"
        >
          {line}
        </text>
      ))}
    </>
  );
}

function Small({
  x,
  y,
  lines,
}: {
  x: number;
  y: number;
  lines: string[];
}) {
  return (
    <>
      {lines.map((line, i) => (
        <text
          key={i}
          x={x}
          y={y + i * 9}
          fontSize="7.5"
          fontFamily="Inter, sans-serif"
          fill="#555555"
          letterSpacing="0.3"
        >
          {line}
        </text>
      ))}
    </>
  );
}

// ─── Animated connecting line ────────────────────────────────────────────────

function PanelPath({ d }: { d: string }) {
  return (
    <motion.path
      d={d}
      stroke="#1A1A1A"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        pathLength: { duration: 3.5, ease: "easeInOut" },
        opacity: { duration: 0.05 },
      }}
    />
  );
}

// ─── Panel wrapper ────────────────────────────────────────────────────────────
// 1000×620 viewBox → ~16:10 aspect ratio

function Panel({
  path,
  children,
}: {
  path: string;
  children: React.ReactNode;
}) {
  return (
    // padding-bottom = 620/1000 = 62% keeps the aspect ratio responsive
    <div className="relative w-full" style={{ paddingBottom: "62%" }}>
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1000 620"
        xmlns="http://www.w3.org/2000/svg"
        overflow="hidden"
      >
        {/* path renders behind photos */}
        <PanelPath d={path} />
        {children}
      </svg>
    </div>
  );
}

// ─── Panel 1: PROCESS → RESEARCH → DEV SKETCHES → EARLY CAD → FIRST PROTOTYPE → BACK TO DRAWING BOARD ───

// Snake path: starts right of "PROCESS", arcs up to Research, sweeps right to Dev Sketches,
// makes a big backward-C down to Early CAD, continues to First Prototype bottom-left,
// then sweeps right to Back to Drawing Board.
const PANEL1_PATH = `
  M 200 258
  C 248 242, 268 170, 300 157
  C 380 140, 565 128, 708 146
  C 778 156, 828 183, 858 218
  C 892 258, 898 308, 872 345
  C 850 370, 810 375, 762 373
  C 710 370, 640 360, 570 356
  C 508 352, 452 358, 410 363
  C 362 368, 292 380, 238 402
  C 194 420, 164 442, 158 465
  C 150 492, 165 522, 200 537
  C 248 555, 360 562, 468 562
  C 572 562, 672 555, 750 538
  C 812 524, 844 502, 852 474
`;

function Panel1() {
  return (
    <Panel path={PANEL1_PATH}>
      {/* ─── PROCESS heading ─────────────────────────────────────── */}
      <text
        x="35"
        y="268"
        fontSize="52"
        fontWeight="700"
        fontFamily="Inter, sans-serif"
        fill="#1A1A1A"
        letterSpacing="-1"
      >
        PROCESS
      </text>

      {/* ─── RESEARCH AND SIMILAR PRODUCTS ──────────────────────── */}
      <Label x={272} y={139} lines={["RESEARCH AND", "SIMILAR PRODUCTS"]} />
      {/* photos (scattered cluster) */}
      <Photo x={392} y={26} w={114} h={92} rot={-4} />
      <Photo x={516} y={15} w={135} h={112} rot={3} />
      <Photo x={660} y={20} w={124} h={94} rot={-2} />
      {/* sub-labels */}
      <Small x={396} y={18} lines={["NUCLEARIO", "SEEDLING SUPPORT"]} />
      <Small x={526} y={140} lines={["AIMS CORAL", "SEEDING DEVICE"]} />
      <Small x={666} y={13} lines={["BESS", "ELEMENTS"]} />

      {/* ─── DEVELOPMENTAL SKETCHES ─────────────────────────────── */}
      <Label x={762} y={280} lines={["DEVELOPMENTAL", "SKETCHES"]} />
      {/* two overlapping sketchbooks */}
      <Photo x={640} y={106} w={148} h={120} rot={-3} />
      <Photo x={784} y={100} w={122} h={112} rot={5} />

      {/* ─── EARLY CAD MODELS ───────────────────────────────────── */}
      <Small x={108} y={338} lines={["EXPLORING", "NESTED GEOMETRY"]} />
      <Label x={464} y={356} lines={["EARLY CAD", "MODELS"]} />
      {/* three CAD photos */}
      <Photo x={126} y={302} w={132} h={122} rot={2} />
      <Photo x={264} y={292} w={118} h={132} rot={-4} />
      <Photo x={350} y={315} w={108} h={120} rot={3} />

      {/* ─── FIRST PROTOTYPE ────────────────────────────────────── */}
      <Label x={108} y={430} lines={["FIRST", "PROTOTYPE"]} />
      {/* three prototype photos */}
      <Photo x={30} y={448} w={116} h={100} rot={-6} />
      <Photo x={156} y={440} w={122} h={105} rot={4} />
      <Photo x={285} y={445} w={118} h={105} rot={-3} />
      {/* sub-labels */}
      <Small x={32} y={540} lines={["KINA SPINE", "TESTING"]} />
      <Small x={160} y={434} lines={["MATERIAL", "TESTING"]} />
      <Small x={286} y={542} lines={["HAS GEOMETRY", "ISSUES"]} />

      {/* ─── BACK TO THE DRAWING BOARD ──────────────────────────── */}
      <Label x={720} y={430} lines={["BACK TO THE", "DRAWING BOARD"]} />
      {/* four overlapping sketchbooks */}
      <Photo x={528} y={448} w={108} h={96} rot={-8} />
      <Photo x={634} y={452} w={120} h={105} rot={3} />
      <Photo x={752} y={440} w={112} h={108} rot={-4} />
      <Photo x={862} y={444} w={106} h={98} rot={6} />
      {/* sub-labels */}
      <Small x={558} y={540} lines={["NEW JOINING", "IDEAS"]} />
      <Small x={864} y={434} lines={["PRODUCT", "PACKAGING"]} />
    </Panel>
  );
}

// ─── Panel 2: FIRST PACKAGING → FURTHER CAD → FINAL DRAWINGS → FINAL CRADLE → FINAL PROTOTYPE → FINAL PACKAGING / FINISHED PRODUCT ───

// Path enters top-left, sweeps right across packaging and CAD, makes a big backward-C
// down through Final Drawings, sweeps right to Final Cradle, curves down to Final Prototype,
// then right to Final Packaging.
const PANEL2_PATH = `
  M 65 128
  C 120 120, 178 110, 215 115
  C 295 118, 395 128, 455 132
  C 535 136, 605 124, 652 115
  C 706 105, 768 96, 820 105
  C 870 113, 900 143, 905 188
  C 910 236, 898 286, 880 324
  C 862 360, 844 373, 838 375
  C 815 380, 768 376, 718 372
  C 650 366, 545 356, 438 350
  C 335 344, 232 346, 160 353
  C 115 358, 85 386, 74 422
  C 62 460, 76 497, 108 520
  C 148 544, 240 558, 348 560
  C 452 562, 558 558, 652 550
  C 733 542, 798 528, 840 516
  C 880 503, 908 486, 912 465
`;

function Panel2() {
  return (
    <Panel path={PANEL2_PATH}>
      {/* ─── FIRST PACKAGING MODEL ──────────────────────────────── */}
      <Label x={105} y={116} lines={["FIRST PACKAGING MODEL"]} />
      {/* two packaging photos */}
      <Photo x={185} y={26} w={114} h={120} rot={-2} />
      <Photo x={308} y={18} w={120} h={128} rot={4} />
      <Small x={310} y={160} lines={["KINA SILHOUETTE", "FOR ASSOCIATION"]} />

      {/* ─── FURTHER CAD MODELS ─────────────────────────────────── */}
      <Label x={620} y={112} lines={["FURTHER CAD", "MODELS"]} />
      {/* three CAD photos */}
      <Photo x={640} y={16} w={118} h={104} rot={-3} />
      <Photo x={764} y={8} w={118} h={118} rot={4} />
      <Photo x={824} y={118} w={122} h={110} rot={-2} />
      <Small x={648} y={132} lines={["TESTING SEA FLOOR", "FASTENING OPTIONS"]} />
      <Small x={650} y={240} lines={["TWO REPEATING PARTS", "FOR EASE OF MANUFACTURE"]} />

      {/* ─── FINAL DRAWINGS ─────────────────────────────────────── */}
      <Label x={52} y={342} lines={["FINAL DRAWINGS"]} />
      {/* three drawing photos */}
      <Photo x={30} y={358} w={130} h={120} rot={-4} />
      <Photo x={170} y={346} w={128} h={126} rot={3} />
      <Photo x={308} y={353} w={120} h={122} rot={-2} />
      <Small x={34} y={492} lines={["TEXTURE", "AND AESTHETICS"]} />
      <Small x={174} y={336} lines={["ASSEMBLY AND", "MECHANICS"]} />
      <Small x={350} y={342} lines={["VORONOI GEOMETRY", "FOR WATER TO PASS", "THROUGH"]} />

      {/* ─── FINAL CRADLE MODEL ─────────────────────────────────── */}
      <Label x={845} y={325} lines={["FINAL CRADLE", "MODEL"]} />
      {/* large Voronoi CAD render + sitting model */}
      <Photo x={558} y={295} w={178} h={152} rot={-1} />
      <Photo x={844} y={358} w={112} h={108} rot={3} />
      <Small x={848} y={350} lines={["JOINED BY SLIDING", "DOVETAIL JOINTS"]} />

      {/* ─── FINAL PROTOTYPE ────────────────────────────────────── */}
      <Label x={205} y={450} lines={["FINAL PROTOTYPE:", "PRODUCT PHOTOS + VIDEO"]} />
      {/* large underwater photo */}
      <Photo x={202} y={466} w={178} h={142} rot={0} />
      <Small x={210} y={542} lines={["MADE FROM SLS", "PRINTED NYLON"]} />
      <Small x={385} y={455} lines={["KINA GEOMETRY AND TEXTURE", "FOR CUSTOMER RECOGNITION"]} />

      {/* ─── FINAL PACKAGING MODEL ──────────────────────────────── */}
      <Label x={858} y={458} lines={["FINAL", "PACKAGING MODEL"]} />
      {/* two packaging photos */}
      <Photo x={728} y={466} w={114} h={106} rot={-3} />
      <Photo x={846} y={462} w={112} h={112} rot={4} />
      <Small x={732} y={458} lines={["MADE FROM", "PRESSED ALUMINIUM"]} />

      {/* ─── FINISHED PRODUCT heading ───────────────────────────── */}
      <text
        x="32"
        y="476"
        fontSize="50"
        fontWeight="700"
        fontFamily="Inter, sans-serif"
        fill="#1A1A1A"
        letterSpacing="-1"
      >
        FINISHED
      </text>
      <text
        x="32"
        y="534"
        fontSize="50"
        fontWeight="700"
        fontFamily="Inter, sans-serif"
        fill="#1A1A1A"
        letterSpacing="-1"
      >
        PRODUCT
      </text>
    </Panel>
  );
}

// ─── Public export ────────────────────────────────────────────────────────────

export function ProcessTimeline() {
  return (
    <div>
      <Panel1 />
      <Panel2 />
    </div>
  );
}
