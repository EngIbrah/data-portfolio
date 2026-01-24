export const AnimatedBorderButton = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`
        relative bg-white border border-gray-300 
        text-gray-700 hover:text-blue-600 hover:border-blue-400 
        transition-all duration-300 focus:outline-none focus-visible:ring-2 
        focus-visible:ring-blue-500 focus-visible:ring-offset-2 
        disabled:opacity-50 disabled:cursor-not-allowed group 
        px-6 py-3 text-base font-medium rounded-lg overflow-visible
        hover:shadow-sm
        ${className}
      `}
      {...props}
    >
      {/* Animated SVG Border */}
      <svg
        className="absolute left-0 top-0 w-full h-full pointer-events-none"
        viewBox="0 0 200 60"
        preserveAspectRatio="none"
        style={{ overflow: "visible" }}
      >
        <path
          d="M 8,1 L 192,1 A 7,7 0 0 1 199,8 L 199,52 A 7,7 0 0 1 192,59 L 8,59 A 7,7 0 0 1 1,52 L 1,8 A 7,7 0 0 1 8,1 Z"
          fill="none"
          stroke="url(#border-gradient)"
          strokeWidth="1.5"
          strokeDasharray="400 550"
          strokeDashoffset="400"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animated-border-path"
        />
        <defs>
          <linearGradient id="border-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#0d9488" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
      </svg>
      
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      
      {/* Subtle background gradient on hover */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-50/0 via-blue-50/0 to-blue-50/0 group-hover:from-blue-50/30 group-hover:via-blue-50/20 group-hover:to-blue-50/30 transition-all duration-500 -z-10" />
    </button>
  );
};