const colors = {
  primary: "#FF0079",
  orange: "#FFB800",
  navy: "#002C6E",
  blue: "#30D0E5",
  green: "#C7FFAA",
  black: "black",
  white: "white",
  grey: "grey"
};

const gradients = {
  primary: `linear-gradient(to top right,${colors.primary},${colors.orange})`,
  secondary: `linear-gradient(to top right,${colors.blue},${colors.green})`
};

const other = {
  boxShadow: `0 20px 20px rgba(0, 0, 0, 0.1);`
};

const theme = { colors, gradients, ...other };

console.log(theme);

export default theme;
