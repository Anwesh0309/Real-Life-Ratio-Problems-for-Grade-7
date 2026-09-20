import React from 'react';

// Practice diagrams: counters, bar models, ratio tables, map scales and price cards.
// Same footprint & neon style as the original module's diagram box (300 x 300 viewBox).

const COLORS = {
  cyan: '#06B6D4',
  gold: '#F59E0B',
  pink: '#EC4899',
  purple: '#8B5CF6',
};
const PANEL = '#161129';
const MUTED = '#A78BFA';

const Badge = ({ x, y, w = 60, h = 30, text, color = COLORS.cyan, fill = '#F3F4F6', fontSize = 17, dashed = false }) => (
  <g transform={`translate(${x}, ${y})`}>
    <rect
      x={-w / 2}
      y={-h / 2}
      width={w}
      height={h}
      rx="8"
      fill={PANEL}
      stroke={color}
      strokeWidth="3"
      strokeDasharray={dashed ? '5 4' : undefined}
    />
    <text x="0" y={fontSize * 0.36} textAnchor="middle" fill={fill} fontSize={fontSize} fontWeight="900">
      {text}
    </text>
  </g>
);

const TokensDiagram = ({ rows }) => {
  const rowH = 104;
  const startY = 150 - (rows.length * rowH) / 2 + 6;
  const step = 31;
  return (
    <svg viewBox="0 0 300 300" className="w-full h-full max-w-[340px] select-none">
      {rows.map((row, i) => {
        const color = COLORS[row.color] || COLORS.cyan;
        const y = startY + i * rowH;
        const startX = 150 - ((row.n - 1) * step) / 2;
        return (
          <g key={row.label}>
            <text x="150" y={y + 22} textAnchor="middle" fill={color} fontSize="25" fontWeight="900">
              {row.label}: {row.n}
            </text>
            {Array.from({ length: row.n }).map((_, j) => (
              <circle key={j} cx={startX + j * step} cy={y + 64} r="14" fill={color} fillOpacity="0.85" stroke="#F3F4F6" strokeWidth="2.5" />
            ))}
          </g>
        );
      })}
    </svg>
  );
};

