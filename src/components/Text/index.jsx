import React from "react";

const sizeClasses = {
  txtPoppinsSemiBold30: "font-poppins font-semibold",
  txtPoppinsBold54: "font-bold font-poppins",
  txtPoppinsRegular16WhiteA700: "font-normal font-poppins",
  txtPoppinsMedium14: "font-medium font-poppins",
  txtPoppinsRegular16Black900c4: "font-normal font-poppins",
  txtPoppinsSemiBold16: "font-poppins font-semibold",
  txtPoppinsSemiBold64WhiteA700: "font-poppins font-semibold",
  txtPoppinsSemiBold32WhiteA700: "font-poppins font-semibold",
  txtPoppinsSemiBold32: "font-poppins font-semibold",
  txtPoppinsSemiBold54: "font-poppins font-semibold",
  txtPoppinsSemiBold48Black900: "font-poppins font-semibold",
  txtPoppinsSemiBold20Black900: "font-poppins font-semibold",
  txtPoppinsSemiBold20GreenA700: "font-poppins font-semibold",
  txtPoppinsSemiBold18: "font-poppins font-semibold",
  txtPoppinsMedium15: "font-medium font-poppins",
  txtPoppinsMedium16: "font-medium font-poppins",
  txtPoppinsRegular18: "font-normal font-poppins",
  txtPoppinsSemiBold40: "font-poppins font-semibold",
  txtPoppinsMedium16WhiteA700: "font-medium font-poppins",
  txtPoppinsRegular14: "font-normal font-poppins",
  txtPoppinsSemiBold20WhiteA700: "font-poppins font-semibold",
  txtPoppinsRegular15: "font-normal font-poppins",
  txtPoppinsRegular16: "font-normal font-poppins",
  txtPoppinsSemiBold24: "font-poppins font-semibold",
  txtPoppinsMedium24: "font-medium font-poppins",
  txtPoppinsSemiBold48: "font-poppins font-semibold",
  txtPoppinsRegular24: "font-normal font-poppins",
  txtPoppinsSemiBold30Green700: "font-poppins font-semibold",
  txtPoppinsSemiBold20: "font-poppins font-semibold",
  txtPoppinsSemiBold64: "font-poppins font-semibold",
  txtPoppinsMedium20: "font-medium font-poppins",
  txtPoppinsRegular20: "font-normal font-poppins",
  txtPoppinsSemiBold54WhiteA700: "font-poppins font-semibold",
  txtPoppinsRegular20Gray600: "font-normal font-poppins",
  txtPoppinsSemiBold24GreenA700: "font-poppins font-semibold",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
