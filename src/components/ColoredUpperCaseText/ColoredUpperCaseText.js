
function ColoredUppercaseText({ text, color }) {
  const style = {
    color: color,
    textTransform: 'uppercase'
  };

  return <p style={style}>{text}</p>
}

export default ColoredUppercaseText