const BarsDiagram = ({ rows, bracket, diff, caption }) => {
  const numericUnits = rows.map((r) => (typeof r.units === 'number' ? r.units : 3));
  const maxUnits = Math.max(...numericUnits);
  const maxLabel = Math.max(...rows.map((r) => String(r.label).length));
  const labelFont = maxLabel > 7 ? 17 : 21;
  const labelW = Math.max(60, Math.round(maxLabel * (labelFont * 0.55) + 8));
  const left = 8 + labelW;
  const hasTag = rows.some((r) => r.tag);
  const tagW = hasTag ? 56 : 0;
  const bracketW = bracket ? 62 : 14;
  const avail = 300 - left - bracketW - tagW;
  const unitW = Math.min(58, avail / maxUnits);
  const rowH = rows.length <= 2 ? 58 : 46;
  const gap = rows.length <= 2 ? 18 : 12;
  const chartH = rows.length * rowH + (rows.length - 1) * gap;
  const extra = (diff ? 34 : 0) + (caption ? 30 : 0);
  const top = (300 - chartH - extra) / 2;
  const bottom = top + chartH;

  const shortest = Math.min(...numericUnits);
  const longestIdx = numericUnits.indexOf(maxUnits);
  const bracketLines = bracket ? String(bracket).split(' ') : [];
  const bracketFont = bracketLines.length > 1 ? 16 : String(bracket).length > 4 ? 15 : 19;

  return (
    <svg viewBox="0 0 300 300" className="w-full h-full max-w-[340px] select-none">
      {rows.map((row, i) => {
        const color = COLORS[row.color] || COLORS.cyan;
        const y = top + i * (rowH + gap);
        const unknown = typeof row.units !== 'number';
        const count = unknown ? 0 : row.units;
        const barEnd = left + (unknown ? unitW * 3 : count * unitW);
        const tagText = row.tag ? String(row.tag) : '';
        const tagWidth = Math.max(42, tagText.length * 13 + 14);
        return (
          <g key={row.label + i}>
            <text x="8" y={y + rowH / 2 + labelFont * 0.36} fill={color} fontSize={labelFont} fontWeight="900">
              {row.label}
            </text>
            {unknown ? (
              <g>
                <rect x={left} y={y} width={unitW * 3} height={rowH} rx="6" fill="none" stroke={color} strokeWidth="3" strokeDasharray="6 5" />
                <text x={left + (unitW * 3) / 2} y={y + rowH / 2 + 8} textAnchor="middle" fill={color} fontSize="24" fontWeight="900">
                  ?
                </text>
              </g>
            ) : (
              Array.from({ length: count }).map((_, j) => {
                const isDiffUnit = diff && i === longestIdx && j >= shortest;
                return (
                  <rect
                    key={j}
                    x={left + j * unitW + 1.5}
                    y={y}
                    width={unitW - 3}
                    height={rowH}
                    rx="6"
                    fill={color}
                    fillOpacity={isDiffUnit ? 0.3 : 0.75}
                    stroke={isDiffUnit ? COLORS.pink : '#F3F4F6'}
                    strokeWidth={isDiffUnit ? 3 : 1.5}
                    strokeDasharray={isDiffUnit ? '5 4' : undefined}
                  />
                );
              })
            )}
            {tagText ? (
              <Badge
                x={barEnd + 8 + tagWidth / 2}
                y={y + rowH / 2}
                w={tagWidth}
                h={30}
                text={tagText}
                color={tagText === '?' ? COLORS.pink : color}
                fill={tagText === '?' ? COLORS.pink : '#F3F4F6'}
                dashed={tagText === '?'}
              />
            ) : null}
          </g>
        );
      })}

      {bracket && (
        <g>
          <path
            d={`M ${300 - bracketW + 2} ${top} h 8 v ${chartH} h -8`}
            fill="none"
            stroke={MUTED}
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {bracketLines.map((ln, k) => (
            <text
              key={k}
              x={300 - bracketW + 16}
              y={top + chartH / 2 + bracketFont * 0.36 + (k - (bracketLines.length - 1) / 2) * (bracketFont + 3)}
              fill="#F3F4F6"
              fontSize={bracketFont}
              fontWeight="900"
            >
              {ln}
            </text>
          ))}
        </g>
      )}

      {diff && (
        <g>
          <rect x="52" y={bottom + 10} width="196" height="32" rx="8" fill={PANEL} stroke={COLORS.pink} strokeWidth="3" strokeDasharray="5 4" />
          <text x="150" y={bottom + 33} textAnchor="middle" fill={COLORS.pink} fontSize="18" fontWeight="900">
            Gap = {diff}
          </text>
        </g>
      )}

      {caption && (
        <text x="150" y={bottom + (diff ? 66 : 34)} textAnchor="middle" fill={MUTED} fontSize="19" fontWeight="900">
          {caption}
        </text>
      )}
    </svg>
  );
};

const TableDiagram = ({ headers, cols, ops }) => {
  const cellW = 128;
  const cellH = 50;
  const x0 = 150 - cellW - 5;
  const x1 = 150 + 5;
  const headY = 46;
  const rowY = [88, 88 + cellH + 46];
  const opY = rowY[0] + cellH + 23;
  const fs = (t) => (String(t).length > 12 ? 14 : String(t).length > 8 ? 16 : 19);

  const Cell = ({ x, y, v }) => {
    const unknown = v === '?';
    return (
      <g>
        <rect
          x={x}
          y={y}
          width={cellW}
          height={cellH}
          rx="9"
          fill={PANEL}
          stroke={unknown ? COLORS.pink : COLORS.cyan}
          strokeWidth="3"
          strokeDasharray={unknown ? '6 5' : undefined}
        />
        <text
          x={x + cellW / 2}
          y={y + cellH / 2 + 9}
          textAnchor="middle"
          fill={unknown ? COLORS.pink : '#F3F4F6'}
          fontSize="27"
          fontWeight="900"
        >
          {v}
        </text>
      </g>
    );
  };

  return (
    <svg viewBox="0 0 300 300" className="w-full h-full max-w-[340px] select-none">
      <text x={x0 + cellW / 2} y={headY} textAnchor="middle" fill={COLORS.gold} fontSize={fs(headers[0])} fontWeight="900">
        {headers[0]}
      </text>
      <text x={x1 + cellW / 2} y={headY} textAnchor="middle" fill={COLORS.gold} fontSize={fs(headers[1])} fontWeight="900">
        {headers[1]}
      </text>

      <Cell x={x0} y={rowY[0]} v={cols[0][0]} />
      <Cell x={x1} y={rowY[0]} v={cols[0][1]} />

      {cols[1] && (
        <g>
          {/* operator arrows between the two rows */}
          <path d={`M ${x0 + cellW / 2} ${rowY[0] + cellH + 4} v 30 m -6 -8 l 6 8 l 6 -8`} fill="none" stroke={COLORS.gold} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d={`M ${x1 + cellW / 2} ${rowY[0] + cellH + 4} v 30 m -6 -8 l 6 8 l 6 -8`} fill="none" stroke={COLORS.gold} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          <Badge x={150} y={opY} w={72} h={30} text={(ops && ops[0]) || '× ?'} color={COLORS.gold} fill={COLORS.gold} fontSize={19} />
          <Cell x={x0} y={rowY[1]} v={cols[1][0]} />
          <Cell x={x1} y={rowY[1]} v={cols[1][1]} />
        </g>
      )}
    </svg>
  );
};

