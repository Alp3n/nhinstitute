const color = {
  white: "#ffffff",
  contrast: "#f8f8f8",
  "blue-1": "#1C94B4",
  "blue-2": "#1E88CB",
  "blue-3": "#2064D1",
  "blue-4": "#151070",
  "portrait-1": "#F1F5FC",
  "portrait-2": "#C6D1ED",
  "portrait-3": "#CAE3F2",
  hover: "#509EB4",
  button: "#003C74",
  "button-hover": "#00B4AA",
  background: "#E9EDF9",
}

const typography = {
  "text-p": "24px",
  "text-p2": "18px",
  "text-p3": "12px",
  "text-h1": "68px",
  "text-h2": "56px",
  "text-h3": "34px",
  "text-h4": "28px",
}

const size = {
  xs: `320px`,
  sm: `768px`,
  lg: `1200px`,
}
const device = {
  xs: `(min-width: ${size.xs})`,
  sm: `(min-width: ${size.sm})`,
  lg: `(min-width: ${size.lg})`,
}

export default { size, device, color, typography }
