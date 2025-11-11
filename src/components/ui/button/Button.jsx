import PropTypes from "prop-types";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  onClick,
  type = "button",
  className = "",
}) => {
  let baseStyle =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

  let variantStyle = "";
  if (variant === "primary") {
    variantStyle =
      "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500";
  } else if (variant === "secondary") {
    variantStyle =
      "bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-gray-300";
  } else if (variant === "danger") {
    variantStyle = "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500";
  } else if (variant === "outline") {
    variantStyle =
      "border border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-gray-300";
  }

  let sizeStyle = "";
  if (size === "sm") sizeStyle = "px-3 py-1 text-sm";
  else if (size === "md") sizeStyle = "px-4 py-2 text-base";
  else if (size === "lg") sizeStyle = "px-6 py-3 text-lg";

  const finalClassName = `${baseStyle} ${variantStyle} ${sizeStyle} ${
    fullWidth ? "w-full" : ""
  } ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`;

  return (
    <button
      type={type}
      className={finalClassName}
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary", "danger", "outline"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  className: PropTypes.string,
};

export default Button;