const MapDiagram = ({ cm, scale, real }) => (
  <svg viewBox="0 0 300 300" className="w-full h-full max-w-[340px] select-none">
    <rect x="16" y="20" width="268" height="200" rx="16" fill="#1A1333" stroke={COLORS.purple} strokeWidth="3" />
    {[70, 120, 170].map((y) => (
      <line key={y} x1="16" y1={y} x2="284" y2={y} stroke="rgba(255,255,255,0.06)" strokeWidth="2" />
    ))}
    {[80, 150, 220].map((x) => (
      <line key={x} x1={x} y1="20" x2={x} y2="220" stroke="rgba(255,255,255,0.06)" strokeWidth="2" />
    ))}

    <line x1="66" y1="170" x2="232" y2="88" stroke={COLORS.gold} strokeWidth="5" strokeDasharray="10 8" strokeLinecap="round" />
    <circle cx="66" cy="170" r="12" fill="#F3F4F6" stroke={COLORS.cyan} strokeWidth="4" />
    <circle cx="232" cy="88" r="12" fill="#F3F4F6" stroke={COLORS.pink} strokeWidth="4" />
    <text x="66" y="200" textAnchor="middle" fill={COLORS.cyan} fontSize="18" fontWeight="900">A</text>
    <text x="232" y="70" textAnchor="middle" fill={COLORS.pink} fontSize="18" fontWeight="900">B</text>

    <Badge x={150} y={129} w={cm === '?' ? 66 : 84} h={32} text={cm === '?' ? '? cm' : `${cm} cm`} color={COLORS.gold} fill={cm === '?' ? COLORS.pink : '#F3F4F6'} dashed={cm === '?'} fontSize={18} />

    <Badge x={104} y={44} w={160} h={30} text={`Scale ${scale}`} color={COLORS.purple} fill="#C4B5FD" fontSize={15} />

    <Badge x={150} y={258} w={210} h={36} text={real === '?' ? 'Real distance: ?' : `Real distance: ${real}`} color={real === '?' ? COLORS.pink : COLORS.cyan} fill={real === '?' ? COLORS.pink : '#F3F4F6'} dashed={real === '?'} fontSize={18} />
  </svg>
);

const CardsDiagram = ({ items }) => (
  <svg viewBox="0 0 300 300" className="w-full h-full max-w-[340px] select-none">
    {items.map((it, i) => {
      const x = 12 + i * 148;
      const color = i === 0 ? COLORS.cyan : COLORS.gold;
      return (
        <g key={it.title}>
          <rect x={x} y="50" width="128" height="190" rx="16" fill={PANEL} stroke={color} strokeWidth="4" />
          <text x={x + 64} y="90" textAnchor="middle" fill={color} fontSize="23" fontWeight="900">{it.title}</text>
          <line x1={x + 16} y1="104" x2={x + 112} y2="104" stroke={color} strokeOpacity="0.5" strokeWidth="2" />
          {it.lines.map((ln, j) => (
            <text key={ln} x={x + 64} y={148 + j * 42} textAnchor="middle" fill="#F3F4F6" fontSize="28" fontWeight="900">{ln}</text>
          ))}
          <text x={x + 64} y="226" textAnchor="middle" fill={COLORS.pink} fontSize="17" fontWeight="900">1 pen = ?</text>
        </g>
      );
    })}
  </svg>
);

export const RatioDiagramSVG = ({ diagram }) => {
  if (!diagram) return null;
  switch (diagram.type) {
    case 'tokens':
      return <TokensDiagram rows={diagram.rows} />;
    case 'bars':
      return <BarsDiagram rows={diagram.rows} bracket={diagram.bracket} diff={diagram.diff} caption={diagram.caption} />;
    case 'table':
      return <TableDiagram headers={diagram.headers} cols={diagram.cols} ops={diagram.ops} />;
    case 'map':
      return <MapDiagram cm={diagram.cm} scale={diagram.scale} real={diagram.real} />;
    case 'cards':
      return <CardsDiagram items={diagram.items} />;
    default:
      return null;
  }
};

export default RatioDiagramSVG;
