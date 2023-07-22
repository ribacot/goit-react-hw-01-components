export default function randomColor() {
  const color = '#' + Math.random().toString(16).slice(3, 9);
  return color;
}
