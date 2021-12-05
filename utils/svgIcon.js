export const svgIcon = (
  name,
  color,
  width,
  height,
  opacity
) => {
  const iconsList = {
    replyArrow: (
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity={opacity ?? 1}>
          <path d="M15 10L20 15L15 20" stroke={color ?? ''} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4 4V11C4 12.0609 4.42143 13.0783 5.17157 13.8284C5.92172 14.5786 6.93913 15 8 15H20" stroke={color ?? ''} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
      </svg>
    ),
    replyBack: (
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity={opacity ?? 1}>
          <path d="M14 9V5L21 12L14 19V14.9C9 14.9 5.5 16.5 3 20C4 15 7 10 14 9Z" fill={color ?? ''}/>
        </g>
      </svg>

    ),
  };
  return iconsList[name] || <span>Ошибка svg</span>;
}
