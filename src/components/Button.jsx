export const Button = ({
  className = "",
  variant = "primary",
  size = "default",
  children,
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed";
  
  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500 border border-blue-600 shadow-sm hover:shadow-md",
    secondary: "bg-teal-600 text-white hover:bg-teal-700 focus-visible:ring-teal-500 border border-teal-600 shadow-sm hover:shadow-md",
    outline: "bg-white text-gray-700 border border-gray-300 hover:border-blue-600 hover:text-blue-600 focus-visible:ring-blue-500 hover:bg-blue-50",
    ghost: "bg-transparent text-gray-600 hover:text-blue-600 hover:bg-blue-50 focus-visible:ring-blue-500",
  };
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm rounded-lg gap-1.5",
    default: "px-6 py-3 text-base rounded-lg gap-2",
    lg: "px-8 py-3.5 text-lg rounded-lg gap-2.5",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  return (
    <button className={classes} {...props}>
      <span className="flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};