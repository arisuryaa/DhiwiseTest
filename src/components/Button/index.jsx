import React from "react";
import PropTypes from "prop-types";

const shapes = { square: "rounded-none", round: "rounded-[5px]" };
const variants = {
  fill: {
    green_700: "bg-green-700 shadow-bs text-white-A700",
    indigo_800: "bg-indigo-800 text-white-A700",
    white_A700: "bg-white-A700 shadow-bs1 text-black-900",
    green_A700: "bg-green-A700 text-white-A700",
  },
};
const sizes = {
  xs: "p-2",
  sm: "p-[18px]",
  md: "pl-3 pr-[11px] py-[21px]",
  lg: "px-3.5 py-[22px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "round",
  size = "sm",
  variant = "fill",
  color = "green_A700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf([
    "green_700",
    "indigo_800",
    "white_A700",
    "green_A700",
  ]),
};

export { Button };
